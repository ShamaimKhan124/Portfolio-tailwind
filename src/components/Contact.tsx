import React from 'react'
import {FaEnvelope}from 'react-icons/fa'
import {FaPhone}from 'react-icons/fa'
import {FaMapMarkedAlt} from 'react-icons/fa'
const Contact= () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
     <h2 className=' font-extrabold  text-4xl text-center mb-12'> Contact Me</h2>

        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
    <div className='flex-1'>
        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
       from-customPink to-customBlue mb-4'>Let's Talk</h3>
    <p> I'm ready to discusing eweb development projects or partnership opportunities.</p>
    <div className='mb-4  '>
       <FaEnvelope className="inline-block text-customBlue mr-2"></FaEnvelope>
       <a href='mailto:sawerak894@gmail.com' className='hover:underline'> sawerak894@gmail.com
        </a>
        </div>
         <div className="mb-4 ">
        <FaPhone className="inline-block   text-customBlue mr-2"></FaPhone>
        
        <span>=923441423759</span> 
        </div>
        <div className="mb-4 ">
        <FaMapMarkedAlt className="inline-block  text-customBlue mr-2"></FaMapMarkedAlt>
        <span>street,city,province,country </span> 
        </div>
        </div>
    <div className='flex-1 w-full'>
      <form className='space-y-4'>
      <div><label htmlFor='name'  className='block mb-2'>Your Name</label>
      <input type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
      focus:border-customBlue' placeholder='Enter Your Name'/>

      </div>
      <div><label htmlFor='email' className='block mb-2'>Email</label>
      <input type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
      focus:border-customBlue' placeholder='Enter Your Name'/>
     </div>
      <div>
        <label htmlFor='message' className='block mb-2'>Message</label>
        <textarea 
        rows={5}
      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
      focus:border-customBlue' 
      
       placeholder='Enter Your Message'/>
</div>
<button className='bg-gradient-to-r  from-customPink to-customBlue text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
      </form>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Contact