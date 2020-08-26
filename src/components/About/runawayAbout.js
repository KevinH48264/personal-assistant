import React from 'react'
import { InfoContainer, InfoInner, Text } from './styles'

const RunawayAbout = () => (
  <InfoContainer style={{ backgroundColor: '#FFE8FD' }}>
    <InfoInner style={{ color: 'black', fontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '50px',
      }}
      >
        <img style={{ paddingRight: '20px', width: '150px' }} src="./runaway_logo.webp" alt="" />
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        }}
        >
          <p style={{ fontSize: '48px', margin: '0px' }}>RUNAWAY</p>
          <p style={{ fontSize: '28px', margin: '0px' }}>Founder and Chief Executive Officer</p>
        </div>
      </div>
      <Text style={{
        fontSize: '24px', fontWeight: 'bold', paddingTop: '50px', margin: '0px',
      }}
      >
        Runaway is a social venture that aims to promote mental health awareness and help those in need of emotional support.​ Our vision is to make the world happier.
      </Text>
      <Text style={{ fontSize: '24px' }}>
        Runaway is a multi-faceted operation – we are constantly exploring and adding services, tools, resources, and educational outlets that provide people with access to mental health help, break down the stigma that surrounds the topic, and make people feel more comfortable in their everyday life.
        <br />
        <br />
        Currently we are developing a mobile app that will allow users to come online and talk to our student volunteers 1-on-1 about their mental health problems to peers closest to their own age and experiences. We also host events on college campuses around the United States and will soon begin hosting events around the world. Apart from this we have conducted Mental Health research with Mental Health America, have worked on policy reforms and implementation with UNICEF and local governments, and recently discussed and shed light on adolescent mental health at the first ever Leading Minds conference hosted by UNICEF and WHO. Through our social media platforms, we provide our followers with daily positivity, motivation, and survival tips for their mental health. We are also adding partnerships to bring in more resources and content – last year we gave out 100 free 1 year subscriptions to our followers for a partner virtual therapy platform that allows you to book and talk with licensed therapists.
        <br />
        <br />
        Finally, I've used Runaway to constantly establish Mental Health thought leadership by participating at events around the world as a speaker/panelist sharing my work and experiences, and will soon be launching a mental health podcast called ‘Happier World’ podcast that will bring renowned speakers and industry leaders to discuss the role that their work/industry (politics, media, sports, policy, academics, etc.) plays on mental health.
        <br />
        <br />
        Definitely not everyone today can find and afford mental health care, but we believe that with more organizations like Runaway emerging every day that empower people to take care of their mental health, things are going to get better and mental health will get the importance it deserves. We will not stop till we make the world happier!
      </Text>
    </InfoInner>
  </InfoContainer>
)

export default RunawayAbout
