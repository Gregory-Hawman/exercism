import React, { useState, useRef, useEffect } from 'react';

export default function Sort(props) {
  const [dropped, setDropped] = useState(false)
  const [selected, setSelected] = useState({
      title: 'Sort by Most Recent',
      param: 'newest_first',
    })
  const sortList = [
    {
      id: 1234,
      title: 'Sort by Most Recent',
      param: 'newest_first',
    }, 
    {
      id: 5678,
      title:'Sort by Least Recent',
      param: 'oldest_first',
    }
  ]
  
  const handleDrop = () => {
    setDropped(!dropped)
  }

  const handleClick = (e) => {
    e.preventDefault();
    setSelected({
      title: e.target.title,
      param: e.target.value
    })
    props.setOrder(e.target.value)
    setDropped(!dropped)
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
      <div className="sort-drop flex justify-between bg-[#F0F3F9] w-[22rem] p-3 cursor-pointer" onClick={handleDrop}>
        {selected.title}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
          <path d="M23.25 7.311L12.53 18.03C12.3895 18.1707 12.1988 18.2498 12 18.2498C11.8012 18.2498 11.6105 18.1707 11.47 18.03L0.75 7.311" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {dropped ?
        <div ref={dropRef} className="flex flex-col absolute shadow-all w-[22rem] bg-white">
          <div className="m-2">
            {sortList.map((option) => {
              return(
                <div key={sortList.id} className={selected.title === option.title ? 'bg-[#F0F3F9] hover:bg-slate-200 rounded-md p-3' : 'hover:bg-slate-200 rounded-md p-3'}>
                  <button
                    type="button"
                    value={option.param}
                    title={option.title}
                    onClick={handleClick}
                    className="w-full"
                  >
                    {option.title}
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