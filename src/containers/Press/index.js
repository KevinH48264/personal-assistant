import React from 'react'
import { Font } from '../styles'
import PressFeaturesAbout from '../../components/About/pressFeaturesAbout'
import VideoFeaturesAbout from '../../components/About/videoFeaturesAbout'
import Featured from '../../components/Featured'
import PressTagline from '../../components/Tagline/pressTagline'

const PressPage = () => (
  <Font>
    <PressTagline />
    <PressFeaturesAbout />
    <VideoFeaturesAbout />
    <Featured />
  </Font>
)

export default PressPage
