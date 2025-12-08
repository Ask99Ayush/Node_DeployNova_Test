const API = "http://localhost:5000/api/employees";

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
                    <td><button onclick="deleteEmp('${emp._id}')">Delete</button></td>
                </tr>`;
            });
            document.querySelector("#empTable tbody").innerHTML = rows;
        });
}

function addEmployee() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const salary = document.getElementById("salary").value;

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, salary })
    })
    .then(() => loadEmployees());
}

function deleteEmp(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
        .then(() => loadEmployees());
}
