import React from 'react'
import { withRouter } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import { userChords } from './../../api/chord-auth'

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

  render () {
    return (
      <>
        <h3>Update your chord!</h3>
      </>
    )
  }
}

export default withRouter(UpdateChord)
