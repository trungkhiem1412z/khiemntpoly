import React, { useEffect } from 'react';
import { Fireworks } from '@fireworks-js/react';
import Tet from '../components/tet/Tet';
import Multiplay from '../components/tet/Multiplay';

import BannerLeft from '../images/left.png';
import BannerRight from '../images/right.png';
import LogoTet from '../images/2023.png';

const TetlaTet = () => {
  useEffect(() => {
    document.title = 'Tết Đến Rồi!';
  });
  return (
    // <div className='relative max-h-max bg-gradient-to-r from-orange-cus to-yellow-cus'>
    <div className='bg- relative max-h-max bg-tet-bg bg-cover bg-fixed bg-center bg-no-repeat'>
      <img className='absolute left-10 top-10 hidden w-[200px] lg:block' src={BannerLeft} alt='' />
      <img className='absolute right-10 top-10 hidden w-[200px] lg:block' src={BannerRight} alt='' />
      <div className='flex justify-center pt-6'>
        <div className='flex w-4/12 justify-center rounded-3xl bg-white shadow-md'>
          <img width='300px' src={LogoTet} alt='' />
        </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <Tet />
      </div>
      <div className='flex justify-center py-4'>
        <Multiplay />
      </div>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100,
          },
          acceleration: 1.0,
          particles: 200,
          traceLength: 3,
          traceSpeed: 10,
        }}
        delay={{
          min: 100.0,
          max: 100.0,
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      />
    </div>
  );
};

export default TetlaTet;
