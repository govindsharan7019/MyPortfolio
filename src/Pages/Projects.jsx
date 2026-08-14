import React, { useRef } from 'react';
import project1 from '../Assets/pics/Screenshot 2026-05-17 130102.png';
import project2 from '../Assets/pics/Screenshot 2026-08-14 105312.png';
import project3 from '../Assets/pics/Screenshot 2026-08-14 105727.png';
import project4 from '../Assets/pics/Screenshot 2026-08-14 105947.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Point directly to core file module

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const container1 = useRef(null);
  const wordRef = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);

  // 📡 HOOK 1: Handle the breakable text assembly layout
  useGSAP(function() {
    const letters = wordRef.current.querySelectorAll('.letter');

    gsap.from(letters, {
      opacity: 0,
      x: (Index) => (Index % 2 === 0 ? -80 : 80),
      y: (Index) => (Index % 2 === 0 ? -40 : 40),
      // FIX 2: Fixed Math.random() execution bracket syntax error
      rotate: () => Math.floor(Math.random() * 90) - 45,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: container1.current,
        scroller: 'body',
        start: 'top 85%',
        once: true // Played only once per browser page reload cycle
      }
    });
  }, [], { scope: container1 });

  // 📡 HOOK 2: Smooth single slide-in from Left Column (No scrub interference)
  useGSAP(function() {
    gsap.from(image1.current, {
      x: -300,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: image1.current,
        scroller: 'body',
        start: 'top 80%', // Triggers on viewport entry checkpoint metrics
        once: true        // FIXED: Removed scrub to let once lock elements cleanly
      }
    });
  });

  // 📡 HOOK 3: Smooth single slide-in from Right Column (No scrub interference)
  useGSAP(function() {
    gsap.from(image2.current, {
      x: 300,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: image2.current,
        scroller: 'body',
        start: 'top 80%',
        once: true        // FIXED: Removed scrub to let once lock elements cleanly
      }
    });
  });

  return (
    /* RESPONSIVE FIX: Swapped hard heights to fluid min-h-screen to track infinite layout scrolling safely */
    <div className='w-full min-h-screen bg-[#0a0a0c] text-white font-mono overflow-x-hidden pb-20'>
      
      {/* Word header layout region */}
      <div ref={container1} className='w-full flex justify-center pt-16 pb-8 px-4'>
        {/* FIX 1: Linked ref parameter and fixed layout size scaling parameters for text rows */}
        <h1 ref={wordRef} className='text-4xl sm:text-6xl md:text-8xl flex justify-center uppercase tracking-tighter font-black text-white'>
          {['P', 'R', 'O', 'J', 'E', 'c', 't', 's'].map((char, Index) => {
            // FIXED: Added an explicit 'return' statement inside your mapping function block
            return (
              <span 
                key={Index} 
                className="letter inline-block min-w-[0.6em] text-center drop-shadow-[0_0_15px_rgba(91,195,247,0.4)]"
              >
                {char}
              </span>
            );
          })}
        </h1>
      </div>

      {/* Grid container section blocks housing showcase items */}
      <div className='w-full px-4 md:px-[8%] mt-8 relative'>
        {/* RESPONSIVE FIX: Replaced broken absolute static 'w-[1500px]' width layouts with a fluid grid wrapper display */}
        <div className='w-full flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-start bg-[#1c1c1c] shadow-2xl shadow-[#1c1c1c]/40 rounded-2xl p-4 md:p-12 min-h-fit'>
          
          {/* Left Project Grid Column Column Cell */}
          <div ref={image1} className="w-full md:w-1/2 flex flex-col gap-6">
            <img className='h-full sm:h-64 md:h-80 w-full object-cover rounded-2xl border border-zinc-800 shadow-lg' src={project1} alt="Project deployment slide module alpha frame" />
            <h1 className=' md:ml-48  md:text-xl cursor-pointer hover:text-black'>Sovella:The Ecommerce Webstie</h1>
            <img className='h-full sm:h-64 md:h-80 w-full object-cover rounded-2xl border border-zinc-800 shadow-lg' src={project3} alt="Project deployment slide module gamma frame" />
            <h1 className='md:ml-48 md:text-xl cursor-pointer hover:text-black'>Notes Making site using React</h1>
          </div>
          
          {/* Right Project Grid Column Column Cell */}
          <div ref={image2} className="w-full md:w-1/2 flex flex-col gap-6 mt-0 md:mt-0">
            <img className='h-full sm:h-64  md:h-80 w-full object-cover rounded-2xl border border-zinc-800 shadow-lg' src={project2} alt="Project deployment slide module beta frame" />
            <h1 className='md:ml-48 md:text-xl cursor-pointer hover:text-black'>UI Page of Banking using React</h1>
            <img className=' h-full sm:h-64 md:h-80 w-full object-cover rounded-2xl border border-zinc-800 shadow-lg' src={project4} alt="Project deployment slide module delta frame" />
            <h1 className='md:ml-48 md:text-xl cursor-pointer hover:text-black'>K72 - website Clone</h1>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Projects;
