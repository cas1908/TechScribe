import React from 'react'
import loader from "../assets/loader.gif"

export const Loading =()=> {
  return (
    <div className='flex justify-center items-center min-h-[100vh] '>
        <img src={loader} alt="loading animation" />
    </div>
  )
}
