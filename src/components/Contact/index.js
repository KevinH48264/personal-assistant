import React, { useState } from 'react'
import {
  InfoContainer, InfoInner, ContactInput, ContactInputRow, ContactRowContainer, ContactFormButton,
} from './styles'

const Contact = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [desc, setDesc] = useState('')
  return (
    <InfoContainer>
      <InfoInner style={{
        height: '800px', fontSize: '18px', fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', lineHeight: '2em',
      }}
      >
        <p style={{
          marginTop: '250px', marginBottom: '20px', fontSize: '48px', color: 'darkblue',
        }}
        >
          Contact Me
        </p>
        <ContactRowContainer>
          <ContactInputRow>
            <ContactInput type="text" value={fname} onChange={e => setFname(e.target.value)} placeholder="First Name" required />
            <ContactInput type="text" value={lname} onChange={e => setLname(e.target.value)} placeholder="Last Name" required />
          </ContactInputRow>
          <ContactInputRow>
            <ContactInput type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <ContactInput type="text" value={org} onChange={e => setOrg(e.target.value)} placeholder="Organization" required />
          </ContactInputRow>
          <ContactInputRow>
            <textarea
              style={{
                width: '100%',
                height: '100px',
                color: 'black',
                borderColor: 'darkblue',
                borderStyle: 'solid',
                padding: '25px',
                fontSize: '18px',
                fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif',
              }}
              className="scrollabletextbox"
              value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder="What would you like to talk to me about?"
              required
            />
          </ContactInputRow>
        </ContactRowContainer>
        <ContactInputRow style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ContactFormButton email="1kevin.huang@gmail.com" type="submit">Submit</ContactFormButton>
        </ContactInputRow>
      </InfoInner>
    </InfoContainer>
  )
}

export default Contact
