import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="app-container" style={{ background: '#121212', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <h1>DeployNova - Test App</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
