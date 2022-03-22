import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AllTracksLogo from '../SVGs/TracksLogo';

export default function TrackSelect(props) {
  const [dropped, setDropped] = useState(false);
  const [tracksData, setTracksData] = useState({})
  const [newCounts, setNewCounts] = useState([])

  let trackList = tracksData.tracks
  let tracks = props.testimonialData.tracks

  // TRACKS
  useEffect(() => {
    axios
    .get('https://exercism.org/api/v2/tracks')
    .then((response) => {
      setTracksData(response.data)
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }, []);

  console.log(props.currentExercise)
  
  // New Counts for exercises
  useEffect(() => {
    if (tracks === undefined) {
      return
    } else {
      for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i]
        if (props.currentExercise !== '') {
          axios
            .get(`https://exercism.org/api/v2/hiring/testimonials?track=${track}&exercise=${props.currentExercise}`)
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
    }
  },[tracks, props.currentExercise]);
  
  let cache = {}
  for (let i = 0; i < newCounts.length; i++){
      cache[newCounts[i].title] = newCounts[i].count
  }

  // Pulling the icon_url for the current Track and using that url for the dropdown image.
  function getIconURL() {
      for (let i = 0; i < trackList.length; i++){
        if (props.currentTrack.track === trackList[i].slug){
          return trackList[i].icon_url
        }
      }
  }

  // Building list of tracks with all needed data easily available
  function buildTracks () {
    // New List with starter data for "All" Tracks and how the data is structured
    let newTracksData = [{
      id: 999,
      track: 'All',
      count: props.totalCount,
      icon_url: AllTracksLogo,
      first: true
    }]

    // Building a list of icon_urls for the dropdown list
    let icon_urls = []

    // for every track we are looping through the tracks to get...
    for (let i = 0; i < tracks.length; i++){
      // icon_url
      for (let j = 0; j < trackList.length; j++){
        if (tracks[i] === trackList[j].slug){
          icon_urls.push(trackList[j].icon_url)
        }
      }

      // track name
      let track = tracks[i]
      console.log('TRACK', track)
      // count
      let count
      // if their is no exercise it is just all the the total track counts
      if (props.currentExercise === ''){
        count = props.testimonialData.track_counts[track]
      // else we need to do a bit more...
      } 
      for (let key in cache) {
        console.log('key =', key, ', ', 'track =', track)
        if (key === track) {
          console.log('MATCH', key, track)
          count = cache[key]
        }
      }

      let newTrack = {
        id: i,
        track: track,
        count: count,
        icon_url: icon_urls[i],
        first: false
      }
      console.log(newTrack)

      // if there is no count of testimonials then skip this track
      if(newTrack.count === 0){
        continue
      }
      // else add it to the list
      newTracksData.push(newTrack)
    }

    return newTracksData
  }
  
  const handleDrop = () => {
    setDropped(!dropped);
  }

  const handleChange = (e) => {
    e.preventDefault();

    props.setCurrentTrack({
      track: e.currentTarget.value,
      first: e.currentTarget.value === 'All' ? true : false
    })
    setDropped(!dropped);
  }

  const dropRef = useRef(null);
  useEffect(() => {
    function clickOutside(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropped(!dropped)
      }
    }
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [dropRef, dropped]);

  return (
    <div>
      {props.currentTrack.first ? 
        <div className="track-drop flex justify-center content-center" onClick={handleDrop}>
          {AllTracksLogo()} 

          <svg width="15" height="15" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 mr-4 my-auto'>
            <path d="M13.5938 3.96012L7.78708 9.76625C7.71098 9.84246 7.6077 9.88528 7.5 9.88528C7.3923 9.88528 7.28902 9.84246 7.21292 9.76625L1.40625 3.96012" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        :
        <div className="track-drop flex justify-center content-center" onClick={handleDrop}>
          <img src={getIconURL()} alt={props.currentTrack.track} className='w-12'/>

          <svg width="15" height="15" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 mr-4 my-auto'>
            <path d="M13.5938 3.96012L7.78708 9.76625C7.71098 9.84246 7.6077 9.88528 7.5 9.88528C7.3923 9.88528 7.28902 9.84246 7.21292 9.76625L1.40625 3.96012" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      }

      {dropped ?
        <div ref={dropRef} className='track-drop-radio flex flex-col absolute bg-white w-[22rem] rounded-md my-2 mx-[-1rem] shadow-all h-[20rem] overflow-y-scroll'>
          <div className='my-2'>
            {buildTracks().map((track) => {
              return (
                <div key={track.id} className={props.currentTrack.track === track.track ? 'bg-[#F0F3F9] flex justify-between content-center my-auto mx-2 rounded-md py-2 hover:bg-slate-200 cursor-pointer' : 'flex justify-between content-center my-auto mx-2 rounded-md py-2 hover:bg-slate-200 cursor-pointer'}>
                  <button
                    type='button'
                    value={track.track}
                    onClick={handleChange}
                    className='flex justify-between w-full'
                  >
                    <div className='flex'>
                      <div className='border-[1px] border-[#3F3A5A] mx-4 w-4 h-4 rounded-[50%] my-auto'>
                        <div className={props.currentTrack.track === track.track ? 'bg-[#3F3A5A] mt-[.175rem] mx-auto w-[.5rem] h-[.5rem] rounded-[50%]' : null}></div>
                      </div>
                      <div className='my-auto mr-4 w-12'>
                        {track.first ? 
                          AllTracksLogo() 
                          :
                          <img src={track.icon_url} alt='icon url'/>
                        }
                      </div>
                      <div className='my-auto capitalize'>
                        {track.track}
                      </div>
                    </div>
                    <div className='border border-black px-3 py-1 rounded-2xl my-auto text-xs mr-6'>
                      {track.count}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        :
        null
      }
    </div>
  )
}