import React from 'react'
import Main from '../../components/Main/Main'
import SideBar from '../../components/SideBar/SideBar'
import './Home.scss'
function Home() {
  return (
    <div className='home_block'>
        <SideBar/>
        <Main/>
    </div>
  )
}

export default Home