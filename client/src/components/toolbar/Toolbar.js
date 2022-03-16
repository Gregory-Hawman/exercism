import React from 'react';
import TrackSelect from './TrackSelect';
import Filter from './Filter';
import Sort from './Sort';

export default function Toolbar() {
  return (
    <div className="toolbar flex justify-between bg-[white] p-4 rounded-t-sm border-[#D5D8E4] border-b-2">
      <div className="flex">
        <TrackSelect />
        <Filter />
      </div>
      <Sort />
    </div>
  )
}
