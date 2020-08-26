import React from 'react'
import {
  InfoContainer, InfoInner, Image, FeaturesContainer, Feature,
} from './styles'

const Featured = () => (
  <InfoContainer>
    <InfoInner style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif' }}>
      <p style={{ fontSize: '48px', color: '#95C6EC' }}>Featured By</p>
      <FeaturesContainer>
        <Feature>
          <Image src="./mha.png" alt="" />
          <Image style={{ width: '200px' }} src="./vice.png" alt="" />
        </Feature>
        <Feature>
          <Image src="./ttoi.jpg" alt="" />
          <Image style={{ paddingBottom: '10px' }} src="./mashable.png" alt="" />
        </Feature>
        <Feature>
          <Image src="./who.png" alt="" />
          <Image style={{ paddingLeft: '30px', paddingBottom: '10px' }} src="./unicef.png" alt="" />
        </Feature>
      </FeaturesContainer>
    </InfoInner>
  </InfoContainer>
)

export default Featured
