const API = "http://backend:5000/api/employees";

let editingId = null;

// Load employees on page load
window.onload = loadEmployees;

function loadEmployees() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.forEach(emp => {
                rows += `
                <tr>
                    <td>${emp.name}</td>
                    <td>${emp.role}</td>
                    <td>${emp.salary}</td>
                    <td>
                        <button onclick="editEmployee('${emp._id}', '${emp.name}', '${emp.role}', ${emp.salary})">Edit</button>
                        <button onclick="deleteEmployee('${emp._id}')">Delete</button>
                    </td>
                </tr>`;
            });
            document.querySelector("#empTable tbody").innerHTML = rows;
        });
}

function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value.trim();
    const salary = document.getElementById("salary").value.trim();

    if (!name || !role || !salary) {
        alert("Please fill all fields");
        return;
    }

    const employeeData = { name, role, salary };

    // If editing → Update employee
    if (editingId) {
        fetch(`${API}/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employeeData)
        })
        .then(() => {
            resetForm();
            loadEmployees();
        });
    }
    else {
        // Add new employee
        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employeeData)
        })
        .then(() => {
            resetForm();
            loadEmployees();
        });
    }
}

function deleteEmployee(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
        .then(() => loadEmployees());
}

function editEmployee(id, name, role, salary) {
    editingId = id;

    document.getElementById("name").value = name;
    document.getElementById("role").value = role;
    document.getElementById("salary").value = salary;

    document.getElementById("submitBtn").innerText = "Update Employee";
}

function resetForm() {
    editingId = null;
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("submitBtn").innerText = "Add Employee";
}
