import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './CSSTransitionDemo.css'

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }
  }

  render() {
    let {isShow} = this.state
    return (
      <div>
        <button onClick={e => this.setState({isShow: !isShow})}>{isShow ? 'hide' : 'show'}</button>
        <CSSTransition
          in={this.state.isShow}
          timeout={1000}
          classNames="card"
          appear={true}
          unmountOnExit={true}
          addEndListener={(node, done) => {
            // use the css transitionend event to mark the finish of a transition
            console.log(node, done)
            node.addEventListener('transitionend', this.done, false);
          }}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    )
  }

  done() {
    console.log('动画结束')
  }
}
