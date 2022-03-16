import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Filter(props) {
  const [input, setInput] = useState('')


  return (
    <div className="bg-[#F0F3F9] flex rounded-sm w-96">
      <form className="flex align-center">
        <AiOutlineSearch size='26' className='my-auto mx-4'/>
        <input
          className="bg-[#F0F3F9] w-full outline-none cursor-pointer"
          placeholder="Filter by exercise title"
        />
      </form>
    </div>
  )
}
