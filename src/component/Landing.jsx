import React from 'react'
import landing from "../assets/93683-removebg-preview.png"

const Landing = () => {
  return (
    <div className='bg-gradient-to-r from-orange-500 to-gray-900 rounded-b-lg '>
      <div className='lg:flex lg:flex-row lg:mx-20 lg:justify-between sm:hidden'>
        <nav className=' flex flex-row bg-[#FCFFFF] w-[91%] justify-between text-center p-4'>
            <a href="#"  className='hover:animate-pulse'>Home</a>
            <a href="#about" className='hover:animate-pulse'>About Us</a>
            <a href="#service"className='hover:animate-pulse'>Services</a>
            <a href="#project" className='hover:animate-pulse'>Projects</a>
            <a href='#whychooseus' className='hover:animate-pulse'>Why Choose Us</a>
            
        </nav> 
        <a href="#" className='bg-orange-500 text-white p-4 text-center text-sm'>Inquire Now</a>
      </div>
      <div className='flex flex-row  '>
        <div >
            <img src={landing} className=' w-auto h-auto'/>
        </div>
        <div className='pt-5 px-10'>
        <h1 className='font-bold text-5xl text-white uppercase'>We Build <span className='text-orange-500'>Great</span><br/> Projects</h1>
        <p className='text-white w-[600px]  text-sm opacity-60 pt-5'>Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications.</p>
        <div className='flex flex-row'>
           <a className='pl-[70%] text-white' href='#contact'>Contact Us </a>
        <span className='animate-bounce'>
            <svg width="80" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0 17.8376H29.4165L25.1693 29.4016L26.1236 32L32 16L26.1236 0L25.1693 2.59837L29.4165 14.1624H0V17.8376Z" fill="#FAFAFA"/>
            </svg>
            </span>
        </div>
     
        </div>
      </div>
      <div className=' bg-gray-900 text-center text-white'>
        EGYBUILD Company since 2000.
      </div>
    </div>
  )
}

export default Landing
