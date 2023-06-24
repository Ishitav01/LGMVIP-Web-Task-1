import React from 'react';
import './UserCardGrid.css';

const UserCardGrid = ({ users }) => {
  return (
    <div className="user-card-grid">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={user.first_name} className="user-avatar" />
          <h3 className="user-name">{`${user.first_name} ${user.last_name}`}</h3>
          <p className="user-email">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCardGrid;
