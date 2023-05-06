import React from 'react'
import Main from '../../components/Main/Main'
import Orders from '../../components/Orders/Orders'
import './Home.scss'
function Home() {
  return (
    <div className='home_block'>
        <Main/>
        <Orders/>
    </div>
  )
}

export default Home