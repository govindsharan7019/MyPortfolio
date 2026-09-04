import React from 'react';
import { Link} from 'react-router-dom';
import Video  from './Video';

function LeftContent() {
  return (
    <div className='w-1/2 md:w-1/2  h-screen md:h-screen relative'>
        <div className=' absolute top-1/3 md:top-1/3  left-2 md:left-1/3  h-1/2  w-[45vw] md:w-[25vw] flex-col font-[text1] overflow-hidden '>
        {/* hold text + video */}
            <div className='flex flex-col '>
                <h1 className='text-[7.2vw] md:text-[4.2vw] leading-none  ' to='/Contact'>Welcome to
                <div className='flex justify-start' > 
                    <div>
                    <h1>My</h1>
                    </div>
                    {/* video in this div */}
                    <div className=' ml-2 md:ml-2  w-[16vw]  md:w-[8vw] flex justify-center '> 
                      <Video />
                    </div> 
                    </div> 
                      Universe.
                    </h1>
                </div>
                {/* paragraph in text area */}
            <div className=' text-[16px] mt-2  font-[text2]'>
                <p>Building modern web experiences with clean design, powerful code, and a touch of mystery.</p>
            </div>
            {/* button of get in toch */}
            <div className=' border-black mt-4 flex justify-center border-2 hover:bg-black h-8 md:h-12 w-30 md:w-35 items-center overflow-hidden rounded-full'>
                <Link className='text-white cursor-pointer hover:bg-black flex justify-center  bg-black  items-center h-6 md:h-10 w-28 md:w-33 rounded-full ' to="/Contact">Get in touch</Link>
            </div>
        </div>
    </div>
  )
}

export default LeftContent;
