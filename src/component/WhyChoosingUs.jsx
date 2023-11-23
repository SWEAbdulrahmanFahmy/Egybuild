import React from 'react'
import pic from "../assets/3797.jpg"
const WhyChoosingUs = () => {
  return (
    <div className='px-20 py-10 lg:flex lg:flex-row sm:flex-col gap-[20%]' id="whychooseus">
      <img src={pic} className='w-[500px] rounded-e-full shadow-lg'/>
      <div>
        <h1 className='text-xl font-bold sm:pt-5'>WHY YOU CHOOSE <span className='text-orange-500'>US</span></h1>
        <div className='pt-10'>
        <div>
        <h1 className='text-bold pb-2 text-orange-500 uppercase'>Reason 1.</h1>
         <p className='pb-2'>Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning</p>
        </div>

         <h1 className='text-bold pb-2 text-orange-500 uppercase'>Reason 2.</h1>
         <p>Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning</p>
              
         </div>
      </div>
    </div>
  )
}

export default WhyChoosingUs;
