import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavBar, Icon} from 'antd-mobile'

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
        <NavBar
          mode="dark"
          leftContent="Back"
          onLeftClick = {() => this.back()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
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
