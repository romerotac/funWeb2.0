import React, { Component, useEffect, useRef, useState } from 'react'
import axios from 'axios';

export default function useAuth(code) {
  const [accessToken,setAccessToken] = useState();
  const [refreshToken,setRefreshToken] = useState();
  const [expiresIn,setExpiresIn] = useState();
  


  useEffect(() => {
    

    axios
    .post('https://myfunweb.herokuapp.com/login', {code,})
    .then(res => {
        setAccessToken(res.data.accessToken)
        setExpiresIn(res.data.expiresIn)
        setRefreshToken(res.data.refreshToken)
        window.history.pushState({},null,"/")
    })
    .catch( () => {
      window.location='/'
    })
  },[code])
  
  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {

    
    axios
    .post('https://myfunweb.herokuapp.com/refresh', {
        refreshToken,
    })
    .then(res => {
        setAccessToken(res.data.accessToken)
        setExpiresIn(res.data.expiresIn)

    })
    .catch(()=> {
      window.location='/'
    })

    return () => clearInterval(interval)
  }, (expiresIn - 60) * 1000)

  }, [refreshToken,expiresIn])

  return accessToken
}


