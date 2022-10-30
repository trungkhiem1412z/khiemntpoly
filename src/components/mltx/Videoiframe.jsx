import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Videoiframe = () => {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <ReactPlayer controls='true' url='https://www.youtube.com/watch?v=1mlqwxYBW_w' />
    </div>
  );
};

export default Videoiframe;
