import React from 'react'
import {  MailMinus } from 'lucide-react'
import Form from '../components/Contact/Form'
import { ExternalLink } from 'lucide-react'

function Contact() {
  return (
    <div className='bg-black relative w-full h-200 md:h-300 flex justify-center  flex-col'>
      {/* div1 */}
      <div className='absolute top-2  w-full h-10 '>
        <h1 className='text-4xl   h-fit w-fit md:text-6xl text-white font-[text1] mt-12 font-bold ml-[30%] md:ml-[42%]  '>Here i am</h1>
      </div>
      {/* main div*/}
      <div className='relative h-[78%]  md:w-[54%] rounded-full mt-20 md:mt-[3%] bg-zinc-950 border md:ml-[22%] border-[#5bc3f7]/30 shadow-[0px_0px_25px_2px_rgba(91,195,247,0.35)]'>
         {/* contact name div */}
         <div className=' flex justify-center mt-[2vw] '>
          <h1 className='uppercase text-[#213c49] text-xl md:text-2xl font-[text1] mr-2'>Contact</h1>
         </div>
         
         {/* heading line div */}
         <div className=' flex justify-center text-center  font-[text2] text-[14px] md:text-xl w-[55%] md:w-[30vw] ml-20 md:ml-[11vw] mt-[2vw] text-white'>
          <p>Got a project, job opportunity, or just want to say hi? I reply to everything.</p>
         </div>
         {/* main container div who hold left side two buttons and right side form */}
         <div className='  text-white flex justify-between h-[70vh] w-[40vw] ml-[7vw]'>
          <div className=' h-full w-1/2 pt-[8vw] '>
               <div className='w-60 md:w-75  h-10 md:h-15 rounded-2xl ml-[50%] md:ml-[5%] bg-[#213c49] shadow-[0px_0px_5px_5px_rgba(91,195,247,0.35)] flex justify-between cursor-pointer'>
              <MailMinus className='ml-2 md:ml-4 mt-3 md:mt-4 bg-zinc-950 p-1 h-6 md:h-8 w-10 md:w-8 rounded-xl'/>
              <div className='mt-2 mr-4 md:mr-10 leading-3 md:leading-0'>
                <button className='font-[text2] text-[14px] md:text-xl font-extralight text-zinc-950'> Email</button>
                <p className='text-[12px] md:text-sm'>govindsharan9370@gmail.com</p>
              </div>
            </div>
            <div className='w-60 md:w-75 mt-[30%] md:mt-[10%]  h-10 md:h-15 rounded-2xl ml-[50%] md:ml-[5%] bg-[#213c49] shadow-[0px_0px_5px_5px_rgba(91,195,247,0.35)] flex justify-between cursor-pointer'>
              <ExternalLink className='ml-2 md:ml-4 mt-3 md:mt-4 bg-zinc-950 p-1 h-6 md:h-8 w-10 md:w-8 rounded-xl'/>
              <div  className='mt-2 mr-4 md:mr-10 leading-3 md:leading-0'>
                <button  className='font-[text2] text-[14px] md:text-xl font-extralight text-zinc-950'> Linkdin</button>
                 <p className='text-[12px] md:text-sm'>govindsharan9370@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='absolute top-[40%] md:top-[17%] left-[20%] md:left-[50%] h-fit w-fit md:w-1/2  '>
             <Form/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
