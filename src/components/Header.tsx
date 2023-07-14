import React, { useContext, useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import { auth } from '../firebase-config'
import { AuthContext } from '../context/AuthContext'
import AnonymousAvatar from "../assets/hacker.png"
import { Link } from 'react-router-dom'

function Header() {
    const [showNavBar, setShowNavBar] = useState(false)
    const user = auth.currentUser

  return (
    <header className="sticky z-50 shadow-md bg-white top-0 flex px-5 md:px-12 py-2 justify-between items-center">
        <Link to='/' className="text-lg font-semibold md:text-xl text-blue-700">TechScribe</Link>
        <input className='md:w-[300px] border text-sm p-1 w-[200px] md:p-2 px-4 rounded-full' type="text" name='search-box' placeholder='search TechScribe' />

        
        <div className="flex flex-col-reverse items-center gap-2">
          {/* <h4 className='font-normal text-sm'>Hello, {user?.displayName}</h4> */}
          <button onClick={()=> setShowNavBar(prev=> !prev)} className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full border-2 border-blue-600'>{ user?.photoURL ? (<img src={user.photoURL} alt="Profile pic" className='w-full rounded-full border border-white object-contain' />) : (<img src={AnonymousAvatar} alt="Anonymous Avatar" className='w-full rounded-full border border-white object-contain' />)}</button>
        </div>
        
        {  showNavBar? (<NavBar />) : null}
    </header>
  )
}

export default Header