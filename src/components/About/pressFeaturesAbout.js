import React from 'react'
import {
  InfoContainer, InfoInner, Feature, FeatureHeading, FeatureText, FeatureLink,
} from './styles'

const PressFeaturesAbout = () => (
  <InfoContainer style={{ backgroundColor: '#DAEDFF' }}>
    <InfoInner style={{ color: 'black', fontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif' }}>
      <p style={{ color: '#1468A8', fontSize: '48px' }}>Press Features</p>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%' }} id="column1">
          <Feature style={{ backgroundColor: '#51BAFC' }}>
            <FeatureHeading>UNICEF</FeatureHeading>
            <div>
              <FeatureText>Leading Minds Conference on Child and</FeatureText>
              <FeatureText>Adolescent Mental Health Concludes</FeatureText>
            </div>
            <FeatureLink href="https://www.unicef-irc.org/article/1938-leading-minds-2019-on-child-and-adolescent-mental-health-concludes.html">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#1468A8' }}>
            <FeatureHeading>Subconscious</FeatureHeading>
            <div>
              <FeatureText>Runaway & Creating a Community:</FeatureText>
              <FeatureText>An Interview with Satvik Sethi</FeatureText>
            </div>
            <FeatureLink href="https://subconscious.org/2019/03/runaway-creating-a-community-an-interview-with-satvik-sethi-ceo-of-runaway">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#51BAFC' }}>
            <FeatureHeading>Mental Health America</FeatureHeading>
            <div>
              <FeatureText>Beyond Awareness: Student-led Innovation in</FeatureText>
              <FeatureText>Campus Mental Health</FeatureText>
            </div>
            <FeatureLink href="https://www.mhanational.org/beyond-awareness-student-led-innovation-campus-mental-health">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#1468A8' }}>
            <FeatureHeading>Mashable</FeatureHeading>
            <div>
              <FeatureText>These 8 young mental health activists will teach</FeatureText>
              <FeatureText>and inspire you</FeatureText>
            </div>
            <FeatureLink href="https://mashable.com/2018/05/27/inspiring-youth-mental-health-activists-to-follow/">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#51BAFC' }}>
            <FeatureHeading>Mental Health America</FeatureHeading>
            <div>
              <FeatureText>Meet the 15 Students Changing Mental Health</FeatureText>
              <FeatureText>on Campus</FeatureText>
            </div>
            <FeatureLink href="https://www.mhanational.org/blog/meet-15-students-changing-mental-health-campus">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#1468A8' }}>
            <FeatureHeading>Study Breaks</FeatureHeading>
            <div>
              <FeatureText>Meet The Inventor Of Runaway,</FeatureText>
              <FeatureText>A Peer-To-Peer Mental Health Resource</FeatureText>
            </div>
            <FeatureLink href="https://studybreaks.com/students/satvik-sethi-runaway-mental-health-app/">View Article &gt;</FeatureLink>
          </Feature>
        </div>

        <div style={{ width: '50%' }} id="column2">
          <Feature style={{ backgroundColor: '#1B99E8' }}>
            <FeatureHeading>Vice i-D</FeatureHeading>
            <div>
              <FeatureText>Meet 4 Young Activists Revolutionizing</FeatureText>
              <FeatureText>Mental Health Services</FeatureText>
            </div>
            <FeatureLink href="https://i-d.vice.com/en_uk/article/d3ae3y/meet-4-young-activists-revolutionizing-mental-health-services">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#062134' }}>
            <FeatureHeading>Subconscious</FeatureHeading>
            <div>
              <FeatureText>Surrounding Yourself with Positivity:</FeatureText>
              <FeatureText>An Interview with Satvik Sethi</FeatureText>
            </div>
            <FeatureLink href="https://subconscious.org/2019/05/surrounding-yourself-with-positivity-an-interview-with-satvik-sethi-ceo-of-runaway/">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#1B99E8' }}>
            <FeatureHeading>World Health Organization</FeatureHeading>
            <div>
              <FeatureText>Coming of age:</FeatureText>
              <FeatureText>Adolescent Health</FeatureText>
            </div>
            <FeatureLink href="https://www.who.int/health-topics/adolescents/coming-of-age-adolescent-health">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#062134' }}>
            <FeatureHeading>Higher Education Today</FeatureHeading>
            <div>
              <FeatureText>When College Feels Like the End Rather Than</FeatureText>
              <FeatureText>the Beginning</FeatureText>
            </div>
            <FeatureLink href="https://www.higheredtoday.org/2018/10/24/college-feels-like-end-rather-beginning/">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#1B99E8' }}>
            <FeatureHeading>Binghamton University</FeatureHeading>
            <div>
              <FeatureText>Digital Technology for</FeatureText>
              <FeatureText>Social Good</FeatureText>
            </div>
            <FeatureLink href="https://www.binghamton.edu/news/story/807/digital-technology-for-social-good">View Article &gt;</FeatureLink>
          </Feature>
          <Feature style={{ backgroundColor: '#062134' }}>
            <FeatureHeading>PRISM, Pipe Dream</FeatureHeading>
            <div>
              <FeatureText>Voices of Binghamton,</FeatureText>
              <FeatureText>Interview with Satvik Sethi</FeatureText>
            </div>
            <FeatureLink href="https://www.bupipedream.com/prism/95329/voices-of-binghamton-5/">View Article &gt;</FeatureLink>
          </Feature>
        </div>
      </div>
    </InfoInner>
  </InfoContainer>
)

export default PressFeaturesAbout
