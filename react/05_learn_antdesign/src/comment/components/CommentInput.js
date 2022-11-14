import React, { PureComponent } from 'react'
import { Input, Button, Space } from 'antd'
import moment from 'moment'

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
    }
  }

  render() {
    return (
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Input.TextArea
          rows={4}
          value={this.state.content}
          onChange={this.handleChange.bind(this)}
        />
        <Button type="primary" onClick={() => this.onSubmit()}>添加评论</Button>
      </Space>
    )
  }

  handleChange(evt) {
    this.setState({
      content: evt.target.value,
    })
  }

  onSubmit() {
    const commentInfo = {
      id: moment().valueOf(),
      username: 'jz',
      avatar: 'https://www.google.com.hk/search?q=%E5%A4%B4%E5%83%8F&newwindow=1&tbm=isch&source=iu&ictx=1&vet=1&fir=E_h7VMjqlXs0PM%252CW_eO62weoi0aLM%252C_%253BzJTLwngnjBDyYM%252CGr2ny2OsC93UBM%252C_%253Bk6PlKZc_RzGnhM%252C4MqyG-Of5m5WIM%252C_%253BmUXJ26haXvSnMM%252Cb9A8yF5RjMmAgM%252C_%253BRpb2TMzo8PKNwM%252COtcCrjqqOMo7GM%252C_%253BSxhDwSPpLkMEcM%252CjF8pO4VowHTheM%252C_%253BtL-DBnGVa_cs2M%252CQ0GDtPjSY9Ja9M%252C_%253BrlP_N2bC7DvanM%252CoeXCUS9o5PupJM%252C_%253B7GHRsoyNmJkoxM%252CjF8pO4VowHTheM%252C_%253BbR8T_bJKTHKB2M%252C3huSFqYFHm71ZM%252C_%253BWljgmcnf-lqIRM%252CTFWNZV5PEA6OcM%252C_%253BpOJtXcQGFkga8M%252CcLEumDjtfU8aiM%252C_%253B47dCIKuq1fPezM%252CRRXSRSwAB-u9uM%252C_%253BubNJk70vBG9IYM%252Ctvt8iueqa0pHkM%252C_%253B6VFe-a4guVCh2M%252CebSligqSlpFBPM%252C_&usg=AI4_-kT0PzqOsR3aj8W7aKpDa6eE2UkWRg&sa=X&ved=2ahUKEwjrhunB_s73AhW0QPUHHf3KChAQ9QF6BAgMEAE#imgrc=zJTLwngnjBDyYM',
      content: this.state.content,
      dateTime: moment()
    }

    this.props.addComment(commentInfo)
    this.setState({
      content: ''
    })
  }
}
