import React from 'react';
import Toolbar from '../toolbar/Toolbar';
import TestimonialList from './TestimonialList';
import Pagination from './Pagination';

export default function Testimonials() {
  return (
    <div>
      Testimonials

      <Toolbar />
      <TestimonialList />
      <Pagination />
    </div>
  )
}
