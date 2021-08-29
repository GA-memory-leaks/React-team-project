import React from 'react'
import { withRouter } from 'react-router-dom'
import { userChords } from './../../api/chord-auth'
import { Card } from 'react-bootstrap'
import { soundBoardTitleStyles, chordsContainerStyles, chordStyles, titleStyles, bodyStyles } from './chordStyles'

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
    const { chords, musician } = this.state
    if (chords === null) {
      return (<p style={{ fontFamily: 'Playfair Display' }}>Loading...</p>)
    }
    let chordJsx
    const musicianChords = chords.filter(chord => this.props.match.params.id === chord.owner)
    if (musicianChords.length === 0) {
      chordJsx = <p style={{ fontFamily: 'Playfair Display' }}>{musician} has not posted any chords</p>
    } else {
      chordJsx = musicianChords.map(chord => (
        <Card key={chord._id} style={chordStyles}>
          <Card.Body>
            <Card.Title style={titleStyles}>{chord.title}</Card.Title>
            <Card.Text style={bodyStyles}>{chord.body}</Card.Text>
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        <div style={soundBoardTitleStyles}>
          <h1 style={{ margin: '0 auto' }}>{musician}&apos;s Sound Board</h1>
        </div>
        <div style={chordsContainerStyles}>
          {chordJsx}
        </div>
      </>
    )
  }
}

export default withRouter(MusicianChords)
