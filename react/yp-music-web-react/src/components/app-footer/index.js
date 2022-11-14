import React, {memo} from "react";
import {footerLinks} from '@/common/local-data'

import {AppFooterWrapper, AppFooterLeft, AppFooterRight} from "./style";

export default memo(function YPAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="content wrap-v2">
        <AppFooterLeft>
          <ul>
            {
              footerLinks.map(item => (
                <li key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))
            }
          </ul>
          <p>
            <span>网易公司版权所有©1997-2022 </span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="#/">浙网文[2021] 1186-054号</a>
          </p>
        </AppFooterLeft>
        <AppFooterRight>
          <ul>
            <li></li>
          </ul>
        </AppFooterRight>
      </div>
    </AppFooterWrapper>
  )
})