import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../page/Home';
import Tlt from '../page/TetlaTet';
import Mltx from '../page/Mltx';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tetlatet' element={<Tlt />} />
      <Route path='/mltx' element={<Mltx />} />
    </Routes>
  );
};

export default Routers;
