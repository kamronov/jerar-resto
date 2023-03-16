import React, { useState } from 'react'
import './Main.scss'
import search from '../../assets/img//icons/inp-search.svg'
import { data } from '../../lib/data'

const types = []

data.forEach((item)=>{
  if(types.includes(item.type) !== true){

    types.push(item.type)
  }
})
function Main() {
  const [category, setCategory] = useState('Ichimlik')
  const [tabAct, setTab] = useState(0)
  console.log(category);
  return (
    <div>
      <main className='main'>
        <div className="main__head">
          <div className="main__title">
          <h2>Jaegar Resto</h2>
           <h4>Tuesday, 2 Feb 2021</h4>
          </div>
          <label className='label_inp' htmlFor="search">
            <input id='search' type="search" placeholder='Search for food, coffe, etc..'/>
            <img src={search} alt="" />
          </label>
        </div>

        <div className="menu__nav">
          {
            types && types.map((item, index)=>(
              <button className={tabAct === index?'btn tab_act': 'btn'} key={item} onClick={()=>{setCategory(item); setTab(index)}}>{item}</button>
            ))
            
          }
        </div>
        <div className="menu__subtitle">
          <h2>Choose Dishes</h2>
          <button className='btn_select'>Dine In</button>
        </div>

        <ul className="main__list">
          {
            data && data.filter((i)=> i.type === category).map((item,index)=>(
              <li key={index} className='main_items'>
                <img src={item.img} alt="" />
                <b>{item.title}</b>
                <span>$ {item.price}</span>
                <div className='card__left'>
                  <span>{item.have} </span>Bowls available
                </div>
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default Main