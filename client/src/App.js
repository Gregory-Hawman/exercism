import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  // set by api call
  const [testimonialData, setTestimonialData] = useState({})
  const [newCounts, setNewCounts] = useState([])
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

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
    setLoading(true)
    if (currentTrack.track !== 'All' && currentExercise !== '') {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&track=${currentTrack.track}&exercise=${currentExercise}&order=${order}`)
        .then((response) => {
          setTestimonialData(response.data.testimonials)
        })
        .catch(error => {
          console.log('Error:', error);
        });
        setTimeout(() => {
          setInitialLoading(false)
          setLoading(false)
        }, 1000)
    } else if (currentTrack.track !== 'All' ) {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&track=${currentTrack.track}&order=${order}`)
        .then((response) => {
          setTestimonialData(response.data.testimonials)
        })
        .catch(error => {
          console.log('Error:', error);
        });
        setTimeout(() => {
          setInitialLoading(false)
          setLoading(false)
        }, 1000)
    } else if (currentExercise !== '') {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&exercise=${currentExercise}&order=${order}`)
        .then((response) => {
          setTestimonialData(response.data.testimonials)
        })
        .catch(error => {
          console.log('Error:', error);
        });
        setTimeout(() => {
          setInitialLoading(false)
          setLoading(false)
        }, 1000)
    } else {
      axios
        .get(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}&order=${order}`)
        .then((response) => {
          setTestimonialData(response.data.testimonials)
        })
        .catch(error => {
          console.log('Error:', error);
        });
        setTimeout(() => {
          setInitialLoading(false)
          setLoading(false)
        }, 1000)
    }
  }, [currentPage, order, currentTrack, currentExercise]);

  useEffect(() => {
    if (testimonialData.tracks === undefined) {
      return
    } else {
      for (let i = 0; i < testimonialData.tracks.length; i++) {
        let track = testimonialData.tracks[i]
          axios
            .get(`https://exercism.org/api/v2/hiring/testimonials?track=${track}&exercise=${currentExercise}`)
            .then((response) => {
              let newCount = {
                title: track,
                count: response.data.testimonials.pagination.total_count
              }
            
              setNewCounts(arr => [...arr, newCount])
            })
            .catch((error) => {
              console.log('Error:', error);
            })
      }
    }
  },[testimonialData.tracks, currentExercise]);

  return (
    <div>
      <Navbar />
      <Header 
        testimonialData={testimonialData}
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
        newCounts={newCounts}
        loading={loading}
        initialLoading={initialLoading}
      />
    </div>
  );
}

export default App;
