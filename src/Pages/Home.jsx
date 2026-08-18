import React, { useRef } from 'react'
import Navbar from '../components/Home/Navbar'
import LeftContent from '../components/Home/LeftContent'
import RightContent from '../components/Home/RightContent'
import About from './About'
import Skills from './Skills'
import { useGSAP } from '@gsap/react';
import { gsap  } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Animation from '../components/Common/Animation'
import Projects from './Projects';
import Contact  from './Contact'
gsap.registerPlugin(ScrollTrigger);




function Home() {

  const stick = useRef(null);
  const containerref=useRef(null);
  

  useGSAP(function(){

    ScrollTrigger.create({
      trigger:stick.current,
      scroller:'body',
      start:'top 0%',
      end:'bottom 0%',
      pin:true,
      pinSpacing:false,
    })
  },[]);

  return (
    <div ref={containerref}>
       <div ref={stick}>
        <div>
          
        <div className='h-full w-full flex'>
            <LeftContent/>
            <RightContent/>
        </div>
         </div>
         </div>
        <About/>
        <Animation/>
        <Skills/>
        <Projects/>
        <Contact/>
        
    </div>
  )
}

export default Home
