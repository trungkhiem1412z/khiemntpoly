import React, { useEffect } from 'react';
import Tet from '../components/Tet';

const TetlaTet = () => {
  useEffect(() => {
    document.title = 'Tết Đến Rồi!';
  });
  return (
    <div className='text-center'>
      Tết Đến Nơi Rồi!!!
      <Tet />
    </div>
  );
};

export default TetlaTet;
