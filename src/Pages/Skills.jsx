import React, { useRef } from 'react'
import hanging from '../../Assets/pics/download-removebg-preview.png'
import gotham from '../../Assets/video/6a0aae7ddc58c372acf98f47a73e4228_720w.mp4';
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
                markers:true          // Links the fade-out directly to the scrollbar movement
            }
        });
    }, [], { scope: container });



  return (
    <div ref={container} className='relative h-400 w-full  text-white font-[text1]   overflow-hidden bg-[radial-gradient(circle_at_center,_#2a2b2d_50%,_#000000_80%)]'>
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
      <div className='relative h-200 md:h-300 w-1/2 md:w-full  flex flex-col gap-10  '>
        {/* left container */}
        <div className='flex  gap-56 justify-between'>
             <div className= 'relative   bg-red-500 w-1/2 h-full'>
          <div className='absolute  leading-10 top-0 md:top-15 left-0 md:left-95 p-5 w-100 md:w-125   '>
            <h1 className='uppercase'>Primary stack</h1>
            <div className='flex justify-between'>
              <h1>React.js</h1>
              <h1>90%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-4 w-115 rounded-2xl'>
              <div className='h-3 rounded-2xl w-103 bg-[#7d7d7d]'></div>
            </div>
            <div className='flex justify-between'>
              <h1>Javascript</h1>
              <h1>86%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-4 w-115 rounded-2xl'>
              <div className='h-3 rounded-2xl w-98 bg-[#7d7d7d]'></div>
            </div>
            <div className='flex justify-between'>
              <h1>Tailwind</h1>
              <h1>80%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-4 w-115 rounded-2xl'>
              <div className='h-3 rounded-2xl w-92 bg-[#7d7d7d]'></div>
            </div>
            <div className='flex justify-between'>
              <h1>GSAP</h1>
              <h1>70%</h1>
            </div>
            <div className='bg-transparent-400 border-2 h-4 w-115 rounded-2xl'>
              <div className='h-3 rounded-2xl w-82 bg-[#7d7d7d]'></div>
            </div>
          </div>

        </div>
        {/* right container */}
        <div className='relative  h-full w-1/2 '>
          <div className='absolute  leading-10 top-15 left-10 p-5  w-125   '>
            <div>
              <h1 className='uppercase font-bold p-1'>Also work with</h1>
            </div>
            <div className='' >
              <button className='bg-white text-black w-28 pb-4 rounded-full mb-2 mr-2 mt-2 h-10 cursor-pointer hover:scale-110'>Node.js</button>
              <button className='bg-white text-black w-28 pb-4 rounded-full mb-2 mr-2 mt-2 h-10 cursor-pointer hover:scale-110 ml-2'>Express</button>
              <button className='bg-white text-black w-28 pb-4 rounded-full mb-2 mr-2 mt-2 h-10 cursor-pointer hover:scale-110 ml-2'>MongoDB</button>
              <button className='bg-white text-black w-28 pb-4 rounded-full mb-2 mr-2 mt-2 h-10 cursor-pointer hover:scale-110'>Java</button>
              <button className='bg-white text-black w-28 pb-4 rounded-full mb-2 mr-2 mt-2 h-10 cursor-pointer hover:scale-110 ml-2'>HTML&CSS</button>
              <button className='bg-white text-black w-28 pb-4 rounded-full mb-2 mr-2 mt-2 h-10 cursor-pointer hover:scale-110 ml-2'>Typescript</button>
              <button className='bg-white text-black w-28 pb-4 rounded-full mb-2 mr-2 mt-2 h-10 cursor-pointer hover:scale-110'>SQL</button>
            </div>
          </div>
        </div>
        </div>
        <div className='w-100 absolute top-0 left-150  h-250  '>
          <svg width="500" height="600" className=' text-white ' >
            <path d="M 700 -1000 L 282 600" stroke="#0b132b" fill="transparent"   />
           </svg>
           <img className='mt-0 ml-0  ' src={hanging} alt="img" />
      </div>
      </div>
      
    </div>
  )
}

export default Skills
