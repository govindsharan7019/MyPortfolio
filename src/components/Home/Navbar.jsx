import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Menuicons from './Menuicons';

function Navbar() {
  const [menubar, setmenubar] = useState(false);
  const menuref = useRef(null);

  useEffect(function() {
    const handlemouseclickoutside = (event) => {
      if (
        menuref.current &&
        !menuref.current.contains(event.target)
      ) {
        setmenubar(false);
      }
    };

    document.addEventListener('mousedown', handlemouseclickoutside);
    return () => {
      document.removeEventListener('mousedown', handlemouseclickoutside);
    }
  }, []);

  const openmenu = (e) => {
    e.stopPropagation(); 
    setmenubar(!menubar);
  }

  return (
    <div>
        {/* RESPONSIVE FIXES: Changed 'flex-display' (invalid) to 'flex'. Added responsive horizontal padding (px-4 md:px-12) instead of fixed large margins so it never cuts off on phones. */}
        <div className='font-[text1] h-20 w-full flex justify-between fixed items-center px-4 md:px-12 bg-transparent z-50'>
          
          {/* batman icon on navbar */}
          {/* RESPONSIVE FIXES: Removed 'ml-30' which pushed the icon entirely off smaller mobile screens. Adjusted size slightly so it sits cleanly on mobile viewports. */}
          <div className='h-12 w-12 md:h-16 md:w-16 flex-shrink-0'>
            <Link to='/'>
              <img className='object-cover cursor-pointer rounded-full h-full w-full' src="https://img.freepik.com/premium-vector/batman-head-logo-icon-t-shirt-sticker-design-famous-cartoon-super-hero-vector-illustration_55610-8284.jpg?w=2000" alt="img" />
            </Link>
          </div>
          
          {/* div who handle get in touch button and menu icon */}
          {/* RESPONSIVE FIXES: Removed broken 'mr-50', fixed heights, and fixed widths ('w-50'). Kept elements as a clean, responsive layout flex group. */}
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2 md:gap-4'>
              
              {/* get in touch button */}
              {/* RESPONSIVE FIXES: Sized to look premium on both mobile screens and desktops without hardcoded limits. */}
              <div className='border-black flex justify-center border-2 hover:bg-black h-8 md:h-12 w-24 md:w-36 items-center overflow-hidden rounded-full transition-colors'>
                  <Link className='text-white text-xs md:text-sm cursor-pointer hover:bg-black flex justify-center bg-black items-center h-full w-full rounded-full' to="/Contact">Get in touch</Link>
              </div>
              
              {/* menu bar */}
              <div 
                ref={menuref} 
                onClick={openmenu} 
                className='w-10 h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-black cursor-pointer border-2 border-black rounded-full relative select-none bg-black md:bg-transparent'
              >
                  <Menu className='h-8 w-8 md:h-10 md:w-10 p-1.5 md:p-2 bg-black text-white rounded-full' />
                  
                  {menubar && (
                    /* RESPONSIVE FIXES: Forced your dropdown icons wrapper panel to stay right-aligned safely within mobile screen padding widths. */
                    <div onClick={(e) => e.stopPropagation()} className="absolute right-0 top-12 md:top-14 z-50">
                      <Menuicons />
                    </div>
                  )}
              </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Navbar;
