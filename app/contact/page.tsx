import React from 'react'
import NaviagationBar from '../components/NaviagationBar'

const page = () => {
  return (
    <div className='md:container md:mx-auto h-screen bg-purple-600 bg-opacity-25 flex justify-center items-center'>
    <div className="navContainer absolute md:container md:mx-auto h-16 flex justify-center items-center bg-purple-600 bg-opacity-100 top-0 left-0 z-50">
      <NaviagationBar />
      </div>
    <h1 className='font-mono p-5  text-7xl font-semibold text-white text-center'>Contact Us</h1>
  </div>
  )
}

export default page
