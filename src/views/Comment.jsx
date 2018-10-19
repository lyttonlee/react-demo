import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank, Button} from 'antd-mobile'

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
        <WingBlank size='lg'>
          <WhiteSpace size='lg' />
            <Card>
              <Card.Header 
                title={comment.user}
              />
              <Card.Body>
                <div>{comment.content}</div>
              </Card.Body>
              <Card.Footer extra = {
                <Button type='warning' size='small' onClick = {() => this.deleteComment(index)}> Delete </Button>
              }/>
            </Card>
          <WhiteSpace size='lg'/>
        </WingBlank>
      </div>
    )
  }
}

export default Comment
