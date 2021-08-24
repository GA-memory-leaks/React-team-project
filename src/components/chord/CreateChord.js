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

  // handleChange = (event) => {
  //   const inputName = event.target.name
  //   const inputValue = event.target.value
  //   const bookCopy = Object.assign({}, this.state.book)
  //   bookCopy[inputName] = inputValue
  //   this.setState({
  //     book: bookCopy
  //   })
  // }

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

  // render () {
  //   return (
  //     <div>
  //       <h3>BookCreate</h3>
  //       <p>{this.state.message}</p>
  //       <form onSubmit={this.handleSubmit}>
  //         <label>Title</label>
  //         <input
  //           value={this.state.book.title}
  //           onChange={this.handleChange}
  //           name='title'
  //         />
  //         <label>Author</label>
  //         <input
  //           value={this.state.book.author}
  //           onChange={this.handleChange}
  //           name='author'
  //         />
  //         <button type='submit'>Create Book</button>
  //       </form>
  //     </div>
  //   )
  // }

  render () {
    return (
      <>
        <h3>In Chord Create. Hello!</h3>
      </>
    )
  }
}

export default CreateChord
