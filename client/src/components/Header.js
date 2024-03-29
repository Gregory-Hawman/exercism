import React from 'react'

export default function Header(props) {
  return (
    <div className="header flex flex-col">
        <div className="w-16 mx-auto mt-10 mb-3">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 2.30941C30.4752 0.880344 33.5248 0.880345 36 2.30941L55.7128 13.6906C58.188 15.1197 59.7128 17.7607 59.7128 20.6188V43.3812C59.7128 46.2393 58.188 48.8803 55.7128 50.3094L36 61.6906C33.5248 63.1197 30.4752 63.1197 28 61.6906L8.2872 50.3094C5.81199 48.8803 4.2872 46.2393 4.2872 43.3812V20.6188C4.2872 17.7607 5.81199 15.1197 8.2872 13.6906L28 2.30941Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M54.2128 16.2887L34.5 4.90748C32.953 4.01432 31.047 4.01432 29.5 4.90748L9.7872 16.2887C8.2402 17.1818 7.2872 18.8325 7.2872 20.6188V43.3812C7.2872 45.1675 8.2402 46.8182 9.7872 47.7113L29.5 59.0925C31.047 59.9857 32.953 59.9857 34.5 59.0925L54.2128 47.7113C55.7598 46.8182 56.7128 45.1675 56.7128 43.3812V20.6188C56.7128 18.8325 55.7598 17.1818 54.2128 16.2887ZM36 2.30941C33.5248 0.880345 30.4752 0.880344 28 2.30941L8.2872 13.6906C5.81199 15.1197 4.2872 17.7607 4.2872 20.6188V43.3812C4.2872 46.2393 5.81199 48.8803 8.2872 50.3094L28 61.6906C30.4752 63.1197 33.5248 63.1197 36 61.6906L55.7128 50.3094C58.188 48.8803 59.7128 46.2393 59.7128 43.3812V20.6188C59.7128 17.7607 58.188 15.1197 55.7128 13.6906L36 2.30941Z" fill="#130B43"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M32.875 18.875C28.4292 18.8686 24.33 21.2748 22.1683 25.1596C20.0066 29.0445 20.1228 33.7963 22.4718 37.5708L18.875 45.125L26.4292 41.5282C30.8465 44.2746 36.5166 43.932 40.5711 40.6736C44.6255 37.4152 46.1801 31.9516 44.4485 27.0468C42.7168 22.142 38.0765 18.8656 32.875 18.875Z" stroke="#130B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M36.375 33.75C36.375 35.683 34.808 37.25 32.875 37.25C30.942 37.25 29.375 35.683 29.375 33.75H36.375Z" stroke="#130B43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27.625 28.9375C27.3834 28.9375 27.1875 29.1334 27.1875 29.375C27.1875 29.6166 27.3834 29.8125 27.625 29.8125C27.8666 29.8125 28.0625 29.6166 28.0625 29.375C28.0625 29.1334 27.8666 28.9375 27.625 28.9375" stroke="#130B43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M38.125 28.9375C37.8834 28.9375 37.6875 29.1334 37.6875 29.375C37.6875 29.6166 37.8834 29.8125 38.125 29.8125C38.3666 29.8125 38.5625 29.6166 38.5625 29.375C38.5625 29.1334 38.3666 28.9375 38.125 28.9375" stroke="#130B43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className='flex items-center mx-auto'>
          <h1 className='font-sans font-bold text-2xl flex justify-center content-center ml-10 mr-4'>Testimonials I've left</h1>
          <div className='text-[#5C5589] border-[1px] border-[#c9c9c9] rounded-[25px] px-3 py-[.125rem]'>
            {props.testimonialData.pagination === undefined ? null : props.testimonialData.pagination.total_count}
          </div>
        </div>
        <div className="w-20 mx-auto my-2">
          <svg width="78" height="20" viewBox="0 0 78 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.79999 13L10.2 4L25.8 16L39 4.9L52.8 16L62.1 5.8L76.2 16" stroke="#130B43" strokeWidth="3"/>
          </svg>
        </div>
    </div>
  )
}