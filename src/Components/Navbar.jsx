import React from 'react'

const Navbar = () => {
  return (
    <div >
      <nav >
        <ul className='flex'>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact us</li>
        </ul>
      </nav>
      <div>
        <h1 className='text-2xl'>About Us</h1>
        <div className='text-lg'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt.</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar

