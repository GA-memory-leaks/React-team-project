import React from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import { Button, Card } from 'react-bootstrap'

import { createChord } from './../../api/chord-auth'
import { formSoundBoardTitleStyles, formChordStyles, formTitleStyles, formBodyStyles } from './chordStyles'

class CreateChord extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chord: {
        title: 'Write your chord title here!',
        body: 'Add a body!'
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
        <div style={formSoundBoardTitleStyles}>
          <h1 style={{ margin: '0 auto' }}>Create a chord for your sound board!</h1>
        </div>
        <Card style={formChordStyles}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title' style={{ marginTop: '9px' }}>
              <Form.Control
                required
                name='title'
                value={title}
                onChange={this.handleChange}
                style={formTitleStyles}
              />
            </Form.Group>
            <Form.Group controlId='body' style={{ marginTop: '6px', marginBottom: '5px' }}>
              {/* <Form.Label>Body</Form.Label> */}
              <Form.Control
                required
                name='body'
                value={body}
                onChange={this.handleChange}
                style={formBodyStyles}
              />
            </Form.Group>
            <div style={{ marginLeft: '12px' }}>
              <Button type='submit' style={{ marginTop: '11px', fontFamily: 'Playfair Display' }}>Create Chord</Button>
            </div>
          </Form>
        </Card>
      </>
    )
  }
}

export default withRouter(CreateChord)
