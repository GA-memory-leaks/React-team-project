import React from 'react'
import { withRouter } from 'react-router-dom'
import { listUsers } from './../../api/auth'
import { Button, Card } from 'react-bootstrap'
import { soundBoardTitleStyles, chordsContainerStyles, chordStyles, titleStyles } from './../chord/chordStyles'

class ListUsers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    listUsers(user)
      .then(res => this.setState({ users: res.data.users }))
      .then(() => msgAlert({ heading: 'Index Users', message: 'Meet the other Musicians', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  render () {
    const { users } = this.state
    if (this.state.users === null) {
      return (<p style={{ fontFamily: 'Playfair Display' }}>Loading...</p>)
    }
    let usersJsx
    const otherMusicians = users.filter(musician => this.props.user._id !== musician._id)
    if (otherMusicians.length === 0) {
      usersJsx = <p style={{ fontFamily: 'Playfair Display' }}>No other musicians, check back soon</p>
    } else {
      usersJsx = otherMusicians.map(musician => (
        <Card key={musician._id} style={chordStyles}>
          <Card.Body>
            <Card.Title style={titleStyles}>{musician.name}</Card.Title>
            <Button onClick={ () => this.props.history.push({ pathname: `/users/${musician._id}`, musician: musician.name })} style={{ fontFamily: 'Playfair Display' }}>View Sound Board</Button>
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        <div style={soundBoardTitleStyles}>
          <h1 style={{ margin: '0 auto' }}>THE MOSH PIT!</h1>
        </div>
        <div style={chordsContainerStyles}>
          {usersJsx}
        </div>
      </>
    )
  }
}

export default withRouter(ListUsers)
