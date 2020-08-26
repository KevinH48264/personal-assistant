import React from 'react'
import { InfoContainer, InfoInner } from './styles'

const VideoFeaturesAbout = () => (
  <InfoContainer style={{ backgroundColor: 'lightblue' }}>
    <InfoInner style={{ color: 'black', fontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif' }}>
      <p style={{ color: 'white', fontSize: '48px' }}>Video Features</p>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%' }} id="column1">
          <iframe title="VideoFeature1" width="560" height="315" src="https://www.youtube.com/embed/Xddw4WF9Klk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <iframe style={{ marginTop: '40px' }} title="VideoFeature2" width="560" height="315" src="https://www.youtube.com/embed/vkQjacyYodM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div style={{ width: '50%' }} id="column2">
          <iframe title="VideoFeature3" width="560" height="315" src="https://www.youtube.com/embed/aiKG6602lzs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <iframe style={{ marginTop: '40px' }} title="VideoFeature4" width="560" height="315" src="https://www.youtube.com/embed/nySQqAEHchg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </InfoInner>
  </InfoContainer>
)

export default VideoFeaturesAbout
