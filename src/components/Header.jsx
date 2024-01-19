import React from 'react';
import{ FaMoon } from 'react-icons/fa6'
import { BsSun } from 'react-icons/bs'
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

const Header = () => {
  const {darkTheme, handleTheming } = useContext(AppContext);

  return (
    <div className='m-auto max-sm:mx-[5%] lg:mx-auto lg:w-[50%] md:w-[50%] sm:w-[90%]'>
        <div className="m-auto text-white flex items-center text-center justify-between pt-14 pb-6"> 
            <h1 className="font-Outfit flex items-center text-3xl font-semibold -tracking-tighter">TODO</h1>
            {darkTheme ? <BsSun onClick={handleTheming} className='moon text-2xl'/> : 
              <FaMoon onClick={handleTheming} className='text-2xl text-white'/>  }
               
                
        </div>
    </div>

  )
}

export default Header
