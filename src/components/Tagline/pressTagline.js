import React from 'react'
import { TagContainer, TagInner } from './styles'

const PressTagline = () => (
  <TagContainer>
    <TagInner>
      <p style={{ color: '#95C6EC', margin: '0px', padding: '0px' }}>Media Features,</p>
      <p style={{ color: '#1B99E8', margin: '0px', padding: '0px' }}>Public Recognition,</p>
      <p style={{
        color: '#1468A8', margin: '0px', paddingTop: '0px', fontWeight: 'bold',
      }}
      >
        Making the world happier.
      </p>
    </TagInner>
  </TagContainer>
)

export default PressTagline
