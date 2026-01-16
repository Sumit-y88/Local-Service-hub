import React from 'react'
import { useNavigate } from "react-router-dom";

const RightNav = () => {
  const navigate = useNavigate();
  return (
    <div className='md:flex items-center justify-end hidden p-2'>
      <button onClick={()=>navigate("/search")} className='bg-blue-600 text-gray-200 px-5 py-3 hover:bg-blue-700 transition-colors duration-300 ease-in-out hover:text-white rounded-xl text-lg'>Find Services</button>
    </div>
  )
}

export default RightNav
