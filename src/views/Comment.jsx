import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  deleteComment = index => {
    this.props.deleteComment(index)
  }
  render() {
    const {comment, index} = this.props
    return (
      <div>
        {comment.user}:{comment.content}
        <button onClick = {() => this.deleteComment(index)}> Delete </button>
      </div>
    )
  }
}

export default Comment
