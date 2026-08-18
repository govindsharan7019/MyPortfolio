import React from 'react'
import {  MailMinus } from 'lucide-react'
import Form from '../components/Contact/Form'
import { ExternalLink } from 'lucide-react'

function Contact() {
  return (
    <div className='bg-black w-full h-300 flex justify-center  flex-col'>
      <div >
        <h1 className='text-6xl text-white font-[text1] font-bold ml-[42%]  '>Here i am</h1>
      </div>
      {/* main div*/}
      <div className='relative h-[78%] w-[54%] rounded-full mt-[3%] bg-zinc-950 border ml-[22%] border-[#5bc3f7]/30 shadow-[0px_0px_25px_2px_rgba(91,195,247,0.35)]'>
         {/* contact name div */}
         <div className=''> 
            <svg width="200" height="100" viewBox="0 0 200 200" className="w-full h-full text-[#5bc3f7] overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <path id="my_path"  d="M 22,97 A 72,72 0 ,1,1 ,175,105" fill="none" />
              <text fill="currentColor" className="font-mono text-sm sm:text-base font-black uppercase tracking-[0.2em]">
                <textPath href="#my_path"  startOffset="50%" textAnchor="middle">Contact</textPath>
              </text>
              </svg>
         </div>
         {/* heading line div */}
         <div className='absolute top-30 left-75 text-center font-[text2] text-2xl w-97 text-white'>
          <p>Got a project, job opportunity, or just want to say hi? I reply to everything.</p>
         </div>
         {/* main container div who hold left side two buttons and right side form */}
         <div className=' relative flex justify-between bg-blue-600 h-full w-full'>
          {/* left container */}
          <div className=' absolute top-0 left-0 bg-red-600 text-white flex flex-col ' >
            <div className='w-75  h-15 rounded-2xl bg-[#213c49] flex justify-between cursor-pointer'>
              <MailMinus className='ml-4 mt-4 bg-zinc-950 p-1 h-8 w-8 rounded-xl'/>
              <div className='mt-2 mr-4 leading-0'>
                <button className='font-[text2] text-xl font-extralight text-zinc-950'> Email</button>
                <p>govindsharan9370@gmail.com</p>
              </div>
            </div>
            <div className='w-75  h-15 rounded-2xl bg-[#213c49] flex justify-between mt-4 cursor-pointer '>
              <ExternalLink className='ml-4 mt-4 bg-zinc-950 p-1 h-8 w-8 rounded-xl'/>
              <div className='mt-2 mr-4 leading-0'>
                <button  className='font-[text2] text-xl font-extralight text-zinc-950'> Linkdin</button>
                 <p>govindsharan9370@gmail.com</p>
              </div>
            </div>
          </div>
          {/* right container */}
          <div className='absolute top-0 left-0'>
            <Form/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
