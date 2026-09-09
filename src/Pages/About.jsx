import React, { useRef } from 'react'
import Projects from './Projects'
import { Link } from 'react-router-dom';
import Animation from '../components/Common/Animation';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


function About() {



  const imageDevRef = useRef(null);
  const imageRef = useRef(null);
  const engg = useRef(null);
  const engineeringcontent = useRef(null);
  const about = useRef(null);
  const whoiam = useRef(null);

  useGSAP(() => {
    gsap.from(engg.current, {
      opacity: 0,
      x: 200,
      duration: 2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: engg.current,
        scroller: 'body',
        start: 'top 85%',
        once: true
      }
    })
  })

  useGSAP(() => {
    gsap.from(engineeringcontent.current, {
      opacity: 0,
      y: 200,
      duration: 3,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: engineeringcontent.current,
        scroller: 'body',
        start: 'top 205%',
        once: true
      }
    })
  })

  useGSAP(() => {
    gsap.from(about.current, {
      opacity: 0,
      x: 200,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: about.current,
        scroller: 'body',
        start: 'top 90%',
        once: true
      }
    })
  })

  useGSAP(() => {
    gsap.from(whoiam.current, {
      opacity: 0,
      x: -200,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: whoiam.current,
        scroller: 'body',
        start: 'top 90%',
        once: true
      }
    })
  })

  const imageArray = [
    'https://i.pinimg.com/1200x/0c/2b/d0/0c2bd040fb0721ddc78612ad21749eec.jpg',
    'https://i.pinimg.com/736x/8a/69/f7/8a69f7eed11037c0d4ddf3294547254f.jpg',
    'https://i.pinimg.com/1200x/ec/45/06/ec4506e6fc5a8f0d7dd06f28f8f1d86e.jpg',
    'https://i.pinimg.com/736x/91/85/15/918515b03483068e1ea8a28a8dad478c.jpg',
    'https://i.pinimg.com/736x/12/e8/79/12e87932ca7cc67ff505486f9a20a056.jpg',
    'https://i.pinimg.com/736x/76/2c/0e/762c0e5b1ec87d3db5ade1dc995a1003.jpg',
    'https://i.pinimg.com/736x/76/2c/0e/762c0e5b1ec87d3db5ade1dc995a1003.jpg',
    'https://i.pinimg.com/736x/5b/11/95/5b1195056941907630dd5fc221bc5d7e.jpg',
    'https://i.pinimg.com/736x/41/d3/5d/41d35df66fd78a0a05c94e15da6a7a46.jpg'
  ]

  useGSAP(() => {
    gsap.to(imageDevRef.current, {
      scrollTrigger: {
        trigger: imageDevRef.current,
        scroller: 'body',
        start: 'top 32%',
        end: 'top -70%',
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }
          else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })



  return (
    <div className='relative z-10 h-450 md:h-600 w-full md:w-full bg-black overflow-hidden'>
      <div className='bg-[#1c1c1c] w-full h-2 '></div>
      <div className='bg-white w-full h-2 '></div>
      <div className='bg-[#1c1c1c] w-full h-2 '></div>
      <div className='bg-white w-full h-2 '></div>
      <div className='bg-[#1c1c1c] w-full h-2 '></div>
      <div className='bg-white h-2 w-full'></div>

      <div className='relative h-fit flex flex-col font-[text1] w-full text-black bg-[#000000]'>
        {/* header of about page */}
        <div className='absolute top-0 left-0 items-center  flex flex-col justify-center   leading-4 md:leading-12 ml-0 p-4 w-full'>
          <p ref={about} className='text-[14px] md:text-[2vw] text-[#7d7d7d]'>About</p>
          <h1 ref={whoiam} className='text-xl md:text-[3vw] text-white'>Who I am</h1>
        </div>
        {/* left side main image div */}
        <div className='w-full md:w-full h-200  md:h-230 flex flex-col '>
          <div className=' w-70   md:w-[33.5vw] h-130  md:h-230 items-center '>
            {/* left contaner main who holdes all text */}
            <div className='relative      rounded-2xl  mt-20 md:mt-35 ml-0 md:ml-20 w-full md:w-full h-110 md:h-full shrink-0 '>
              <div>
                <img className='object-cover  rounded-2xl h-full  w-full ' src="https://i.pinimg.com/1200x/23/57/fb/2357fba426afe7cebafc80b3eb9764e3.jpg" alt="img" />
              </div>
              {/* large text */}
              <div className='absolute top-55 md:top-[25vw] left-10 md:left-[6vw] z-10 w-full md:w-full text-white '>
                <div className='text-[1.5rem] md:text-[3vw] leading-6 md:leading-[2.8vw] font[text1] w-20 md:w-80 '>
                  <h1 className='text-white'>Hi, I'm <div className='text-[#7d7d7d]'>Govind</div> </h1>
                </div>
                {/* paragraph */}
                <div className='mt-2 md:mt-4 '>
                  <p className='leading-3.5  font-[text2] text-[12px] md:text-[1.2vw] w-25 bg-amber-600 md:w-[15vw] '>A Computer Science Engineer and web developer passionate about building modern and interactive digital experiences.</p>
                </div>
                {/* button to see my work */}
                <div className='mt-1 md:mt-4 w-32 md:w-45 h-9 md:h-12 rounded-full flex justify-center items-center bg-white '>
                  <div className='border-2 border-black rounded-full flex items-center w-30 md:w-43 h-8 md:h-10'>
                    <Link to='/Projects'>
                      <button className='bg-black text-white w-28 md:w-41 cursor-pointer ml-0.5 hover:scale-95 h-6 md:h-8 rounded-full  ' >View My Work</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div ref={imageDevRef} className='absolute h-40 md:h-[20vw] w-30 md:w-[15vw] rounded-3xl overflow-hidden top-160 md:top-150 left-[60%] md:left-[70vw]'>
            <img ref={imageRef} className='h-42 md:h-full w-30 md:w-full object-cover' src="https://i.pinimg.com/1200x/0c/2b/d0/0c2bd040fb0721ddc78612ad21749eec.jpg" alt="img" />
          </div>
        </div>
        <div className=' z-10 w-full text-white font-[text1]  h-200 md:h-270  '>
          <div className='text-[12vw]  md:text-[13vw] mt-20 md:mt-50 leading-[10vw] md:leading-[10vw]'>
            <h1 ref={engg} >ENGINEERING
              <br /> METHODOLOGY</h1>
          </div>
          <div className='  w-full h-100 flex justify-end'>
            <div ref={engineeringcontent} className=' w-70 md:w-[48vw]   mr-[8vw] h-50 md:h-150 pt-4 text-wrap leading-6 md:leading-12 text-[16px] md:text-[2vw] '>
              <p className=' text-[14px] md:text-[1.68vw] font-bold '> &nbsp; &nbsp;&nbsp;&nbsp;A Computer Science engineering Graduate (2022-2026)</p>
              <p >with  a passion for trasforming complex code into sleek, immersive  digital realities. </p>
              <p >I specialize in crafting high performance user experiences using </p>
              <p className='font-bold'>React, Tailwind, and fluid motion design.</p>
              <br />
              <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I treat every  project as a mission-focusing on clean code structures, responsive layouts, and performance optimization.</p>                      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
