import React from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createChord } from './../../api/chord-auth'

class CreateChord extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chord: {
        title: '',
        body: ''
      },
      message: ''
    }
  }

  handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    const chordCopy = Object.assign({}, this.state.chord)
    chordCopy[inputName] = inputValue
    this.setState({
      chord: chordCopy,
      message: ''
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, msgAlert, history } = this.props
    createChord(user, this.state.chord)
      .then(res => history.push('/my-wall'))
      .then(() => msgAlert({ heading: 'Chord Created!', message: 'Check out your wall!', variant: 'success' }))
      .catch(error => {
        msgAlert({ heading: 'Chord creation failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    const { title, body } = this.state
    return (
      <>
        <h3>In Chord Create. Hello!</h3>
        <p>{this.state.message}</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Chord Title</Form.Label>
            <Form.Control
              required
              name='title'
              value={title}
              placeholder='Chord Title'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='body'>
            <Form.Label>Body</Form.Label>
            <Form.Control
              required
              name='body'
              value={body}
              placeholder='Chord Body'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type='submit' style={{ marginTop: '5px' }}>Create Chord</Button>
        </Form>
      </>
    )
  }
}

export default withRouter(CreateChord)
