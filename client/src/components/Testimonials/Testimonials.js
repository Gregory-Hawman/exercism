import React from 'react';
import Toolbar from '../toolbar/Toolbar';
import TestimonialList from './TestimonialList';
import InitialLoading from '../Loading/InitialLoading';
import Pagination from './Pagination';

export default function Testimonials({testimonialData, currentTrack, setCurrentTrack, currentExercise, setCurrentExercise, order, setOrder, currentPage, setCurrentPage, newCounts, initialLoading, loading}) {

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
      {initialLoading ?      
        <InitialLoading 
          initialLoading={initialLoading}
          loading={loading}
        />
        :
        <TestimonialList 
          testimonialData={testimonialData}
          loading={loading}
        />
      }
      <Pagination 
        testimonialData={testimonialData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
