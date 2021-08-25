import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { updateChord } from './../../api/chord-auth'

class UpdateChord extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chord: {
        title: '',
        body: ''
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

  handleSubmit = chordId => {
    event.preventDefault()
    const { user, msgAlert, history } = this.props
    updateChord(user, chordId, this.state.chord)
      .then(res => history.push('/my-wall'))
      .then(() => msgAlert({ heading: 'Chord Updated!', message: 'Check out your wall!', variant: 'success' }))
      .catch(error => {
        msgAlert({ heading: 'Chord update failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    const { title, body } = this.state
    return (
      <>
        <h3>Update your chord!</h3>
        <Form onSubmit={() => this.handleSubmit(this.props.match.params.id)}>
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
          <Button type='submit'>Update Chord</Button>
        </Form>
      </>
    )
  }
}

export default withRouter(UpdateChord)
