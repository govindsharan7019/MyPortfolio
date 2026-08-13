import React from 'react';
import mainvideo from '../../Assets/video/video_960bfc93ee55.mp4'

function Video() {
  return (
     <div className='h-9 md:h-19 w-18 md:w-40 '>
        <video src={mainvideo}
         autoPlay loop muted 
         className='h-full w-full object-cover rounded-full' ></video>
    </div>
  )
}

export default Video;
