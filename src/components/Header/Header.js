import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Logo from './../../images/sedg-Virtuoso.png'

const authenticatedOptions = (
  <Fragment>
    <div style={{ display: 'inline-flex' }}>
      <NavLink to='/my-sound-board' className='nav-link' style={{ fontFamily: 'Playfair Display' }}>My Sound Board</NavLink>
      <NavLink to='/create-chord' className='nav-link' style={{ fontFamily: 'Playfair Display' }}>Create Chord</NavLink>
      <NavLink to='/users/' className='nav-link' style={{ fontFamily: 'Playfair Display' }}>Find Other Musicians</NavLink>
    </div>
    <div style={{ display: 'inline-flex', marginRight: '22px' }}>
      <NavLink to='/change-password' className='nav-link' style={{ justifyContent: 'flex-end', fontFamily: 'Playfair Display' }}>Change Password</NavLink>
      <NavLink to='/sign-out' className='nav-link' style={{ justifyContent: 'flex-end', fontFamily: 'Playfair Display' }}>Sign Out</NavLink>
    </div>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <div style={{ display: 'inline-flex' }}>
      <NavLink to='/sign-up' className='nav-link' style={{ fontFamily: 'Playfair Display' }}>Sign Up</NavLink>
      <NavLink to='/sign-in' className='nav-link' style={{ fontFamily: 'Playfair Display' }}>Sign In</NavLink>
    </div>
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
      <Nav className='ml-auto' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
