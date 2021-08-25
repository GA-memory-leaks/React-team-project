import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { userChords, deleteChord } from './../../api/chord-auth'

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
    if (chords.length === 0) {
      chordJsx = 'No chords, go create some'
    } else {
      const ownedChords = chords.filter(chord => this.props.user._id === chord.owner)
      chordJsx = ownedChords.map(chord => (
        <li key={chord._id}>
          <h5>{chord.title}</h5>
          <p>{chord.body}</p>
          <Button onClick={() => this.destroy(chord._id)}>Delete Chord</Button>
          {/* <Link to={`/chords/${chord._id}`}>{chord.title}</Link> */}
        </li>
      ))
    }
    return (
      <>
        <h3>Welcome to your wall!</h3>
        {chordJsx}
      </>
    )
  }
}

export default withRouter(UserChords)
