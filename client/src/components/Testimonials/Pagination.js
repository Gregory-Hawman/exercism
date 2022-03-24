import React, { useState, useEffect } from 'react';

export default function Pagination(props) {
  const [lastPage, setLastPage] = useState()

  useEffect(() =>{
    let last_page
    if (props.testimonialData.pagination === undefined) {
      return null
    } else {
      last_page = props.testimonialData.pagination.total_pages
    }
    setLastPage(last_page)
  }, [props.testimonialData.pagination])

  const handleClick = (e) => {
    e.preventDefault()
    props.setCurrentPage(parseInt(e.target.value))
  }

  const handlePrevNext = (e) => {
    e.preventDefault();
    props.setCurrentPage(parseInt(props.currentPage) + parseInt(e.target.value))
  }

  return (
      <div className="flex justify-between items-center p-6">
          <div>
            <button
              type='button'
              value={-1}
              onClick={props.currentPage === 1 ? null : handlePrevNext}
              className={props.currentPage === 1 ? 'flex items-center px-4 py-2 h-[2.6rem] rounded-md bg-[#E0E0ED] text-[#76709F] cursor-default' : 'flex items-center px-3 py-2 rounded-md border-2 border-[#D5D8E4] text-[#5C5589]'}
            >
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <g opacity="0.7">
                  <path d="M12.625 6H1.375" stroke="#76709F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.625 0.75L1.375 6L6.625 11.25" stroke="#76709F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>

              Previous
            </button>
          </div>

          <div className='flex items-center'>
            <div className="flex justify-evenly w-[25rem]">
              {parseInt(props.currentPage) === 1 ?
                null
              :
                <button
                  type='button'
                  value={1}
                  onClick={handleClick}
                  className='border-2 border-[#D5D8E4] px-4 py-2 h-[2.6rem] rounded-md mx-1'
                >
                  1
                </button>
              }

              {parseInt(props.currentPage) < 5 ?
                null
              :
                <div className='mt-2 mx-4'>
                  ...
                </div>
              }

              {/* THESE ARE THE TWO BEFORE */}
              {parseInt(props.currentPage) < 4 ?
                  null
                :
                  <button
                    type='button'
                    value={parseInt(props.currentPage) - 2}
                    onClick={handleClick}
                    className='border-2 border-[#D5D8E4] px-4 py-2 h-[2.6rem] rounded-md mx-1'
                  >
                    {parseInt(props.currentPage) - 2}
                  </button>
              }
              {parseInt(props.currentPage) < 3 ?
                  null
                :
                  <button
                    type='button'
                    value={parseInt(props.currentPage) - 1}
                    onClick={handleClick}
                    className='border-2 border-[#D5D8E4] px-4 py-2 h-[2.6rem] rounded-md mx-1'
                  >
                    {parseInt(props.currentPage) - 1}
                  </button>
              }
              {/* THESE ARE THE TWO BEFORE */}

              <button
                type='button'
                value={parseInt(props.currentPage)}
                onClick={handleClick}
                className='bg-[#E1EBFF] px-4 py-2 h-[2.6rem] my-auto rounded-md border-2 border-[#76709F] mx-1'
              >
                {parseInt(props.currentPage)}
              </button>

              {/* THESE ARE THE TWO AFTER */}
              {props.currentPage < lastPage - 1 ? 
                  <button
                    type='button'
                    value={parseInt(props.currentPage) + 1}
                    onClick={handleClick}
                    className='border-2 border-[#D5D8E4] px-4 py-2 h-[2.6rem] rounded-md mx-1'
                  >
                    {parseInt(props.currentPage) + 1}
                  </button>
                :
                  null
              }
              {parseInt(props.currentPage) < lastPage - 2 ? 
                  <button
                    type='button'
                    value={parseInt(props.currentPage) + 2}
                    onClick={handleClick}
                    className='border-2 border-[#D5D8E4] px-4 py-2 h-[2.6rem] rounded-md mx-1'
                  >
                    {parseInt(props.currentPage) + 2}
                  </button>
                :
                  null
              }
              {/* THESE ARE THE TWO AFTER */}
              
              {parseInt(props.currentPage) < lastPage - 5 ? 
                  <div className='mt-2 mx-4'>
                    ...
                  </div>
                :
                  null
              }

              {parseInt(props.currentPage) === lastPage ?
                  null
                :
                  <button
                      type='button'
                      value={lastPage}
                      onClick={handleClick}
                      className='border-2 border-[#D5D8E4] px-4 py-2 h-[2.6rem] rounded-md mx-1'
                  >
                    {lastPage}
                  </button>
              }
            </div>
          </div>

          <button
              type='button'
              value={1}
              onClick={props.currentPage === lastPage ? null : handlePrevNext}
              className={props.currentPage === lastPage ? 'flex items-center px-4 py-2 h-[2.6rem] rounded-md bg-[#E0E0ED] text-[#76709F] cursor-default' : 'flex items-center px-3 py-2 rounded-md border-2 border-[#D5D8E4] text-[#5C5589]'}
          >
            Next
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
              <path d="M1.375 6H12.625" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.375 11.25L12.625 6L7.375 0.75" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
      </div>
  )
}
