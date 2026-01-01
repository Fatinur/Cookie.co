import React from 'react'

import cookie from '/cookie.webp'
import { useState } from 'react'


const Navbar = () => {
    const [isOpen , setIsOpen] = useState (false)


  return (
      <nav className='flex items-center justify-between  w-[99vw] h-12 md:h-16 flex-row z-50 relative'>
        <div className='text-brand font-bold text-2xl'>
              Cookie.Co  
        </div>

        <div>
          <img src={cookie} alt="Cookie" className= ' h-16 md:hidden ' onClick={() => setIsOpen(!isOpen)} />
          <ul className={`md:flex items-center gap-8 
  ${isOpen ? "flex flex-col bg-amber-50 absolute top-16 left-0 md:w-full w-1/2 text-right" : "hidden"}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><button className="cta-btn">Shop</button></li>      
                
          
            </ul>
        </div>
      </nav>
  )
}

export default Navbar