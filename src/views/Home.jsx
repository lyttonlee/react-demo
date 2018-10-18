import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import AddComent from './AddComent'
import CommentsList from './CommentsList'
import {addComment, deleteComment, getComments} from '../reducer/actions'

export class Home extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
  }
  componentWillMount () {
    this.props.getComments()
  }
  // state = {
  //   comments: []
  // }
  // addComment = comment => {
  //   const {comments} = this.state
  //   comments.unshift(comment)
  //   this.setState(
  //     comments
  //   )
  // }
  // deleteComment = indexc => {
  //   const {comments} = this.state
  //   const newComments = comments.filter((c, index) => index !== indexc)
  //   this.setState({
  //     comments: newComments
  //   })
  // }
  render() {
    console.log(this.props)
    const {addComment, comments, deleteComment} = this.props
    return (
      <div>
        <AddComent addComment = {addComment}/>
        <CommentsList comments = {comments} deleteComment = {deleteComment}/>
      </div>
    )
  }
}

export default connect(
  state => ({comments: state.comments}),
  {deleteComment, addComment, getComments}
)(Home)
