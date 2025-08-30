import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = ({search,setsearch}) => {
  return (
     <form className='form' onSubmit={(e)=> e.preventDefault()}>
            <div className='form-input'>
            <label htmlFor='search'>Search Lesson</label>
            <input 
                type='text'
                id='search'
                placeholder='Search Lesson...'
                value={search}
                onChange={(e)=>(setsearch(e.target.value))}
            />
            <FaSearch className='search-logo'/>
            </div>
        </form>

  )
}

export default Search