import React from 'react';
import Toolbar from '../toolbar/Toolbar';
import TestimonialList from './TestimonialList';
import Pagination from './Pagination';

export default function Testimonials(props) {
  console.log(props.testimonialResults)

  return (
    <div className="m-8 shadow-all rounded-sm">
      <Toolbar />
      <TestimonialList 
        testimonialResults={props.testimonialResults}
      />
      <Pagination />
    </div>
  )
}
