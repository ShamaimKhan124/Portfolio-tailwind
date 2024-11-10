import Profile from '../../public/Profile.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
     <h2 className=' font-extrabold  text-4xl text-center mb-12'> About Me</h2></div>
        <div className='flex flex-col md:flex-row  items-center md:space-x-12'>
        <Image src={Profile} alt="sawera " className='w-72 h-80 animate-pulse ml-24 rounded object-cover mb-8  md:mb-0'/>
        <div className='flex-1'>
          <p className='text-lg mb-8'>
            I am a passionate web developer focused on creating engaging, user-friendly websites. With a strong background in
           HTML, CSS, and JavaScript Tailwind, I thrive on turning ideas into seamless digital experiences. I love staying up-to-date with
            the latest technologies and collaborating with clients to bring their visions to life. Let is work together to build
             something amazing!</p>
             <div className='space-y-4 m-24'> 
             <div className='flex items-center'>
              <label htmlFor='htmlandcss'  className='w-2/12'>
               HTML & CSS
              </label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
              <div className='bg-gradient-to-r  from-customPink to-customBlue h-2.5 rounded-full 
              transform transition-transform duration-300 hover:scale-105 w-10/12'>
 </div> </div> </div>
             <div className='flex items-center'>
              <label htmlFor='htmlandcss'  className='w-2/12'>
               React JS
              </label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
              <div className='bg-gradient-to-r  from-customPink to-customBlue h-2.5 rounded-full 
              transform transition-transform duration-300 hover:scale-105 w-9/12'>
              
               </div></div></div>
             <div className='flex items-center'>
              <label htmlFor='htmlandcss'  className='w-1/12'>
               Node JS
              </label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
              <div className='bg-gradient-to-r  from-customPink to-customBlue h-2.5 rounded-full 
              transform transition-transform duration-300 hover:scale-105 w-11/12'>

              </div>
             </div>
             </div>
             </div>
             
             <div className='mt-12 m-24 flex justify-between text-center'>
              <div>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-customPink to-customBlue'>1+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-customPink to-customBlue'>10+</h3>
                <p>Project Completed</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-customPink to-customBlue'>5+</h3>
                <p>Happy Clients</p>
              </div>
              </div>
              </div>
               </div>
       </div>
       
  )
}

export default About