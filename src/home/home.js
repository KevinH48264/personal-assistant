import React from 'react'
import '../styles.css'
import Clock from 'react-live-clock'

const Home = () => (

  <div>
    <div className="time"><Clock format="h:mm:ss" ticking timezone="US/Eastern" /></div>
    <p className="welcome">Hello Kevin</p>
  </div>

)

export default Home
