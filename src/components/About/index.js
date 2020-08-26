import React from 'react'
import { InfoContainer, InfoInner } from './styles'

const About = () => (
  <InfoContainer>
    <InfoInner style={{ fontSize: '18px', fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', lineHeight: '2em' }}>
      <p style={{ fontSize: '54px' }}>About Me</p>
      <p style={{ fontSize: '24px' }}>I’m a highly motivated and ambitious 22 year old with an undying hunger for learning. My hobbies and interests include public speaking, social activism, strategy consulting, and UI/UX design. I'm passionate about mental health, education, healthcare systems, emerging technology, and global cultures. </p>
      <p style={{ fontSize: '24px' }}>
        I am the recipient of Mental Health America's mPower Award 2020, and feature on the
        {' '}
        <b>25 Under 25 Social Entrepreneurs</b>
        {' '}
        List by Impaction and Culture Media Co.. I have been recognized as
        {' '}
        <b>1 of 8 Inspiring Mental Health Youth Activists</b>
        {' '}
        by Mashable, and
        {' '}
        <b>1 of 15 Students Changing Collegiate Mental Health</b>
        {' '}
        by Mental Health America for the impact I've created through my passionate advocacy. I've also been a finalist for the JED Student Voice of Mental Health Award in 2019, UNESCO Youth Citizen Entrepreneurship Competition 2019, and the Global Student Entrepreneur Awards 2018. I've had the opportunity to give talks, host events, and be quoted and published in media outlets including Vice, Arianna Huffington’s Thrive Global, and Times of India, for my entrepreneurial and social endeavors.
      </p>
      <p style={{ fontSize: '24px' }}>I’m currently making the world happier as the Founder & Chief Executive Officer at Runaway, a social entrepreneurial venture that promotes mental health awareness. Runaway has been featured by several international organizations including the World Health Organization, UNICEF, Mashable, and Mental Health America.</p>
    </InfoInner>
  </InfoContainer>
)

export default About
