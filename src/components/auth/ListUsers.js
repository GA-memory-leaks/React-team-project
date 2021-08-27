import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { listUsers } from './../../api/auth'

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
      return 'Loading...'
    }
    let usersJsx
    if (users.length === 0) {
      usersJsx = 'No other musicians, check back soon'
    } else {
      const otherMusicians = users.filter(musician => this.props.user._id !== musician._id)
      usersJsx = otherMusicians.map(musician => (
        <li key={musician._id}>
          <Link to={ { pathname: `/users/${musician._id}`, musician: musician.name }}><h5>{musician.name}</h5></Link>
        </li>
      ))
    }
    return (
      <>
        <h3>Here are all the other musicians</h3>
        {usersJsx}
      </>
    )
  }
}

export default withRouter(ListUsers)
