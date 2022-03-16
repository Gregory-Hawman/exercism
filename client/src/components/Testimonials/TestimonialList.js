import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsList(props) {

  console.log('TEST', props.testimonialResults)

  return (
    <div>
      {props.testimonialResults.map(testimonial => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
      <hr className='border-3 border-[#D5D8E4]'></hr>
    </div>
  )
}
