import React from 'react'
import Main from '../../components/Main/Main'
import Orders from '../../components/Orders/Orders'
import SideBar from '../../components/SideBar/SideBar'
import './Home.scss'
function Home() {
  return (
    <div className='home_block'>
        <SideBar/>
        <Main/>
        <Orders/>
    </div>
  )
}

export default Home