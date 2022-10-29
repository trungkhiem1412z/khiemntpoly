import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout1 = () => {
  return (
    <div className='container'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <Outlet />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout1;
