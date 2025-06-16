import React, { useState } from 'react'
import assets from '../../assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : '');


  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      return;
    }
    navigate('/course-list/' + input);
  }

  return (
    <form onSubmit={onSearchHandler} className="flex items-center justify-between bg-white rounded-full shadow-md md:w-1/2 w-full h-14 px-4">
      <img
        src={assets.search_icon}
        alt="Search icon"
        className="md:w-auto w-6 h-6 px-2"
      />
      <input onChange={ e => setInput(e.target.value) }
        type="text"
        placeholder="Search for Courses"
        aria-label="Search for courses"
        className="w-full h-full outline-none text-gray-500/80 px-3"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 rounded-full text-white md:px-10 px-6 py-2 font-medium transition duration-200"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
