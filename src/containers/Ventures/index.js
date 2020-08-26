import React from 'react'
import { Font } from '../styles'
import ProjectCovidAbout from '../../components/About/projectCovidAbout'
import RunawayAbout from '../../components/About/runawayAbout'
import Featured from '../../components/Featured'
import VenturesTagline from '../../components/Tagline/venturesTagline'
import KaizenAbout from '../../components/About/kaizenAbout'

const VenturesPage = () => (
  <Font>
    <VenturesTagline />
    <RunawayAbout />
    <KaizenAbout />
    <ProjectCovidAbout />
    <Featured />
  </Font>
)

export default VenturesPage
