import React, {Fragment, memo} from "react";
import {NavLink} from "react-router-dom";
import {Input} from 'antd'
import {SearchOutlined} from "@ant-design/icons";

import {AppHeaderWrapper} from "./style";
import {headerLinks} from "@/common/local-data";

export default memo(function YPAppHeader() {
  const linkItem = (item, index) => {
    if(index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
      <AppHeaderWrapper>
        <div className="content wrap-v1">
          <div className="left">
            <div className="logo sprite_01">
              <a href="/">网易云音乐</a>
            </div>
            <ul className="menu">
              {
                headerLinks.map((item, index) => (
                  <li key={item.title}>
                    {linkItem(item, index)}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="right">
            <Input type="text" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
            <button className="create-center">创作者中心</button>
            <button className="login-btn">登录</button>
          </div>
        </div>
        <div className="divider"></div>
      </AppHeaderWrapper>
  )
})