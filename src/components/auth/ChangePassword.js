import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import { Form, Button, Card } from 'react-bootstrap'
import { formSoundBoardTitleStyles, formChordStyles, passwordBodyStyles } from './../chord/chordStyles'

class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onChangePassword = (event) => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    changePassword(this.state, user)
      .then(() =>
        msgAlert({
          heading: 'Change Password Success',
          message: changePasswordSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/my-sound-board'))
      .catch((error) => {
        this.setState({ oldPassword: '', newPassword: '' })
        msgAlert({
          heading: 'Change Password Failed with error: ' + error.message,
          message: changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <div style={formSoundBoardTitleStyles}>
            <h3 style={{ margin: '0 auto' }}>Change Password</h3>
          </div>
          <Card style={formChordStyles}>
            <Form onSubmit={this.onChangePassword}>
              <Form.Group controlId='oldPassword'>
                <Form.Label style={{ fontFamily: 'Playfair Display' }}>Old password</Form.Label>
                <Form.Control
                  required
                  name='oldPassword'
                  value={oldPassword}
                  type='password'
                  onChange={this.handleChange}
                  style={passwordBodyStyles}
                />
              </Form.Group>
              <Form.Group controlId='newPassword'>
                <Form.Label style={{ fontFamily: 'Playfair Display' }}>New Password</Form.Label>
                <Form.Control
                  required
                  name='newPassword'
                  value={newPassword}
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

export default withRouter(ChangePassword)
