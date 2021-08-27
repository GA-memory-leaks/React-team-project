import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Logo from './../../images/Virtuoso-logo.png'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/my-wall' className='nav-link'>My Sound Board</NavLink>
    <NavLink to='/create-chord' className='nav-link'>Create Chord</NavLink>
    <NavLink to='/users/' className='nav-link'>Find Other Musicians</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant='dark' expand='md' style={{ background: '#29A8E0' }}>
    <Navbar.Brand>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener noreferrer'>
        <img style={{ height: '70px', width: 'auto' }} src={Logo} />
      </a>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
