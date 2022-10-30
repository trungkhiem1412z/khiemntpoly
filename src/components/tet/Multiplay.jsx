import React from 'react';
import ReactPlayer from 'react-player';

const Multiplay = () => {
  return (
    <div className='w-10/12 lg:w-7/12'>
      <div className='aspect-w-16 aspect-h-9'>
        <ReactPlayer
          width='100%'
          height='100%'
          controls='true'
          url='https://www.youtube.com/watch?v=nG1-7gExImU'
        />
      </div>
    </div>
  );
};

export default Multiplay;
