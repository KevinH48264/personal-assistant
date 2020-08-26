import React from 'react'
import {
  NavbarLink, NavInner, NavbarContainer, NavbarImage,
} from './styles'

const NavBar = () => (
  <NavbarContainer>
    <NavInner>
      <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/">
        <p style={{ fontSize: '36px ', fontWeight: 'bold', fontFamily: 'Helvetica' }}>SATVIK SETHI</p>
      </NavbarLink>
      <div
        className="nav"
        style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} exact to="/">Home</NavbarLink>
        <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} to="/ventures">Ventures</NavbarLink>
        <NavbarLink activeStyle={{ color: '#95C6EC' }} style={{ color: 'black', textDecoration: 'none' }} to="/press">Press</NavbarLink>
        {/* <NavbarLink style={{ color: 'black', textDecoration: 'none' }} to="/contact">Contact</NavbarLink> */}
        <a href="https://www.linkedin.com/in/satviksethi/" rel="noopener noreferrer" target="_blank">
          <NavbarImage style={{ paddingLeft: '1vw' }} src="./linkedin.webp" alt="" />
        </a>
        <a href="https://www.instagram.com/satviksethi/" rel="noopener noreferrer" target="_blank">
          <NavbarImage src="./insta.webp" alt="" />
        </a>
        <a href="https://twitter.com/satsethi14" rel="noopener noreferrer" target="_blank">
          <NavbarImage src="./twitter.webp" alt="" />
        </a>
        <a href="mailto:satvik@runawayapp.com" rel="noopener noreferrer" target="_blank">
          <NavbarImage src="./mailLogo.jpg" alt="" />
        </a>
      </div>
    </NavInner>
  </NavbarContainer>
)

export default NavBar
