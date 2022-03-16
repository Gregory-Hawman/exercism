import React from 'react';
import moment from 'moment';
import { CgProfile } from 'react-icons/cg';

export default function TestimonialCard(props) {
  const timeAgo = moment(props.testimonial.created_at).fromNow()

  return (
    <div className="flex justify-between px-1 py-2 hover:bg-[#F4F7FD] border-b-2 border-[#EAECF3]">
      <div className="flex w-[85%]">
        <div className="flex w-[35%] my-auto">

          {/* Track Icon */}
          <div className="w-8 my-auto mx-3">
            <img src={props.testimonial.track.icon_url} alt='track img'/>
          </div>

          {/* ProfilePic */}
          <div>
            {/* <img src={testimonial.mentor.avatar_url} alt='avatar img'/> */}
            <CgProfile size='30' className='mt-2 ml-1 mr-3'/>
          </div>

          <div>
            {/* Mentor */}
            <div className='font-semibold'>
              <h3>{props.testimonial.mentor.handle}</h3>
            </div>

            {/* $Exercise in $Track */}
            <div>
              <p>{props.testimonial.exercise.title}</p>
            </div>
          </div>
        </div>

        <div className='w-[60%] my-auto'>
          {/* Content */}
          <div>
            <p className='truncate'>{props.testimonial.content}</p>
          </div>
        </div>
      </div>
      
      <div className='flex my-auto'>
        {/* When */}
        <div className='my-auto mr-10'>
          <p>{timeAgo}</p>
        </div>

        {/* Right Chevron */}
        <div className='mr-2'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6667 8.5L18.8134 15.6467C18.9072 15.7403 18.9599 15.8674 18.9599 16C18.9599 16.1326 18.9072 16.2597 18.8134 16.3533L11.6667 23.5" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
