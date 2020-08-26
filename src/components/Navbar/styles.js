import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// NavBar
export const NavbarContainer = styled.div`
    display: flex; 
    width: 100%; 
    justify-content: center;
    height: 100px;
    background-color: white;
`

export const NavInner = styled.div`
    display: flex; 
    flex-wrap: nowrap; 
    width: 100%; 
    max-width: 1200px; 
    justify-content: space-between; 
    align-items: center; 
`

export const NavbarLink = styled(NavLink)`
    padding: 0px 1vw; 
    color: black;
    text-decoration: none;
    font: normal normal normal 18px/1.4em helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
`

export const NavbarImage = styled.img`
    height: 2rem;
    padding: 0px 5px 0px 5px;
`
