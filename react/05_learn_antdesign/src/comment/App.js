import React, { PureComponent } from 'react'
import axios from 'axios'

import CommentInput from './components/CommentInput'
import CommentItem from './components/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      commentList: [],
    }
  }

  componentDidMount() {
    axios.get('https://httpbin.org/get', {
      params: {
        username: 'jz',
        age: 18
      }
    }).then(console.log)
  }

  render() {
    return (
      <div style={{ width: '500px' }}>
        <h2>Comments</h2>
        {this.state.commentList.map((item, index) => (
          <CommentItem
            key={item.id}
            {...item}
            deleteComment={() => this.deleteComment(index)}
          />
        ))}
        <CommentInput
          addComment={(commentInfo) => this.addComment(commentInfo)}
        />
      </div>
    )
  }

  addComment(commentInfo) {
    this.setState({
      commentList: [...this.state.commentList, commentInfo],
    })
  }

  deleteComment(index) {
    const newArr = [...this.state.commentList]
    newArr.splice(index, 1)
    this.setState({
      commentList: newArr,
    })
  }
}
