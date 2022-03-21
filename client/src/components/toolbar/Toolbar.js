import React from 'react';
import TrackSelect from './TrackSelect';
import Filter from './Filter';
import Sort from './Sort';

export default function Toolbar(props) {
  // console.log('TOOLS DATA',props.testimonialData)


  return (
    <div className="toolbar flex justify-between bg-[white] p-4 rounded-t-sm border-[#D5D8E4] border-b-2">
      <div className="flex">
        <TrackSelect
          testimonialData={props.testimonialData}
          tracksData={props.tracksData}
          currentTrack={props.currentTrack}
          setCurrentTrack={props.setCurrentTrack}
          totalCount={props.totalCount}
        />
        <Filter
          currentExercise={props.currentExercise}
          setCurrentExercise={props.setCurrentExercise}
        />
      </div>
      <Sort
        order={props.order}
        setOrder={props.setOrder}
      />
    </div>
  )
}
