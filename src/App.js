import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import UserCardGrid from './UserCardGrid';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }

      setIsLoading(false);
    };

    getUsers();
  }, []);

  const handleGetUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users?per_page=12');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }

    setIsLoading(false);
  };

  return (
    <div className="App">
      <Navbar onGetUsers={handleGetUsers} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserCardGrid users={users} />
      )}
    </div>
  );
};

export default App;
