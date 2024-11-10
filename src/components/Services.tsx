import React from 'react'
 const Services=[{
    id: 1,
    title:"Web Design",
    description:"Creating visually impressive and user-friendly web design.",},
    { id: 2,
        title:"Frontend Development",
        description:" Building responsive and interactive interfaces.",},
        { id: 3,
            title:"Backend Development",
            description:" Developing server-side logic and databases.",},
            { id: 4,
                title:"Full-stack Development",
                description:" Combining both frontend and backend development skills.",},
                { id: 5,
                    title:"Content Writing",
                    description:" Writing content for your business and companies.",},
                    { id: 6,
                        title:"Digital marketing",
                        description:"Promote your business with our digital marketing teams.",
                    },];
const Service = () => {
  return (
    <div className='bg-black text-white py-20' id='services'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
     <h2 className=' font-extrabold  text-4xl text-center mb-12'> My Services</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
     {Services.map(Services =>(
        <div 
        key={Services.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
        transiton-transform duration-300 hover:scale-105'
        >
        <div className='text-right text-2xl font-bold text-transparent bg-clip-text
        bg-gradient-to-r  from-customPink to-customBlue'
        >
            {Services.id}
         </div>
         <h3 className=' mt-2 text-2xl font-bold text-transparent bg-clip-text
        bg-gradient-to-r  from-customPink to-customBlue '>
            {Services.title}
         </h3>
         <p className='mt-2 text-gray-300'>{Services.description}</p>
         <a href="#" className='mt-4 inline-block  from-customPink to-customBlue'> Read More</a>

         </div>
     ))}

     </div>
      </div>
     </div>
    
  )
}

export default Service