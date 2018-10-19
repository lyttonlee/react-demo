import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {List, InputItem, Button, Toast} from 'antd-mobile'

export class AddComent extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  }
  state = {
    user: '',
    content: ''
  }
  submit = () => {
    if (this.state.user === '' || this.state.content === '') {
      Toast.fail('总得说点啥啊！！', 2)
    } else {
      const comment = this.state
      this.props.addComment(comment)
      this.setState({
        user: '',
        content: ''
      })
    }
  }
  userInput = (e) => {
    // console.log(e)
    const user = e
    this.setState({
      user
    })
  }
  contentInput = (e) => {
    const content = e
    this.setState({
      content
    })
  }
  render() {
    return (
      <div>
        <List style={{width: '100vw'}}>
          <InputItem
            type='text'
            placeholder="username"
            value={this.state.user}
            clear
            onChange = { (e) => this.userInput(e)}
          >user</InputItem>
          <InputItem
            type='text'
            placeholder="content"
            value={this.state.content}
            clear
            onChange = {(e) => this.contentInput(e)}
          >content</InputItem>
        </List>
        {/* user:<input value={this.state.user} onChange = { (e) => this.userInput(e)} type="text"/>
        comment: <input value = {this.state.content} onChange = {(e) => this.contentInput(e)} type="text"/> */}
        <Button type='primary' onClick = {() => this.submit()}>submit</Button>
      </div>
    )
  }
}

export default AddComent
