import React from 'react';
import TrackSelect from './TrackSelect';
import Filter from './Filter';
import Sort from './Sort';

export default function Toolbar({testimonialData, currentTrack, setCurrentTrack, currentExercise, setCurrentExercise, order, setOrder, newCounts}) {
  return (
    <div className="toolbar flex justify-between bg-[white] p-4 rounded-t-sm border-[#D5D8E4] border-b-2">
      <div className="flex">
        <TrackSelect
          testimonialData={testimonialData}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          currentExercise={currentExercise}
          newCounts={newCounts}
        />
        <Filter
          currentExercise={currentExercise}
          setCurrentExercise={setCurrentExercise}
        />
      </div>
      <Sort
        order={order}
        setOrder={setOrder}
      />
    </div>
  )
}