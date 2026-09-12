import React, { useState } from 'react'
import CareerBot from './CareerBot';

function Bot() {

    const [openbot, setopenbot] = useState(false);

    const openbotstate=(e)=>{
        e.stopPropagation(); 
        setopenbot(!openbot);
    }

  return (
    <div>
      <div className='flex justify-between gap-2 cursor-pointer items-center font-[text1]'>
        <div>
            <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        </div>
        <div
        onClick={openbotstate}
        >
            <button className=' px-3 
              py-1.5 
              bg-black
              text-white
              text-[10px] 
              md:px-4 
              md:py-2 
              md:text-xs 
              md:w-auto 
              
              font-bold 
              uppercase 
              tracking-wider 
              rounded-full 
              border 
              transition-all 
              cursor-pointer 
              active:scale-95' >AI Assistant</button>
            {
                openbot && 
                <div onClick={(e) => e.stopPropagation()} className="absolute right-0 top-12 md:top-14 z-50">
                      <CareerBot/>
                    </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Bot
