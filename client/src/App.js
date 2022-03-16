import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  // set by api call
  const [testimonialResults, setTestimonialResults] = useState([])
  const [testimonialPagination, setTestimonialPagination] = useState([])
  const [testimonialTracks, setTestimonialTracks] = useState([])
  const [testimonialTrackCounts, setTestimonialTrackCounts] = useState([])

  // needed to change api call
  const [order, setOrder] = useState('newest_first')
  const [currentPage, setCurrentPage] = useState(1)
  const [currentTrack, setCurrentTrack] = useState('')
  const [currentExercise, setCurrentExercise] = useState('')
  
  useEffect(() => {
    if (currentTrack !== '' && currentExercise !== '') {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&track=${currentTrack}&exercise=${currentExercise}&order=${order}`)
        .then((response) => {
          setTestimonialResults(response.data.testimonials.results)
          setTestimonialPagination(response.data.testimonials.pagination)
          setTestimonialTracks(response.data.testimonials.tracks)
          setTestimonialTrackCounts(response.data.testimonials.track_counts)
        })
    } else if (currentTrack !== '') {
      axios
      .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&track=${currentTrack}&order=${order}`)
      .then((response) => {
        setTestimonialResults(response.data.testimonials.results)
        setTestimonialPagination(response.data.testimonials.pagination)
        setTestimonialTracks(response.data.testimonials.tracks)
        setTestimonialTrackCounts(response.data.testimonials.track_counts)
      })
    } else if (currentExercise !== '') {
      axios
      .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&exercise=${currentExercise}&order=${order}`)
      .then((response) => {
        setTestimonialResults(response.data.testimonials.results)
        setTestimonialPagination(response.data.testimonials.pagination)
        setTestimonialTracks(response.data.testimonials.tracks)
        setTestimonialTrackCounts(response.data.testimonials.track_counts)
      })
    } else {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&order=${order}`)
        .then((response) => {
          // console.log('Response: ', response.data.testimonials);
          setTestimonialResults(response.data.testimonials.results)
          setTestimonialPagination(response.data.testimonials.pagination)
          setTestimonialTracks(response.data.testimonials.tracks)
          setTestimonialTrackCounts(response.data.testimonials.track_counts)
        })
    }
  }, [currentPage, order, currentTrack, currentExercise])

  console.log(testimonialResults)

  return (
    <div>
      <Navbar />
      <Header 
        currentTrack={currentTrack}
      />
      <Testimonials 
        testimonialResults={testimonialResults}
      />
    </div>
  );
}

export default App;
