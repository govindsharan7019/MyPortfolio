import React from 'react'

function Form() {
  return (
    <div className='w-full h-full '>
      <div className='h-[40vh] w-[58vw] md:w-[18vw] mt-0 md:mt-[6vw] ml-0 md:ml-[3vw] rounded-2xl'>
        <form action="">
          <div>
            <input type="text" placeholder='Name'  className="
          w-full 
          mt-8
          px-4 
          py-3 
          text-sm 
          md:text-lg
          text-[#213c49] 
          bg-zinc-950 
          border 
          border-zinc-900 
          rounded-xl 
          outline-none 
          transition-all 
          duration-300
          
          /* 🎛️ THE HOLLOW PIT DEEP SHADOW EFFECT */
          shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
          
          /* ⚡ ACTIVE GLOW FOCUS INTERACTION */
          focus:border-[#5bc3f7]/50 
          focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
        " />
            <input type="gmail" placeholder='Gmail' className="
          w-full 
          mt-5
          px-4 
          py-3 
          text-sm 
          md:text-lg
          text-[#213c49] 
          bg-zinc-950 
          border 
          border-zinc-900 
          rounded-xl 
          outline-none 
          transition-all 
          duration-300
          
          /* 🎛️ THE HOLLOW PIT DEEP SHADOW EFFECT */
          shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
          
          /* ⚡ ACTIVE GLOW FOCUS INTERACTION */
          focus:border-[#5bc3f7]/50 
          focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
        " />
            <textarea name="your message here" placeholder='your message' className="
          w-full 
          mt-5
          px-4 
          py-3 
          text-sm 
          md:text-lg
          text-[#213c49]
          bg-zinc-950 
          border 
          border-zinc-900 
          rounded-xl 
          outline-none 
          transition-all 
          duration-300
          
          /* 🎛️ THE HOLLOW PIT DEEP SHADOW EFFECT */
          shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
          
          /* ⚡ ACTIVE GLOW FOCUS INTERACTION */
          focus:border-[#5bc3f7]/50 
          focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
        " ></textarea>

             <button className=' w-full mt-5  bg-zinc-950 border border-zinc-950
             shadow-[inset_0px_4px_8px_rgba(0,0,0,0.9),_inset_0px_-2px_4px_rgba(255,255,255,0.02)]
               focus:shadow-[inset_0px_4px_8px_rgba(0,0,0,0.95),_0px_0px_15px_rgba(91,195,247,0.1)]
             text-[#213c49]  font-medium outline-none rounded-2xl px-5 py-2   active:scale-95 cursor-pointer text-xl'>Send message</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Form
