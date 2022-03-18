import React from 'react';
import TestimonialCard from './TestimonialCard';


export default function TestimonialsList(props) {
  // console.log('PROPS DATA LIST', props.testimonialData.results)

  return (
    <div>
      {props.testimonialData.results === undefined 
        ? 
          null // THIS IS WHERE / HOW YOU PUT IN THE LOADING SCREEN
        : 
          props.testimonialData.results.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))
      }
      <hr className='border-3 border-[#D5D8E4]'></hr>
    </div>
  )
}
