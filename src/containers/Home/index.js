import React from 'react'
import { Font } from '../styles'
import About from '../../components/About'
import Featured from '../../components/Featured'
import Tagline from '../../components/Tagline'

const HomePage = () => (
  <Font>
    <Tagline />
    <About />
    <Featured />
  </Font>
)

export default HomePage
