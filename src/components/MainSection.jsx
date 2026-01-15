import React from 'react'
import LeftMainSection from './LeftMainSection'
import RightSectImg from './RightSectImg'

const MainSection = () => {
  return (
    <main id='home' className='flex flex-col md:flex-row items-center bg-blue-50 py-15 scroll-mt-10 '>
      <div className="leftSection md:w-1/2 w-full h-fit flex flex-col p-10 justify-center items-center md:items-start">
        <LeftMainSection/>
      </div>
      <div className="RightSection md:w-1/2 w-full h-fit ">
      <RightSectImg/>
      </div>
    </main>
  )
}

export default MainSection
