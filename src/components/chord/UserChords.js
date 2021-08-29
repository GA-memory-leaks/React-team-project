import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { userChords, deleteChord } from './../../api/chord-auth'
import { soundBoardTitleStyles, chordsContainerStyles, chordStyles, titleStyles, bodyStyles } from './chordStyles'

class UserChords extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chords: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    userChords(user)
      .then(res => this.setState({ chords: res.data.chords }))
      .then(() => msgAlert({ heading: 'Index success', message: 'Here are your chords', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  // Destroy: a custom function that deletes a chord.
  destroy = (chordId) => {
    const { user, msgAlert } = this.props
    deleteChord(user, chordId)
      .then(() => {
        const newChords = Object.assign({}, this.state)
        newChords.chords = newChords.chords.filter(chord => chord._id !== chordId)
        this.setState({ chords: newChords.chords })
      })
      .then(() => msgAlert({ heading: 'Delete success', message: 'Chord deleted', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Delete failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  render () {
    const { chords } = this.state
    if (this.state.chords === null) {
      return 'Loading...'
    }
    let chordJsx
    const ownedChords = chords.filter(
      (chord) => this.props.user._id === chord.owner
    )
    if (ownedChords.length === 0) {
      chordJsx = 'You have not created any chords yet, go create some!'
    } else {
      chordJsx = ownedChords.map((chord) => (
        <Card key={chord._id} style={chordStyles}>
          <Card.Body>
            <Card.Title style={titleStyles}>{chord.title}</Card.Title>
            <Card.Text style={bodyStyles}>{chord.body}</Card.Text>
            <Button onClick={() => this.destroy(chord._id)} style={{ marginRight: '6px', fontFamily: 'Playfair Display' }}>Delete Chord</Button>
            <Button onClick={() => this.props.history.push(`/chords/${chord._id}/update`)} style={{ fontFamily: 'Playfair Display' }}>Update Chord</Button>
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        <div style={soundBoardTitleStyles}>
          <h1 style={{ margin: '0 auto' }}>Welcome, {this.props.user.name}!</h1>
        </div>
        <div style={chordsContainerStyles}>
          {chordJsx}
        </div>
      </>
    )
  }
}

export default withRouter(UserChords)
