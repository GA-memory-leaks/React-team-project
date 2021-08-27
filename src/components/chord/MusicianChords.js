import React from 'react'
import { withRouter } from 'react-router-dom'
import { userChords } from './../../api/chord-auth'

class MusicianChords extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chords: null,
      musician: ''
    }
  }

  componentDidMount () {
    const { user, msgAlert, location } = this.props
    // const location = useLocation()
    // const { musician } = location.state
    userChords(user)
      .then(res => {
        this.setState({
          chords: res.data.chords,
          musician: location.musician
          // musician: musician
        })
      })
      .then(() => msgAlert({ heading: 'Index success', message: 'Here are their chords', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  render () {
    let chordJsx
    const { chords, musician } = this.state
    if (this.state.chords === null) {
      return 'Loading...'
    } else if (chords.length === 0) {
      chordJsx = `${musician} has not posted any chords`
    } else {
      const musicianChords = chords.filter(chord => this.props.match.params.id === chord.owner)
      chordJsx = musicianChords.map(chord => (
        <li key={chord._id}>
          <h5>{chord.title}</h5>
          <p>{chord.body}</p>
        </li>
      ))
    }
    return (
      <>
        <h3>This Sound Board belongs to { musician }</h3>
        {chordJsx}
      </>
    )
  }
}

export default withRouter(MusicianChords)
