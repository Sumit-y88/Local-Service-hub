import React from 'react'
import TypeEffect from './TypeEffect'
import { useNavigate } from 'react-router-dom';

const LeftMainSection = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-start">
                Find Trusted Local Services Near You
            </h1>
            <TypeEffect/>
            <p className="text-gray-600 text-lg text-center md:text-start mb-5">
                Discover verified electricians, plumbers, and professionals
                in your area quickly and easily.
            </p>
            <button onClick={()=> navigate("/search")} className="bg-blue-600 text-white px-6 py-3 rounded-xl w-fit mb-3">
                Find Services Near Me
            </button>
            <div className="flex gap-4 text-sm text-gray-500">
                <span>✔ Verified Professionals</span>
                <span>✔ Nearby Services</span>
                <span>✔ Easy Booking</span>
            </div>

        </>
    )
}

export default LeftMainSection
