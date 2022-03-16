import React from 'react';
import TrackSelect from './TrackSelect';
import Filter from './Filter';
import Sort from './Sort';

export default function Toolbar() {
  return (
    <div>
      Toolbar
      <TrackSelect />
      <Filter />
      <Sort />
    </div>
  )
}
