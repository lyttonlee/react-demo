import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddComent extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  }
  state = {
    user: '',
    content: ''
  }
  submit = () => {
    const comment = this.state
    this.props.addComment(comment)
    this.setState({
      user: '',
      content: ''
    })
  }
  userInput = (e) => {
    const user = e.target.value
    this.setState({
      user
    })
  }
  contentInput = (e) => {
    const content = e.target.value
    this.setState({
      content
    })
  }
  render() {
    return (
      <div>
        user:<input value={this.state.user} onChange = { (e) => this.userInput(e)} type="text"/>
        comment: <input value = {this.state.content} onChange = {(e) => this.contentInput(e)} type="text"/>
        <button onClick = {() => this.submit()}>submit</button>
      </div>
    )
  }
}

export default AddComent
