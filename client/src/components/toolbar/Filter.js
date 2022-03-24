import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Filter(props) {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === ''){
      setActive(false);
    } else {
      setActive(true);
    }
    props.setCurrentExercise(input);
    setInput('');
  };

  const handleClick = () => {
    setInput('')
    setActive(false)
    props.setCurrentExercise('')
  };

  const handleActive = () => {
    if (props.currentExercise === ''){
      setActive(true)
    }
  };

  const clickRef = useRef(null);
  useEffect(() => {
    function clickOutside(e) {
      if (clickRef.current && !clickRef.current.contains(e.target)) {
          setActive(false)
      }
    }
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickRef, active]);
  
  return (
    <div ref={props.currentExercise === '' ? clickRef : null} className={active ? 'bg-white flex rounded-md w-96 border-2 border-[#2E57E8] cursor-pointer' : 'bg-[#F0F3F9] flex rounded-md w-96 cursor-pointer'} onClick={handleActive}>
      <form 
        className='flex' 
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch size='26' className={active ? 'my-auto ml-[.875rem] mr-4 cursor-pointer' : 'my-auto mx-4 cursor-pointer'}/>
        <input
          type='text'
          name='filter'
          className={active ? 'bg-white w-[16rem] outline-none cursor-pointer autofill:bg-white' : 'bg-[#F0F3F9] w-[16rem] outline-none cursor-pointer autofill:bg-[#F0F3F9]'}
          placeholder={props.currentExercise !== '' ? `"${props.currentExercise}"` : 'Filter by exercise title'}
          value={input}
          onChange={handleChange}
        />
        
      </form>
        {props.currentExercise !== '' ? 
          <div className='bg-[white] flex my-auto p-[.125rem] text-[.75rem] rounded-md'>
            <button className='ml-10 mr-1 font-bold' onClick={handleClick}> X </button>
          </div>
          : 
          null
        }
    </div>
  )
};
