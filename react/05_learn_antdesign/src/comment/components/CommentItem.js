import React, { PureComponent } from 'react'
import {Comment} from 'antd'

export default class CommentItem extends PureComponent {
  render() {
    const {username, avatar, content, datetime, deleteComment} = this.props
    return (
      <Comment
          actions={[<span key="comment-list-reply-to-0" onClick={() => deleteComment()}>delete</span>]}
          author={username}
          avatar={avatar}
          content={content}
          datetime={datetime}
        />
    )
  }
}
