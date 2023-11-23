import React from 'react';
import pic1 from "../assets/2150863437.jpg";
import pic2 from "../assets/construction.jpg";
import pic4 from "../assets/wp1842342.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
const Gallory = () => {

  return (
    <div className='px-20 py-10' id="project">
    <h1 className='font-extrabold text-3xl'>OUR <span className='text-orange-500'>PROJECTS</span></h1>
    <p className='text-sm pt-5 pb-10'>Showcasing many features and websites that have been created.</p>
    <div className='pb-5 pl-[80%] flex flex-row text-orange-500'> 
      <div >Swipe Right To See More</div>
        <svg width="56" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 17.8376H29.4165L25.1693 29.4016L26.1236 32L32 16L26.1236 0L25.1693 2.59837L29.4165 14.1624H0V17.8376Z" fill="Black"/>
        </svg>
      </div>

    <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="swiper "
      >
        <SwiperSlide><img  src={pic1}/></SwiperSlide>
        <SwiperSlide><img  src={pic2}/></SwiperSlide>
        <SwiperSlide><img  src={pic4}/></SwiperSlide>  
      </Swiper>
    </div>
  )
}

export default Gallory;
