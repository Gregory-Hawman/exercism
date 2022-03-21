import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  // set by api call
  const [testimonialData, setTestimonialData] = useState({})
  const [totalCount, setTotalCount] = useState(0)

  // needed to change api call
  const [currentTrack, setCurrentTrack] = useState({
    track: 'All',
    first: true
  });
  const [currentExercise, setCurrentExercise] = useState('');
  const [order, setOrder] = useState('newest_first');
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    // TESTIMONIALS
    if (currentTrack.track !== '' && currentTrack.track !== 'All' && currentExercise !== '') {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&track=${currentTrack.track}&exercise=${currentExercise}&order=${order}`)
        .then((response) => {
          setTestimonialData(response.data.testimonials)
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } else if (currentTrack.track !== '' && currentTrack.track !== 'All' ) {
      axios
      .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&track=${currentTrack.track}&order=${order}`)
      .then((response) => {
        setTestimonialData(response.data.testimonials)
      })
      .catch(error => {
        console.log('Error:', error);
      });
    } else if (currentExercise !== '') {
      axios
      .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&exercise=${currentExercise}&order=${order}`)
      .then((response) => {
        setTestimonialData(response.data.testimonials)
      })
      .catch(error => {
        console.log('Error:', error);
      });
    } else {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&order=${order}`)
        .then((response) => {
          setTestimonialData(response.data.testimonials)
          setTotalCount(response.data.testimonials.pagination.total_count)
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }, [currentPage, order, currentTrack, currentExercise]);

  // console.log('DATA', testimonialData)
  // console.log('RESULTS', testimonialData.results)
  // console.log('PAGE', testimonialData.pagination)
  // console.log('TRACKS', testimonialData.tracks)
  // console.log('COUNTS', testimonialData.track_counts)

  return (
    <div>
      <Navbar />
      <Header 
        currentTrack={currentTrack}
      />
      <Testimonials 
        testimonialData={testimonialData}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        currentExercise={currentExercise}
        setCurrentExercise={setCurrentExercise}
        order={order}
        setOrder={setOrder}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={totalCount}
      />
    </div>
  );
}

export default App;
