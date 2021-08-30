import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Card } from 'react-bootstrap'
import { updateChord, oneChord } from './../../api/chord-auth'
import { formSoundBoardTitleStyles, formChordStyles, formTitleStyles, formBodyStyles } from './chordStyles'

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
      .then(() => this.props.msgAlert({ heading: 'Success', message: 'Make your changes then press the Update Chord button.', variant: 'success' }))
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
      .then(res => history.push('/my-sound-board'))
      .catch(error => {
        msgAlert({ heading: 'Chord update failed', message: 'Something went wrong: ' + error.message, variant: 'danger' })
      })
  }

  render () {
    const { title, body } = this.state.chord
    return (
      <>
        <div style={formSoundBoardTitleStyles}>
          <h1 style={{ margin: '0 auto' }}>Update Your Chord!</h1>
        </div>
        <Card style={formChordStyles}>
          <Form onSubmit={() => this.handleSubmit(this.props.match.params.id)}>
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
              <Form.Control
                required
                name='body'
                value={body}
                onChange={this.handleChange}
                style={formBodyStyles}
              />
            </Form.Group>
            <div style={{ marginLeft: '12px' }}>
              <Button type='submit' style={{ marginTop: '11px', fontFamily: 'Playfair Display' }}>Update Chord</Button>
            </div>
          </Form>
        </Card>
      </>
    )
  }
}

export default withRouter(UpdateChord)
