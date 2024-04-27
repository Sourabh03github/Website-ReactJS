import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black' >
        <h1 className='font["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight' > An animated website built using ReactJS integrates dynamic animations seamlessly with interactive web elements. Leveraging React's component-based architecture and libraries like React Spring or Framer Motion, it delivers engaging user experiences through fluid transitions, lively graphics, and intuitive interfaces, enhancing user engagement and visual appeal. </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#bfd674]'> 
        <div className='w-1/2'>
        <h1 className='text-7xl'>Our Approach: </h1>    
        <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full'> </div>
       
        </button>
         </div>
         <div className='w-1/2 h-[70vh] rounded-3xl bg-[#4b5623]'> </div>
        </div>

    </div>

  )
}

export default About