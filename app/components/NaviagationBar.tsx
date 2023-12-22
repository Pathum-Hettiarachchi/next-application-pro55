import Link from 'next/link'
import React from 'react'

const NaviagationBar = () => {
  return (
    <div className=''>
    <nav>
      <Link href="/#" className='navlink text-xl text-white font-semibold p-3 hover:text-gray-300'>Home</Link>
      <Link href="/service" className='navlink text-base text-white font-semibold p-3 hover:text-gray-200'>Services</Link>
      <Link href="/about" className='navlink text-base text-white font-semibold p-3 hover:text-gray-200'>About Us</Link>
      <Link href="/contact" className='navlink text-base text-white font-semibold p-3 hover:text-gray-200'>Contact Us</Link>
     </nav>
    </div>
  )
}

export default NaviagationBar
