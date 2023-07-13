import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, initialState } from '../context/AuthContext'
import { Home } from '../components/Home'
import { HomeComponent } from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'

function HomeLayout() {
  const [display, setDisplay] = useState(false)
    const {state} = useContext(AuthContext)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          setDisplay(true)
          
      } else setDisplay(false)
    })
  unsubscribe()
  }, [display])
  return ( 
    <>
    {!display ? (<Home/>) : (<HomeComponent />)}
    </>
  )
}

export default HomeLayout