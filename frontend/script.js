const API = "http://employee-backend:5000/api/employees";

async function load() {
  const res = await fetch(API);
  const data = await res.json();

  document.getElementById("list").innerHTML = data
    .map(
      (e) => `
      <div class="item">
        <b>${e.name}</b> <br>
        ${e.email} <br>
        ${e.role}
        <div class="actions">
          <button onclick="editEmployee('${e._id}', '${e.name}', '${e.email}', '${e.role}')">Edit</button>
          <button onclick="deleteEmployee('${e._id}')">Delete</button>
        </div>
      </div>`
    )
    .join("");
}

async function addEmployee() {
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      role: role.value
    })
  });

  name.value = email.value = role.value = "";
  load();
}

async function deleteEmployee(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  load();
}

async function editEmployee(id, oldName, oldEmail, oldRole) {
  const name = prompt("New Name:", oldName);
  const email = prompt("New Email:", oldEmail);
  const role = prompt("New Role:", oldRole);

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, role })
  });

  load();
}

load();