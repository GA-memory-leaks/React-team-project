import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { userChords } from './../../api/chord-auth'

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
  destroy = () => {
    alert('Destroyed')
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
          <Button onClick = {this.destroy}>Delete Chord</Button>
          {/* <Link to={`/chords/${chord._id}`}>{chord.title}</Link> */}
        </li>
      ))
    }
    return (
      <>
        <h3>In User Chords. Hello!</h3>
        {chordJsx}
      </>
    )
  }
}

export default withRouter(UserChords)
