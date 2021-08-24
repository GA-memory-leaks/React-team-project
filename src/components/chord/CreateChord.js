import React from 'react'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'

class CreateChord extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chord: {
        title: '',
        body: ''
      },
      message: ''
    }
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

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   // console.log(this.state)
  //   axios({
  //     url: apiUrl + '/books',
  //     method: 'POST',
  //     data: {
  //       book: this.state.book
  //     }
  //   })
  //     .then((response) =>
  //       this.setState({
  //         book: { title: '', author: '' },
  //         message: 'Book created!'
  //       })
  //     )
  //     .catch(console.error)
  // }

  render () {
    return (
      <>
        <h3>In Chord Create. Hello!</h3>
        <p>{this.state.message}</p>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            value={this.state.chord.title}
            onChange={this.handleChange}
            name='title'
          />
          <label>Body</label>
          <input
            value={this.state.chord.body}
            onChange={this.handleChange}
            name='body'
          />
          <button type='submit'>Create Chord</button>
        </form>
      </>
    )
  }
}

export default CreateChord
