import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import batmanvideo1 from '../../Assets/video/SaveVid.Net_AQMU9807532nABzrg8Y9njt8NHf7PBHpjGhz6h-a23EAWyQQZZaGLm5BLOe4R9WQMLOgDH8y6vY-qhujULHd8s0N.mp4'

gsap.registerPlugin(ScrollTrigger);

function Animation() {
    const batmanvideo = useRef(null);
    const container = useRef(null);
    const bgImage = useRef(null);

    // 🔊 Audio Mute Tracker State
    const [isMuted, setIsMuted] = useState(true);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        // 💻 DESKTOP SCALING ENGINE
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    scroller: 'body',
                    start: 'top top',
                    end: '+=150%',        
                    scrub: 1,             
                    pin: true,            
                }
            });

            tl.to(batmanvideo.current, {
                scale: 0.40,
                borderRadius: "24px",
                ease: "power1.inOut"     
            }, 0)
            .to(bgImage.current, {
                scale: 1.15,                
                ease: "power1.inOut"
            }, 0);
        });

        // 📱 MOBILE FALLBACK
        mm.add("(max-width: 767px)", () => {
            gsap.set(batmanvideo.current, { scale: 1, borderRadius: "0px" });
            gsap.set(bgImage.current, { scale: 1 });
        });

        return () => mm.revert();

    }, [], { scope: container });

    // 🔊 Audio Hardware Toggle Action
    const toggleSound = () => {
        if (batmanvideo.current) {
            const currentMuteState = batmanvideo.current.muted;
            batmanvideo.current.muted = !currentMuteState;
            setIsMuted(!currentMuteState);
        }
    };

  return (
    <div ref={container} className="w-full md:min-h-screen bg-black relative">
        
        {/* 🎛️ TOP-CENTER SOUND CONTROL CAPSULE (Perfectly centered, text + switch toggle combo) */}
        <div className="absolute top-1 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-4 bg-black/60 border border-zinc-800/80 px-3 md:px-5 py-1 md:py-2.5 rounded-full select-none backdrop-blur-md shadow-2xl shadow-black">
          
          {/* Text Identifier Node */}
          <span className="font-mono text-[10px] md:text-xs font-black tracking-[0.2em] text-zinc-400 uppercase">
            Sound
          </span>

          {/* Interactive Sliding Toggle Switch Track */}
          <div 
            onClick={toggleSound}
            className={ `w-5 md:w-11 h-2 md:h-6 flex items-center rounded-full md:p-0.5 cursor-pointer transition-colors duration-300 ${
              isMuted ? 'bg-zinc-800' : 'bg-[#2c699a]'
            }`}
          >
            {/* Sliding Switch Inner Knob Button */}
            <div 
              className={`w-3 md:w-5 h-4 md:h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-out flex items-center justify-center ${
                isMuted ? 'translate-x-0' : 'translate-x-5 !bg-[#5bc3f7] shadow-[0_0_8px_#5bc3f7]'
              }`}
            >
              {/* Optional tiny inner dot matrix detail for tactical dashboard look */}
              <div className={`w-1.5 h-1.5 rounded-full ${isMuted ? 'bg-zinc-400' : 'bg-white'}`} />
            </div>
          </div>

        </div>

        <div className='relative h-60 md:h-screen w-full overflow-hidden bg-black flex items-center justify-center'>
            
            {/* Background Image Layer */}
            <img 
              ref={bgImage} 
              className='object-cover h-60 md:h-full w-120 md:w-full z-0 opacity-40 md:opacity-100' 
              src="https://noth-in.b-cdn.net/freepik__photography-frontal-shot-of-a-huge-large-169-white__495122.webp" 
              alt="img" 
            />
            
            {/* Foreground Video Absolute Container Layer */}
            <div className='absolute md:top-0 md:left-0 h-22 md:h-screen z-1 w-42 md:w-full flex items-center justify-center bg-black/50'>
                <video 
                  ref={batmanvideo} 
                  className='object-cover h-full md:h-full w-full md:w-full border-0 md:border-8 border-black' 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src={batmanvideo1}
                />
            </div>

        </div>
    </div>
  )
}

export default Animation;
