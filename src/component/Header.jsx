import React from 'react'

const Header = () => {
  return (
    <div className='px-20 py-2  bg-[#FAFAFA] flex flex-row justify-between   '>
      <div className='flex flex-row gap-2 '>
          <div className="bg-[#E77839] w-14 h-14 p-2 rounded-md"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47.273"><g fill="white"><path d="M31.742 25.788H45.56v3.636H31.742zM31.742 20.696H45.56v3.637H31.742zM31.742 30.878H45.56v3.637H31.742z"/></g><path d="M38.941 10.947 13.866.061a.73.73 0 0 0-.761.112L.257 11.082 1.2 12.19 13.7 1.575l24.223 10.516v22.424h1.455v-22.9a.725.725 0 0 0-.437-.668z" fill="white"/><g fill="white"><path d="M11.03 10.183h5.091a.728.728 0 0 0 .7-.932L14.274.523a.727.727 0 0 0-1.4 0l-2.541 8.728a.729.729 0 0 0 .7.932zm2.546-6.858 1.576 5.4H12zM47.789 15.489l-4.334-4.364a.724.724 0 0 0-.516-.215h-8.482a.657.657 0 0 0-.234 0H.727a.727.727 0 0 0-.356 1.36l7.758 4.364a.715.715 0 0 0 .356.094H10.3v28.727a.729.729 0 0 0 .727.728h5.091a.727.727 0 0 0 .727-.728V16.728h30.427a.728.728 0 0 0 .517-1.239zm-19.545-.216h-5.217l2.609-2.607zm-.853-2.909h5.171l-2.586 2.586zm6.95.278 2.631 2.631H31.71zm1.778-.278h5.064L38.651 14.9zM8.676 15.273 3.5 12.364h7.53a.727.727 0 0 0-.727.728v2.182H8.676zm6.718 0h-3.637v-1.454h3.637zm0 17.454h-3.637v-3.636h3.637zm-3.636 1.455H15.4v3.637h-3.642zm3.636-6.546h-3.637V24h3.637zm0 17.091h-3.637v-5.454h3.637zm0-22.181h-3.637v-5.818h3.637zm.727-10.182h7.759l-2.91 2.909h-4.122v-2.182a.726.726 0 0 0-.727-.727zm24.21 2.909 2.606-2.605 2.588 2.605z"/></g><path d="M14.3 8h-3.633a2.182 2.182 0 0 0-2.182 2.183v7.271a.728.728 0 0 0 .728.728h8.727a.727.727 0 0 0 .728-.728v-5.091A4.366 4.366 0 0 0 14.3 8z" fill="white"/><path d="M14.719 9.82h-4.064a.473.473 0 0 0-.473.473v3.568a.474.474 0 0 0 .473.474H16.5a.474.474 0 0 0 .474-.474V12.07a2.252 2.252 0 0 0-2.255-2.25z" fill="white"/><path d="M21.576 43.637h-16a2.909 2.909 0 0 0-2.909 2.909v.727h21.818v-.727a2.909 2.909 0 0 0-2.909-2.909z" fill="white"/></svg>
          </div>  
          <div>  
          <h1 className='font-bold text-lg'>EGYBUILD</h1>
          <p className='text-[#E77839] '>Construction Company</p>
          </div>
       
    </div> 
     <div className='lg:flex lg:flex-row gap-2 sm:hidden'>
            <div className=" w-12 h-12 p-2 "> 
            <svg width="30" height="32" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.16571 0 0 5.9565 0 13.3C0 23.275 16 38 16 38C16 38 32 23.275 32 13.3C32 5.9565 24.8343 0 16 0ZM16 18.05C12.8457 18.05 10.2857 15.922 10.2857 13.3C10.2857 10.678 12.8457 8.55 16 8.55C19.1543 8.55 21.7143 10.678 21.7143 13.3C21.7143 15.922 19.1543 18.05 16 18.05Z" fill="#E77839"/>
            </svg>
           </div> 
           <div>  
           <h1 className='text-sm pt-2' >Our Location</h1>
           <p className='text-[#E77839] text-sm'>03street,Manshia,Alexandria</p>
           </div>
         </div> 
         <div className='lg:flex lg:flex-row gap-2 sm:hidden'>
         <div className=" w-12 h-12 p-2 animate-pulse"> 
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16 1C12.0218 1 8.20644 2.58035 5.3934 5.3934C2.58035 8.20644 1 12.0218 1 16V22C1 22.1326 1.05268 22.2598 1.14645 22.3536C1.24021 22.4473 1.36739 22.5 1.5 22.5H4V17.5H2V16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16V17.54H28V22.54H30V26.54C29.9895 27.4613 29.6161 28.3413 28.9608 28.9891C28.3056 29.6368 27.4214 30.0001 26.5 30H19V28.5C19 28.1022 18.842 27.7206 18.5607 27.4393C18.2794 27.158 17.8978 27 17.5 27H14.5C14.1022 27 13.7206 27.158 13.4393 27.4393C13.158 27.7206 13 28.1022 13 28.5V29.5C13 29.8978 13.158 30.2794 13.4393 30.5607C13.7206 30.842 14.1022 31 14.5 31H26.5C27.6927 30.9974 28.8357 30.5224 29.6791 29.6791C30.5224 28.8357 30.9974 27.6927 31 26.5V16C31 12.0218 29.4196 8.20644 26.6066 5.3934C23.7936 2.58035 19.9782 1 16 1Z" fill="#E77839"/>
         <path d="M7.5 13H5.5C5.32967 13.0038 5.16098 13.0342 5 13.09V25.91C5.16098 25.9658 5.32967 25.9962 5.5 26H7.5C7.89782 26 8.27936 25.842 8.56066 25.5607C8.84196 25.2794 9 24.8978 9 24.5V14.5C9 14.1022 8.84196 13.7206 8.56066 13.4393C8.27936 13.158 7.89782 13 7.5 13ZM26.5 26C26.6703 25.9962 26.839 25.9658 27 25.91V13.09C26.839 13.0342 26.6703 13.0038 26.5 13H24.5C24.1022 13 23.7206 13.158 23.4393 13.4393C23.158 13.7206 23 14.1022 23 14.5V24.5C23 24.8978 23.158 25.2794 23.4393 25.5607C23.7206 25.842 24.1022 26 24.5 26H26.5Z" fill="#E77839"/>
         </svg>
         
        </div> 
        <div>  
        <h1 className='text-sm pt-2 sm:text-xs'><span className='text-[#E77839] font-bold'>Free Call :</span> (+20) 01095335270</h1>
        <p className='text-[#E77839] text-sm sm:text-xs'>Call Us Now 24/7 Customer Service</p>
        </div>
      </div> 
      <div className='flex flex-row gap-4 py-2'>
      <div className='bg-[#3C3F4E] p-3 rounded-full w-10 h-10'>
        <svg width="16" height="16" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.05494 19.8518C7.55421 20.4784 8.2874 20.884 9.09223 20.9787C9.89706 21.0734 10.7072 20.8495 11.3433 20.3564C11.5389 20.2106 11.7149 20.041 11.8672 19.8518M1.00083 12.7871V12.5681C1.03295 11.9202 1.2406 11.2925 1.60236 10.7496C2.2045 10.0975 2.6167 9.29831 2.79571 8.43598C2.79571 7.7695 2.79571 7.0935 2.85393 6.42703C3.15469 3.21842 6.32728 1 9.46106 1H9.53867C12.6725 1 15.845 3.21842 16.1555 6.42703C16.2137 7.0935 16.1555 7.7695 16.204 8.43598C16.3854 9.3003 16.7972 10.1019 17.3974 10.7591C17.7618 11.2972 17.9698 11.9227 17.9989 12.5681V12.7776C18.0206 13.648 17.7208 14.4968 17.1548 15.1674C16.407 15.9515 15.3921 16.4393 14.3024 16.5384C11.107 16.8812 7.88303 16.8812 4.68762 16.5384C3.59914 16.435 2.58576 15.9479 1.83521 15.1674C1.278 14.4963 0.982241 13.6526 1.00083 12.7871Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>
      <div className='bg-[#FCFFFF] p-3 rounded-full w-10 h-10 '>
      <svg width="16" height="16" viewBox="0 0 20 16" fill="#3C3F4E" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z" fill="#3C3F4E"/>
      </svg>
      
      
    </div>
    
      </div>
    </div>
  )
}

export default Header