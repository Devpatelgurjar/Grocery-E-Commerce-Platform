import React from 'react'
import CartButton from '../Buttons/CartButton';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <header className="flex justify-center max-md:justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
    <Link to="/"><div className="self-center text-lg text-gray-800 font-medium"><img src='./assets/logo.png' loading='lazy' className='h-[50px]'/></div></Link>
    
    {/* <div className='flex gap-8 w-[20%] max-md:hidden'>
    <div className="w-[50%] h-8 bg-gray-300 rounded-full flex items-center justify-center">Home</div>
    <CartButton count={3} />
    </div> */}

    {/* <div className='md:hidden'>
      <Menu/>
    </div> */}
    
  </header>
    </div>
  )
}

export default Header
