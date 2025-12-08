const apiBase = '/api';
let selectedId = null;

async function fetchItems() {
  const res = await fetch(`${apiBase}/items`);
  const items = await res.json();
  document.getElementById('items').innerHTML = items.map(i => `
    <div>
      <strong>${i.title}</strong>
      <p>${i.description || ''}</p>
      <button onclick="edit(${i.id})">Edit</button>
      <button onclick="del(${i.id})">Delete</button>
    </div>
  `).join('');
}

async function createItem() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  await fetch(`${apiBase}/items`, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({title, description})
  });
  clearForm();
  fetchItems();
}

async function updateItem() {
  await fetch(`${apiBase}/items/${selectedId}`, {
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      title: document.getElementById('title').value,
      description: document.getElementById('description').value
    })
  });
  clearForm();
  fetchItems();
}

async function del(id) {
  await fetch(`${apiBase}/items/${id}`, { method:'DELETE' });
  fetchItems();
}

function edit(id) {
  selectedId = id;
  fetch(`${apiBase}/items/${id}`).then(res=>res.json()).then(item=>{
    document.getElementById('title').value = item.title;
    document.getElementById('description').value = item.description || '';
    document.getElementById('updateBtn').disabled = false;
  });
}

function clearForm() {
  selectedId = null;
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('updateBtn').disabled = true;
}

document.getElementById('createBtn').onclick = createItem;
document.getElementById('updateBtn').onclick = updateItem;
document.getElementById('clearBtn').onclick = clearForm;

fetchItems();
