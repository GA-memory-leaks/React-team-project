import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

import { Form, Button, Card } from 'react-bootstrap'
import { formSoundBoardTitleStyles, formChordStyles, passwordBodyStyles } from './../chord/chordStyles'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignIn = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signIn(this.state)
    .then((res) => setUser(res.data.user))
    .then(() =>
      msgAlert({
        heading: 'Sign In Success',
        message: signInSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/my-sound-board'))
    .catch((error) => {
      this.setState({ email: '', password: '' })
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { email, password } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <div style={formSoundBoardTitleStyles}>
          <h3 style={{ margin: '0 auto' }}>Sign In</h3>
        </div>
        <Card style={formChordStyles}>
          <Form onSubmit={this.onSignIn}>
            <Form.Group controlId='email'>
              <Form.Label style={{ fontFamily: 'Playfair Display' }}>Email address</Form.Label>
              <Form.Control
                required
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                style={passwordBodyStyles}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label style={{ fontFamily: 'Playfair Display' }}>Password</Form.Label>
              <Form.Control
                required
                name='password'
                value={password}
                type='password'
                onChange={this.handleChange}
                style={passwordBodyStyles}
              />
            </Form.Group>
            <Button variant='primary' type='submit' style={{ marginTop: '5px', fontFamily: 'Playfair Display' }}>Submit</Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}
}

export default withRouter(SignIn)
