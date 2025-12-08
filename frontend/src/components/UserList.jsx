import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
      <h2>Users</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td style={tdStyle}>{u.id}</td>
              <td style={tdStyle}>{u.name}</td>
              <td style={tdStyle}>{u.email}</td>
              <td style={tdStyle}>
                <button onClick={() => deleteUser(u.id)} style={delButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableStyle = { width: '100%', borderCollapse: 'collapse' };
const thStyle = { borderBottom: '2px solid #555', padding: '0.5rem', textAlign: 'left' };
const tdStyle = { borderBottom: '1px solid #333', padding: '0.5rem' };
const delButton = {
  padding: '0.3rem 0.6rem',
  borderRadius: '6px',
  border: 'none',
  background: '#f44336',
  color: '#fff',
  cursor: 'pointer'
};

export default UserList;
