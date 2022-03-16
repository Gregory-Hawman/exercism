import React, { useState } from 'react';

export default function Sort(props) {
  const [dropped, setDropped] = useState(false)
  const [selected, setSelected] = useState('Sort by Most Recent')
  const sortList = [
    {
      id: 1234,
      sortParam: 'Sort by Most Recent',
      isSelected: true
    }, 
    {
      id: 5678,
      sortParam:'Sort by Least Recent',
      isSelected: false
    }
  ]
  
  const handleDrop = () => {
    setDropped(!dropped)
  }

  const handleMostClick = () => {
    if (selected === 'Sort by Most Recent') {
      setDropped(!dropped)
    } else {
      setSelected('Sort by Most Recent')
      setDropped(!dropped)
    }
  }

  const handleLeastClick = () => {
    if (selected === 'Sort by Least Recent') {
      setDropped(!dropped)
    } else {
      setSelected('Sort by Least Recent')
      setDropped(!dropped)
    }
  }

  return (
    <div>
      <div className="sort-drop flex justify-between bg-[#F0F3F9] w-[22rem] p-3 cursor-pointer" onClick={handleDrop}>
        {selected}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.25 7.311L12.53 18.03C12.3895 18.1707 12.1988 18.2498 12 18.2498C11.8012 18.2498 11.6105 18.1707 11.47 18.03L0.75 7.311" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {dropped ? 
        // <div className='absolute bg-white w-[22rem] shadow-all'>
        //   {sortList.map((sortItem) => (
        //     <div className='m-2 p-2 hover:bg-slate-200 rounded-sm' >
        //     {sortItem.sortParam}
        //   </div>
        //   ))}
        // </div> 
        <div className='bg-[#F0F3F9] flex flex-col absolute'>
          <button value='Sort by Most Recent' className='most bg-white w-[22rem] shadow-all' onClick={handleMostClick}>Sort by Most Recent</button>
          <button value='Sort by Least Recent' className='bg-white w-[22rem] shadow-all'onClick={handleLeastClick}>Sort by Least Recent</button>
        </div>
        : 
        null
      }
      
    </div>
  )
}