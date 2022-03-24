import React from 'react';
import Toolbar from '../toolbar/Toolbar';
import TestimonialList from './TestimonialList';
import Pagination from './Pagination';

export default function Testimonials({testimonialData, currentTrack, setCurrentTrack, currentExercise, setCurrentExercise, order, setOrder, currentPage, setCurrentPage, newCounts}) {

  return (
    <div className="m-8 shadow-all rounded-md">
      <Toolbar 
        testimonialData={testimonialData}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        currentExercise={currentExercise}
        setCurrentExercise={setCurrentExercise}
        order={order}
        setOrder={setOrder}
        currentPage={currentPage}
        newCounts={newCounts}
      />
      <TestimonialList 
        testimonialData={testimonialData}
        currentTrack={currentTrack}
        currentExercise={currentExercise}
        order={order}
        currentPage={currentPage}

      />
      <Pagination 
        testimonialData={testimonialData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
