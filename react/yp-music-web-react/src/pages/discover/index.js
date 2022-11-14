import React, {Fragment, memo} from 'react'
import {Outlet, NavLink} from 'react-router-dom'
import {DiscoverWrapper, DiscoverNavWrapper} from './style'
import {dicoverMenu} from '@/common/local-data'

export default memo(function Discover(props) {
  const NavItem = (menu, index) => (
    <NavLink to={menu.link}>{menu.title}</NavLink>
  )

  return (
    <DiscoverWrapper>
      <DiscoverNavWrapper>
        <ul className="nav-list wrap-v1">
          {
            dicoverMenu.map((menu, index) => (
              <li className="nav" key={menu.title}>
                {NavItem(menu, index)}
              </li>
            ))
          }
        </ul>
      </DiscoverNavWrapper>
      <Outlet/>
    </DiscoverWrapper>
  )
})