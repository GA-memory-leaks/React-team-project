import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { updateChord, oneChord } from './../../api/chord-auth'

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

  componentDidMount () {
    oneChord(this.props.user, this.props.match.params.id)
      .then(response => this.setState({
        chord: {
          title: response.data.chord.title,
          body: response.data.chord.body
        }
      }))
      .catch(error => {
        this.props.msgAlert({ heading: 'Failed to fetch chord', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
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
    const { title, body } = this.state.chord
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
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='body'>
            <Form.Label>Body</Form.Label>
            <Form.Control
              required
              name='body'
              value={body}
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
