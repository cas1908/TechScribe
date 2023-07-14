import React, { useContext } from 'react'
import Header from './Header'
import { PostFeed } from './PostFeed'
import { AuthContext } from '../context/AuthContext'
import { Loading } from './Loading'

export const HomeComponent = ()=> {
  const {state, dispatch} = useContext(AuthContext)

  // setTimeout(()=> dispatch({type: "IS_LOADING", payload: false}), 2000)
  
  return (
    <>
    { state.isLoading? (<Loading />) : (<div>
        <Header />
        <PostFeed />
    </div>)}
    </>
  )
}
