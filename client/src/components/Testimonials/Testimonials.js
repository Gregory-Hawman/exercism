import React from 'react';
import Toolbar from '../toolbar/Toolbar';
import TestimonialList from './TestimonialList';
import Pagination from './Pagination';

export default function Testimonials(props) {
  // console.log('PROPS DATA', props.testimonialData)

  return (
    <div className="m-8 shadow-all rounded-sm">
      <Toolbar 
        testimonialData={props.testimonialData}
        currentTrack={props.currentTrack}
        setCurrentTrack={props.setCurrentTrack}
        currentExercise={props.currentExercise}
        setCurrentExercise={props.setCurrentExercise}
        order={props.order}
        setOrder={props.setOrder}
        totalCount={props.totalCount}
      />
      <TestimonialList 
        testimonialData={props.testimonialData}
        currentTrack={props.currentTrack}
        currentExercise={props.currentExercise}
        order={props.order}
        currentPage={props.currentPage}

      />
      <Pagination 
        testimonialData={props.testimonialData}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </div>
  )
}
