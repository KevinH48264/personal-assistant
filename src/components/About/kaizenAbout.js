import React from 'react'
import { InfoContainer, InfoInner, Text } from './styles'

const KaizenAbout = () => (
  <InfoContainer style={{ backgroundColor: '#FFFFFF' }}>
    <InfoInner style={{ color: 'black', fontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '50px',
      }}
      >
        <img style={{ marginRight: '20px', width: '150px' }} src="./kaizenSquare.jpg" alt="" />
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        }}
        >
          <p style={{ fontSize: '48px', margin: '0px' }}>KAIZEN LEARNING</p>
          <p style={{ fontSize: '28px', margin: '0px' }}>Founder and Chief Executive Officer</p>
        </div>
      </div>
      <Text style={{
        fontSize: '24px', fontWeight: 'bold', paddingTop: '50px', margin: '0px',
      }}
      >
        Kaizen Learning is a social venture in the education space that aims to make learning free, accessible, and easy.
      </Text>
      <Text style={{ fontSize: '24px' }}>
        Most families across the world do not have the financial resources to afford private educators and a high quality education, and are often left wondering how their child will succeed in an environment that often ignores their needs.
        <br />
        <br />
        As someone with a deep passion for education accessibility, I took it upon myself to find a solution - ‘Kaizen Learning’. 'Kaizen' is Japanese for continuous improvement, which is the goal with learning. Kaizen Learning aims to ensure that students across the world can continue learning and working on themselves for free, with or without a school to support them. We have a team of volunteers with experience in tutoring, babysitting, special education, ESL/foreign language, public speaking, mental health, musical instruments, Zumba, arts & crafts, etc.
        <br />
        <br />
        Our sessions are conducted virtually via zoom and ratios are maintained at 3-5 students per volunteer educator. Despite being virtual-only, we ensure that sessions are interactive and fun for students, and foster a safe learning environment for all!
      </Text>
    </InfoInner>
  </InfoContainer>
)

export default KaizenAbout
