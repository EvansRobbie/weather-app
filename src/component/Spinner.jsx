import React from 'react'
import spinner from '../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='flex items-center h-screen w-full justify-center '>
        <img className='w-[50px] m-auto block' src={spinner} alt="loadin.." />
    </div>
  )
}

export default Spinner