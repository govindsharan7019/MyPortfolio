import React from 'react';
import mainvideo from '../../Assets/video/video_960bfc93ee55.mp4'

function Video() {
  return (
     <div>
        <video src={mainvideo}
         autoPlay loop muted 
         className='h-full w-full object-cover rounded-full' ></video>
    </div>
  )
}

export default Video;
