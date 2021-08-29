import React from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import { Button, Card } from 'react-bootstrap'

import { createChord } from './../../api/chord-auth'
import { soundBoardTitleStyles, chordStyles, titleStyles } from './chordStyles'

class CreateChord extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chord: {
        title: 'Chord Title',
        body: 'Chord Body'
      }
    }
  }

  handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    const chordCopy = Object.assign({}, this.state.chord)
    chordCopy[inputName] = inputValue
    this.setState({
      chord: chordCopy
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, msgAlert, history } = this.props
    createChord(user, this.state.chord)
      .then(res => history.push('/my-sound-board'))
      .catch(error => {
        msgAlert({ heading: 'Chord creation failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    const { title, body } = this.state.chord
    return (
      <>
        <div style={soundBoardTitleStyles}>
          <h1 style={{ margin: '0 auto' }}>Create a chord for your sound board!</h1>
        </div>
        <Card style={chordStyles}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Control
                required
                name='title'
                value={title}
                onChange={this.handleChange}
                style={titleStyles}
              />
            </Form.Group>
            <Form.Group controlId='body'>
              {/* <Form.Label>Body</Form.Label> */}
              <Form.Control
                required
                name='body'
                value={body}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button type='submit' style={{ marginTop: '5px' }}>Create Chord</Button>
          </Form>
        </Card>
      </>
    )
  }
}

export default withRouter(CreateChord)
