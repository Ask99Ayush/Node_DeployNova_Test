import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return alert('Please fill all fields');
    try {
      await axios.post('http://localhost:5000/api/users', { name, email });
      setName('');
      setEmail('');
      window.location.reload(); // simple way to refresh list
    } catch (err) {
      console.error(err);
      alert('Error adding user');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add User</button>
    </form>
  );
};

const formStyle = { display: 'flex', gap: '0.5rem', marginBottom: '1rem' };
const inputStyle = {
  padding: '0.5rem',
  borderRadius: '8px',
  border: '1px solid #555',
  background: '#222',
  color: '#fff'
};
const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  border: 'none',
  background: '#4CAF50',
  color: '#fff',
  cursor: 'pointer'
};

export default AddUser;
