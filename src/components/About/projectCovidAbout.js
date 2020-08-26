import React from 'react'
import { InfoContainer, InfoInner, Text } from './styles'

const ProjectCovidAbout = () => (
  <InfoContainer style={{ backgroundColor: '#EAFFE6' }}>
    <InfoInner style={{ color: 'black', fontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '50px',
      }}
      >
        <img style={{ paddingRight: '20px', width: '130px' }} src="./pc_logo.webp" alt="" />
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        }}
        >
          <p style={{ fontSize: '48px', margin: '0px' }}>Project Covid</p>
          <p style={{ fontSize: '28px', margin: '0px' }}>Founder, Strategy & Branding Lead</p>
        </div>
      </div>
      <Text style={{
        fontSize: '24px', fontWeight: 'bold', paddingTop: '50px', margin: '0px',
      }}
      >
        All the information and resources for coronavirus (COVID-19), easily accessible in one place.
      </Text>
      <Text style={{ fontSize: '24px' }}>
        Put together by a team of 20+ students from around the United States, Project Covid provides a plethora of information and resources to help you prepare for and navigate the global pandemic. Our iOS and Android apps come loaded with live outbreak trackers, testing center information, breaking news stories from verified sources, live travel information, along with verified information on best practices, knowledge about the virus, educational toolkits, student resources, and crisis contact information.
        <br />
        <br />
        Co-Founders Satvik Sethi and Will Hunter started this project with the hope that we are able to help a lot of people around the world in finding the information and resources they need to protect themselves and their loved ones from the outbreak.
      </Text>
      <Text style={{ fontSize: '24px', fontWeight: 'bold', margin: '0px' }}>There are two main reasons why we felt the need to create this app:</Text>
      <ol style={{ fontSize: '24px' }}>
        <li>
          <b>To help people find access to information and resources:</b>
          <br />
          Today, there are several online and offline sources available to everyone to find information relating to the COVID-19 pandemic. Unfortunately, through research and personal experience, we concluded that these sources are scattered and often difficult to comprehend for the average person. We wanted to create an extensive knowledge base of verified information and resources relating to the COVID-19 outbreak presented in an appealing and user-friendly manner.
        </li>
        <li>
          <b>To prevent the spread of misinformation and “fake news”:</b>
          <br />
          While social media and instant communication have become a staple of interpersonal interaction, they have unfortunately fueled an increase in the dispersal of misinformation. Misinformation can be extremely harmful, especially with sensitive topics like COVID-19. By only utilizing trusted sources, we want to ensure that all aggregated knowledge and resources we share with our users are credible.
        </li>
      </ol>

    </InfoInner>
  </InfoContainer>
)

export default ProjectCovidAbout
