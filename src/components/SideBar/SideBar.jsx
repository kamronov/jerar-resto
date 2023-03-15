import React, {  } from 'react'
import './SideBar.scss'
import side__logo from '../../assets/img/icons/icon-logo.svg'
import home from '../../assets/img/icons/home.svg'
import discount from '../../assets/img/icons/discount.svg'
import graph from '../../assets/img/icons/graph.svg'
import message from '../../assets/img/icons/message.svg'
import colocol from '../../assets/img/icons/colocol.svg'
import setting from '../../assets/img/icons/setting.svg'
import logout from '../../assets/img/icons/logout.svg'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
      <aside className='side'>
        <div className="side__logo">
          <Link to='/'>
            <img src={side__logo} alt="" />
          </Link>
        </div>
      <nav className='nav'>
          <ul  className='side__list' >
            <li className='side__item side__item--active' >
              <Link to='/'>
                <img src={home} alt="" />
              </Link>
            </li>
            <li  className='side__item' >
              <Link to='/discount'>
                <img src={discount} alt="" />
              </Link>
            </li>
            <li className='side__item'>
              <Link href="/">
                <img src={graph} alt="" />
              </Link>
            </li>
            <li className='side__item'>
              <Link href="/">
                <img src={message} alt="" />
              </Link>
            </li>
            <li className='side__item'>
              <Link href="/">
                <img src={colocol} alt="" />
              </Link>
            </li>
            <li className='side__item'>
              <Link href="/">
                <img src={setting} alt="" />
              </Link>
            </li>
            <li className='side__item'>
              <Link href="/">
                <img src={logout} alt="" />
              </Link>
            </li>
          </ul>
      </nav>
      </aside>
      
    </div>
  )
}

export default SideBar