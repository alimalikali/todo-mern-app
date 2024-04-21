import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white'>
      <div className=' md:px-14 px-4 py-5 flex justify-between md:flex-row flex-col'>
        <div className='text-black font-bold text-5xl'>
          Todo App
        </div>
        <div className='text-2xl flex space-x-4'>
        <button className='bg-blactext-black rounded-xl p-3 text-2xl font-bold text-black' onClick={()=>{}}>Login</button>

          <button className='bg-blactext-black rounded-xl p-3 text-2xl font-bold text-black' onClick={()=>{}}>Sign Up</button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
