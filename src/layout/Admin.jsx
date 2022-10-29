import React from 'react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='container'>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
