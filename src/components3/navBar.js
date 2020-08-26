import React from 'react'
import { Link } from 'react-router-dom'
import { FancyButton, FancyBar } from './styles'

const NavBar = () => (
  <nav>
    <FancyBar>
      <Link to="/">
        <FancyButton type="button">
        Home
        </FancyButton>
      </Link>
      <Link to="/todos">
        <FancyButton type="button">
        Todos
        </FancyButton>
      </Link>
    </FancyBar>
  </nav>
)

export default NavBar
