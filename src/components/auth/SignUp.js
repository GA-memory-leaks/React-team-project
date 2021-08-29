import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import { Form, Button, Card } from 'react-bootstrap'
import { formSoundBoardTitleStyles, formChordStyles, passwordBodyStyles } from './../chord/chordStyles'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onSignUp = (event) => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: 'Sign Up Success',
          message: signUpSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/my-sound-board'))
      .catch((error) => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, email, password, passwordConfirmation } = this.state

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <div style={formSoundBoardTitleStyles}>
            <h3 style={{ margin: '0 auto' }}>Sign In</h3>
          </div>
          <Card style={formChordStyles}>
            <Form onSubmit={this.onSignUp}>
              <Form.Group controlId='name'>
                <Form.Label style={{ fontFamily: 'Playfair Display' }}>Your Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  style={passwordBodyStyles}
                />
              </Form.Group>
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
              <Form.Group controlId='passwordConfirmation'>
                <Form.Label style={{ fontFamily: 'Playfair Display' }}>Password Confirmation</Form.Label>
                <Form.Control
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
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

export default withRouter(SignUp)
