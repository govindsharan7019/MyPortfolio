import { useGSAP } from '@gsap/react';
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/gsap-core';

function Menuicons() {

  const line= useRef([]);

  const {contextSafe}=useGSAP();

  const handleMouseEnter=contextSafe((index)=>{

    const t1=gsap.timeline();

      t1.from(line.current[index] ,{
      width:'100%',
      duration:0.5
    })
  });

  const handleMouseLeave=contextSafe((index)=>{

    const t1=gsap.timeline();

      t1.to(line.current[index] ,{
      width:0,
      duration:0.5
    })
  })

  const menuicons=[
    {name:'Home', path:'/'},
    {name:'About', path:'/About'},
    {name:'Skills', path:'/Skills'},
    {name:'Projects', path:'/Projects'},
    {name:'Contact', path:'/Contact'}

  ]



  return (
    <div className='fixed top-18 p-0.5 md:p-2 left-40  md:left-360 h-[28%] md:h-91 rounded-2xl w-[45%] md:w-70 overflow-hidden bg-white border-black border-2  text-white'>
      <div className='m-[4%] md:m-1 bg-black flex flex-col gap-2 flex-wrap h-full md:h-84  rounded-2xl'>

        {menuicons.map((item, index)=>{
          return (
          <div className=' pl-4 pt-[6%] md:p-4 cursor-pointer leading-0 md:leading-0 mt-1 md:mt-2 font-[text1] text-[12px] md:text-2xl' key={ item.name} onMouseLeave={()=>{handleMouseLeave(index)}} onMouseEnter={()=>{ handleMouseEnter(index)}} >
            {/* list of content which show on menu */}
        <ul>
            <li>
            <Link  to={item.path}>{item.name}</Link>
            </li>
            <hr className='w-0 mt-2' ref={(el)=>{
              line.current[index] =el
            }} />
        </ul>
      </div>
          )
        })}
        
      {/* image of batman after menu icons  */}
      <div className='h-1 md:h-10 w-[90%] md:w-full '>
        <img className='object-cover pl-2 md:pl-0 h-10 md:h-20 w-30 md:w-65' src="https://wallpaperaccess.com/full/1662418.jpg" alt="img" />
      </div>
      </div>
    </div>
  )
}

export default Menuicons;
