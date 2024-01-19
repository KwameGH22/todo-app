import React from 'react';
import{ FaMoon } from 'react-icons/fa6'
import { BsSun } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='m-auto max-sm:mx-[5%] lg:mx-auto lg:w-[50%] md:w-[50%] sm:w-[90%]'>
        <div className="m-auto text-white flex items-center text-center justify-between pt-10 pb-6"> 
            <h1 className="font-Outfit flex items-center text-4xl font-semibold -tracking-tighter">TODO</h1>
            {darkTheme ? <BsSun onClick={handleTheming} className='moon text-2xl'/> : 
                <FaMoon onClick={handleTheming} className='text-2xl text-[#0e033d]'/>}
        </div>
    </div>

  )
}

export default Header
