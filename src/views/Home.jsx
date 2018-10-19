import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {NavBar, Icon} from 'antd-mobile'

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
  back = () => {
    console.log(this.props)
    this.props.history.goBack()
  }
  render() {
    // console.log(this.props)
    const {addComment, comments, deleteComment} = this.props
    return (
      <div>
        <CommentsList comments = {comments} deleteComment = {deleteComment}/>
        <AddComent addComment = {addComment}/>
      </div>
    )
  }
}

export default connect(
  state => ({comments: state.comments}),
  {deleteComment, addComment, getComments}
)(Home)
