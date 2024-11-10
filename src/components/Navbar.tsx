import React from 'react'
import Image from 'next/image'
import Logo  from '../../public/Logo.png'

const Navbar = () => {
  return (
  <nav className='bg-black text-white px-8 md:px-16 lg:px-24'> 
   <div className='container py-2 flex justify-center md:justify-between items-center'>
   <Image src={Logo} className='hidden md:inline' alt ="sold" width={100} height={100}></Image>
            <div className='space-x-6'>
            <a href="#home" className='hover:text-gray-400'> Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#services" className='hover:text-gray-400'> Services</a>
            <a href="#contact" className='hover:text-gray-400'> Contact Me</a>
             </div>
               <button className='bg-gradient-to-r from-customPink to-customBlue text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' > Connect Me</button>
               </div>
     </nav>
  )
}

export default Navbar