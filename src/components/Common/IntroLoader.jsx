import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function IntroLoader() {
  const [percentage, setPercentage] = useState(0);
  const [isDone, setIsDone] = useState(false); // Controls complete DOM removal
  const loaderRef = useRef(null);

  // 📡 COUNTER ENGINE: Simple digital progression loop
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setPercentage(count);

      if (count >= 100) {
        clearInterval(interval);
      }
    }, 20); // Smooth count-up running total duration (~2 seconds total)

    return () => clearInterval(interval);
  }, []);

  // 📡 GSAP FADE ENGINE: Dissolves the entire screen smoothly on completion
  useGSAP(() => {
    if (percentage < 100) return;

    // Smoothly fades out the entire mask loader overlay once it hits 100%
    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsDone(true); // Removes component completely from browser memory
      }
    });
  }, [percentage], { scope: loaderRef });

  if (isDone) return null;

  return (
    /* 📱 RESPONSIVE CONTAINER: Hard-locked to fit 350px phone viewports and large desktops */
    <div 
      ref={loaderRef} 
      className="fixed inset-0 w-full h-screen bg-[#0a0a0c] z-[9999] flex flex-col items-center justify-center select-none font-mono"
    >
      {/* 🌌 High-Tech Subtle Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1c1c1c_0%,_#000000_80%)] opacity-60 pointer-events-none" />

      {/* 🦇 THE CENTRAL CORE WRAPPER */}
      <div className="relative flex flex-col items-center gap-6 z-10 px-4 text-center">
        
        {/* Batman Vector Mask Image Logo */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-2xl shadow-black/80 border border-zinc-900 animate-pulse">
          <img 
            className="w-full h-full object-cover grayscale opacity-90" 
            src="https://i.pinimg.com/1200x/ae/f3/c0/aef3c028eeeeda9e10b7ff63439db572.jpg" 
            alt="Batman Mask Logo Icon" 
          />
        </div>

        {/* Loading Progress Information */}
        <div className="space-y-1">
          {/* Digital Percentage Number display */}
          <h2 className="text-3xl font-black text-white tracking-tighter">
            {percentage}<span className="text-[#fcd116] text-sm ml-1">%</span>
          </h2>
          
          {/* Subtext system indicator string */}
          <p className="text-[10px] tracking-[0.2em] font-bold text-zinc-500 uppercase">
            {percentage < 100 ? 'LOADING_SYSTEM_RESOURCES...' : 'AUTHENTICATION_SUCCESSFUL'}
          </p>
        </div>

        {/* Premium Minimal Progress Bar Rail */}
        <div className="w-48 border border-zinc-900 h-1.5 bg-zinc-950 rounded-full p-[1px] overflow-hidden mt-2">
          <div 
            className="h-full bg-gradient-to-r from-[#2c699a] to-[#5bc3f7] rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${percentage}%` }}
          />
        </div>

      </div>
    </div>
  );
}

export default IntroLoader;
