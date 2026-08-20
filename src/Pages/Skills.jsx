import React, { useRef } from 'react'
import hanging from '../Assets/pics/download-removebg-preview.png'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function Skills() {

  const container=useRef(null);
  const videobg = useRef(null);

  useGSAP(() => {
        // Simple timeline: No pinning, no scaling
        gsap.to(videobg.current, {
            opacity: 0, // Fade out completely
            ease: "none", // Smooth linear fade as you scroll
            scrollTrigger: {
                trigger: container.current,
                scroller: 'body',
                start: 'top top',      // Start fading when the top of the video hits the top of the screen
                end: '+=300px',     // Finish fading completely when the video scrolls fully off-screen
                scrub: true, 
                  
            }
        });
    }, [], { scope: container });



  return (
    <div ref={container} className='relative h-200 md:h-400 w-full  text-white font-[text1]   overflow-hidden bg-[radial-gradient(circle_at_center,_#2a2b2d_50%,_#000000_80%)]'>
        <div>
          <video ref={videobg} src='https://www.pexels.com/download/video/26733215/' autoPlay loop muted className=' absolute object-cover w-full h-190' ></video>
        </div>
        <div className='flex flex-col items-center h-20 md:h-50 '>
        {/* heading */}
          <div className='absolute mt-4 md:mt-25 font-bold text-[16px] md:text-[20px] text-[#7d7d7d]'>
            <p>Skills</p>
          </div>
          <div className='absolute text-xl md:text-[55px] mt-10 md:mt-30'>
            <h1>My tech stack</h1>
           </div>
        </div>
      {/* content divided into two container */}
      <div className='relative h-80 md:h-300 w-full md:w-full  flex flex-col gap-10  '>
        {/* left container */}
        <div>
             <div className= 'relative   w-1/2 h-full'>
          <div className='absolute  leading-10 top-0 md:top-15 left-5 md:left-95 p-5 w-75 md:w-125   '>
            <h1 className='uppercase'>Primary stack</h1>
            <div className='flex justify-between'>
              <h1>React.js</h1>
              <h1>90%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-3 md:h-4 w-70 md:w-115 rounded-2xl'>
              <div className='h-2 md:h-3 rounded-2xl w-60 md:w-103 bg-[#103991]'></div>
            </div>
            <div className='flex justify-between'>
              <h1>Javascript</h1>
              <h1>86%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-3 md:h-4 w-70 md:w-115 rounded-2xl'>
              <div className='h-2 md:h-3 rounded-2xl w-55 md:w-98 bg-[#f7df1e]'></div>
            </div>
            <div className='flex justify-between'>
              <h1>Tailwind</h1>
              <h1>80%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-3 md:h-4 w-70 md:w-115 rounded-2xl'>
              <div className='h-2 md:h-3 rounded-2xl w-50 md:w-92 bg-[#2c699a]'></div>
            </div>
            <div className='flex justify-between'>
              <h1>GSAP</h1>
              <h1>70%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-3 md:h-4 w-70 md:w-115 rounded-2xl'>
              <div className='h-2 md:h-3 rounded-2xl w-45 md:w-82 bg-[#88ce02]'></div>
            </div>
          </div>

        </div>
        {/* right container */}
        <div className='relative  h-full w-1/2 '>
          <div className='absolute  leading-10 top-80 md:top-15 left-5 md:left-300 p-5  w-90 w-200md: md:w-125   '>
            <div>
           <h1 className='uppercase font-bold p-1'>Also work with</h1>
            </div>
            <div className='' >
              <button className='bg-white text-black w-20 md:w-28 pb-4 text-[14px] rounded-full mb-2 mr-2 mt-2 h-8 md:h-10 cursor-pointer hover:scale-110'>Node.js</button>
              <button className='bg-white text-black w-20 md:w-28 pb-4 text-[14px] rounded-full mb-2 mr-2 mt-2 h-8 md:h-10 cursor-pointer hover:scale-110 ml-2'>Express</button>
              <button className='bg-white text-black w-20 md:w-28 pb-4 text-[14px] rounded-full mb-2 mr-2 mt-2 h-8 md:h-10 cursor-pointer hover:scale-110 ml-2'>MongoDB</button>
              <button className='bg-white text-black w-16 md:w-28 pb-4 text-[14px] rounded-full mb-2 mr-2 mt-2 h-8 md:h-10 cursor-pointer hover:scale-110'>Java</button>
              <button className='bg-white text-black w-25 md:w-28 pb-4 pr- pl-2 text-[14px] rounded-full mb-2 mr-2 mt-2 h-8 md:h-10 cursor-pointer hover:scale-110 ml-2'>HTML&CSS</button>
              <button className='bg-white text-black w-20 md:w-28 pb-4 text-[14px] rounded-full mb-2 mr-2 mt-2 h-8 md:h-10 cursor-pointer hover:scale-110 ml-2'>Typescript</button>
              <button className='bg-white text-black w-20 md:w-28 pb-4 text-[14px] rounded-full mb-2 mr-2 mt-2 h-8 md:h-10 cursor-pointer hover:scale-110'>SQL</button>
            </div>
          </div>
        </div>
        </div>
        <div className='w-100 absolute  top-0 left-150 h-250  '>
          <svg width="500" height="600" className=' text-white  ' >
            <path  d="M 700 -1000 L 282 600" stroke="#0b132b" fill="transparent"   />
           </svg>
           <img className='mt-0 ml-0  ' src={hanging} alt="img" />
      </div>
      </div>
      
    </div>
  )
}

export default Skills
