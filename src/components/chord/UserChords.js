import React from 'react'
import { withRouter } from 'react-router-dom'

// import { createChord } from './../../api/chord-auth'

class UserChords extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chords: [],
      message: ''
    }
  }

  // componentDidMount () {

  // }

  render () {
    return (
      <>
        <h3>In User Chords. Hello!</h3>
        <p>{this.state.message}</p>
      </>
    )
  }
}

export default withRouter(UserChords)
