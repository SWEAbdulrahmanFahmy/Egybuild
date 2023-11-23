import React from 'react'
import pic1 from"../assets/pic1.jpg"
import pic2 from"../assets/pic2.jpg"
const Services = () => {
  return (
    <div className='px-20 py-10' id="service">
      <h1 className='font-extrabold text-3xl'>OUR <span className='text-orange-500'>SERVICES</span></h1>
      <p className='text-sm pt-5 pb-10'>Enjoy our unparalleled service with the latest designs.</p>
      <div className='flex flex-row gap-[10%]'>
      <div className='basis-1/2 text-center bg-cover h-full rounded-lg shadow-lg' style={{backgroundImage:`url(${pic1})`}}>
        <h1 className='font-bold mb-[50%] py-4 bg-white opacity-50 text-black '>Residential <span className='text-orange-500'>Construction</span></h1>
        <p className='text-white pb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div className='basis-1/2 text-center bg-cover h-full rounded-lg shadow-lg ' style={{backgroundImage:`url(${pic2})`}}>
      <h1 className='font-bold mb-[50%] py-4 bg-white opacity-50 text-black'>Commercial <span className='text-orange-500'>Construction</span></h1>
      <p className='text-white pb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>
      </div>
    </div>
  )
}

export default Services;
