import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 lg:flex lg:flex-row py-10 px-20 lg:justify-between '>
        <div>
            <div className='flex flex-row gap-2'>
                <div className="bg-[#E77839] w-14 h-14 p-2 rounded-md"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47.273"><g fill="white"><path d="M31.742 25.788H45.56v3.636H31.742zM31.742 20.696H45.56v3.637H31.742zM31.742 30.878H45.56v3.637H31.742z"/></g><path d="M38.941 10.947 13.866.061a.73.73 0 0 0-.761.112L.257 11.082 1.2 12.19 13.7 1.575l24.223 10.516v22.424h1.455v-22.9a.725.725 0 0 0-.437-.668z" fill="white"/><g fill="white"><path d="M11.03 10.183h5.091a.728.728 0 0 0 .7-.932L14.274.523a.727.727 0 0 0-1.4 0l-2.541 8.728a.729.729 0 0 0 .7.932zm2.546-6.858 1.576 5.4H12zM47.789 15.489l-4.334-4.364a.724.724 0 0 0-.516-.215h-8.482a.657.657 0 0 0-.234 0H.727a.727.727 0 0 0-.356 1.36l7.758 4.364a.715.715 0 0 0 .356.094H10.3v28.727a.729.729 0 0 0 .727.728h5.091a.727.727 0 0 0 .727-.728V16.728h30.427a.728.728 0 0 0 .517-1.239zm-19.545-.216h-5.217l2.609-2.607zm-.853-2.909h5.171l-2.586 2.586zm6.95.278 2.631 2.631H31.71zm1.778-.278h5.064L38.651 14.9zM8.676 15.273 3.5 12.364h7.53a.727.727 0 0 0-.727.728v2.182H8.676zm6.718 0h-3.637v-1.454h3.637zm0 17.454h-3.637v-3.636h3.637zm-3.636 1.455H15.4v3.637h-3.642zm3.636-6.546h-3.637V24h3.637zm0 17.091h-3.637v-5.454h3.637zm0-22.181h-3.637v-5.818h3.637zm.727-10.182h7.759l-2.91 2.909h-4.122v-2.182a.726.726 0 0 0-.727-.727zm24.21 2.909 2.606-2.605 2.588 2.605z"/></g><path d="M14.3 8h-3.633a2.182 2.182 0 0 0-2.182 2.183v7.271a.728.728 0 0 0 .728.728h8.727a.727.727 0 0 0 .728-.728v-5.091A4.366 4.366 0 0 0 14.3 8z" fill="white"/><path d="M14.719 9.82h-4.064a.473.473 0 0 0-.473.473v3.568a.474.474 0 0 0 .473.474H16.5a.474.474 0 0 0 .474-.474V12.07a2.252 2.252 0 0 0-2.255-2.25z" fill="white"/><path d="M21.576 43.637h-16a2.909 2.909 0 0 0-2.909 2.909v.727h21.818v-.727a2.909 2.909 0 0 0-2.909-2.909z" fill="white"/></svg>
                </div>  
                <div>  
                <h1 className='font-bold text-lg text-white'>EGYBUILD</h1>
                <p className='text-[#E77839]'>Construction Company</p>
                </div>
            
            </div>
            <p className='w-[500px] pt-10 text-white opacity-50 text-sm'>Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications.</p>
            <div className='pt-10 text-orange-500'>
             <span className='pb-4 text-sm'>&copy; All Reights Reserves EGYBUILD.</span>
            </div>
            <div >Designed By :Abdulrahman Fahmy</div>
            </div>
        <div className='pt-5'>
            <h1 className='text-white font-bold pb-5'>Links</h1>
            <li className='list-none pb-4 '>
            <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>About us</a>
            </li>
            <li className='list-none pb-4'>   
             <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>FeedBacks</a>
            </li>
            <li className='list-none pb-4'>   
            <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>Gallery</a>
           </li>
    
        </div>
        <div className='pt-5'>
            <h1  className='text-white font-bold pb-5'>Services</h1>
            <li className='list-none pb-4 '>
            <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>Reliable Equipment</a>
            </li>
            <li className='list-none pb-4'>   
             <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>New Heavy Euipment</a>
            </li>
            <li className='list-none pb-4'>   
            <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>Customer Services</a>
           </li>
       
        </div>
        <div className='pt-5'>
            <h1  className='text-white font-bold pb-5'>Social Media</h1>
            <li className='list-none pb-4 '>
            <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>Facebook</a>
            </li>
            <li className='list-none pb-4'>   
             <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>Instagram</a>
            </li>
            <li className='list-none pb-4'>   
            <a className=' text-white opacity-50 py-2 hover:opacity-100 cursor-pointer'>Twitter</a>
           </li>
    
        </div>

    </div>
  )
}

export default Footer;
