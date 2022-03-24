import React from 'react';
import TestimonialCard from './TestimonialCard';
import Loading from '../Loading/Loading';

export default function TestimonialsList({testimonialData, loading}) {
  // console.log('PROPS DATA LIST', props.testimonialData.results)

  return (
    <div>
      {loading 
        ? 
          <Loading />
        : 
          null
      }
      {testimonialData.results === undefined 
        ? 
          null // THIS IS WHERE / HOW YOU PUT IN THE LOADING SCREEN
        : 
          testimonialData.results.map(testimonial => (
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

