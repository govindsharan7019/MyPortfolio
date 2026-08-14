import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import batmanvideo1 from '../../Assets/video/SaveVid.Net_AQMU9807532nABzrg8Y9njt8NHf7PBHpjGhz6h-a23EAWyQQZZaGLm5BLOe4R9WQMLOgDH8y6vY-qhujULHd8s0N.mp4'
gsap.registerPlugin(ScrollTrigger);

function Animation() {

    const batmanvideo = useRef(null);
    const container=useRef(null);
    const bgImage=useRef(null);


     useGSAP(() => {
        // Create a master timeline locked directly to your scrollbar tracking
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                scroller: 'body',
                start: 'top top',
                end: '+=150%',        // Extends the scroll distance to make the zoom look cinematic
                scrub: 1,             // Adds a tiny bit of smooth catching-up delay (1 second) for realism
                pin: true,            // Locks the viewport layout completely static during transition
                                    
            }
        });

        // Execute both scaling properties simultaneously via the "<" timeline anchor flag
        tl.to(batmanvideo.current, {
            scale: 0.40,
            borderRadius: "24px",
            ease: "power1.inOut"     // Smooth acceleration and deceleration for a premium feel
        }, 0)
        .to(bgImage.current, {
            scale: 1.15,                // Zooms out to normal size as you scroll down
            ease: "power1.inOut"
        }, 0);                       // The "0" absolute position timestamp forces them to run together

    }, [], { scope: container });
    

  return (
    <div ref={container} >
        <div  className='relative h-screen w-full overflow-hidden '>
            <img ref={bgImage} className='object-cover h-full w-full ' src="https://noth-in.b-cdn.net/freepik__photography-frontal-shot-of-a-huge-large-169-white__495122.webp" alt="img" />
            <div className='absolute top-0 left-0 h-screen w-full'>
                <video ref={batmanvideo} className='object-cover border-8 border-black  h-full w-full' autoPlay loop muted src={batmanvideo1}></video>
            </div>
        </div>
    </div>
  )
}

export default Animation
