import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';


const DashboardPage = () => {
  const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();
  const history = useHistory()

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      history.pushState('/login')
    } catch(error) {
      setError(error.message)
    }
  };

  return (
    <div>
      <div>
        <h2>Profile</h2>
        <strong>{currentUser.email}</strong>
      </div>
      <Link to="/update-profile">Update Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
