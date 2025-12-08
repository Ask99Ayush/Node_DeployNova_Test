const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/test', (req, res) => res.json({ message: 'Backend is working!' }));

// CRUD endpoints
app.get('/api/items', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM items ORDER BY created_at DESC');
  res.json(rows);
});

app.post('/api/items', async (req, res) => {
  const { title, description } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO items (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  res.status(201).json(rows[0]);
});

app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const { rows } = await pool.query(
    'UPDATE items SET title=$1, description=$2 WHERE id=$3 RETURNING *',
    [title, description, id]
  );
  res.json(rows[0]);
});

app.delete('/api/items/:id', async (req, res) => {
  await pool.query('DELETE FROM items WHERE id=$1', [req.params.id]);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
