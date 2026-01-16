import React from 'react'
import SearchNav from '../componentsSearch/SearchNav'
import SearchBox from '../componentsSearch/SearchBox'

const Search = () => {
  return (
    <>
    <SearchNav/>
    <div className='px-4 w-full h-full relative top-30'>
      <SearchBox/>
    </div>
    </>
  )
}

export default Search
