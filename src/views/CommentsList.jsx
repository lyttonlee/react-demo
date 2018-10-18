import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

export class CommentsList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }

  render() {
    const {comments, deleteComment} = this.props
    if (comments.length > 0) {
      return (
        <div>
          {
            comments.map((comment, index) => {
              return (
                <Comment key = {index} index = {index} deleteComment = {deleteComment}  comment = {comment}/>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div>
          <h2>还没有任何评论！</h2>
        </div>
      )
    }
    
  }
}

export default CommentsList
