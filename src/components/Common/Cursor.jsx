import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import batpic from '../../Assets/pics/download (1).png'

function Cursor() {
    const bat = useRef(null);

    useEffect(function(){
        // 🔒 MOBILE CHECK: If the screen size width is less than 768px (a standard mobile viewport limit),
        // completely halt this script right here and do not add the tracking listeners!
        if (window.innerWidth < 768) {
            return; 
        }

        const handlemousemove = (event) => {
            gsap.to(bat.current, {
                x: event.clientX - 200, // Center the bat directly underneath the mouse tip pointer coordinates
                y: event.clientY - 200, 
                duration: 1,
                ease: "back.out(1.7)"
            })
        }

        // Only attaches mouse telemetry captures on laptop views
        document.addEventListener('mousemove', handlemousemove);

        return () => {
            document.removeEventListener('mousemove', handlemousemove);
        }

    }, []);

  return (
    /* 📱 RESPONSIVE VISIBILITY: 'hidden md:block' guarantees the HTML element node is completely destroyed 
       and unrendered on mobile screen widths, while compiling cleanly for desktop systems. */
    <div className='relative z-50 hidden md:block'>
        <div ref={bat} className='fixed w-18 h-20 bg-transparent pointer-events-none'>
            <img className='h-20 w-18 object-contain' src={batpic} alt="img" />
        </div>
    </div>
  )
}

export default Cursor;
