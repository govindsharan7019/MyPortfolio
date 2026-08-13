import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
/* ✅ The Corrected Path (Works locally AND on Vercel) */
import batmanIcon from "../../Assets/pics/batman-icon.svg";


function Cursor() {
    const bat = useRef(null);

    useEffect(function(){

        const handlemousemove=(event)=>{
            
            gsap.to(bat.current,{
                x:event.x,
                y:event.y,
                duration:1
            })
        }

        document.addEventListener('mousemove' , handlemousemove);

        return()=>{
            document.removeEventListener('mousemove' , handlemousemove);
        }

    }, []);


  return (
    <div className='relative z-11'>
        <div   ref={bat} className='fixed  w-18 rounded-full h-8 bg-transparent '>
            <img className='object-cover h-10 w-18' src={batpic} alt="img" />
        </div>
    </div>
  )
}

export default Cursor
