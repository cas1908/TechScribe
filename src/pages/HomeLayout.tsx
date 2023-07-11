import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Home } from '../components/Home'
import { HomeComponent } from '../components/HomeComponent'

function HomeLayout() {
  const [display, setDisplay] = useState(false)
    const {state} = useContext(AuthContext)

  useEffect(()=>{
    if (state.user.isAuth === false) {
      setDisplay(false)
    } else if(state.user.isAuth == null) {
      setDisplay(false)
    } else setDisplay(true)
    console.log(display)
  }, [display])
  return ( 
    <>
    {!display ? (<Home/>) : (<HomeComponent />)}
    </>
  )
}

export default HomeLayout