import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'
import './Orders.scss'
function Orders() {
  const { order, setOrder } = useContext(Context)
  const [id, setId] = useState(null)
  const [data, setData] = useState([])
  useEffect(() => {
    setData([...new Set(order)])
  }, [order])
  useEffect(() => {
    setData(data.filter((i) => i.id !== id))
    // setOrder(data.filter((i) => i.id !== id))
  }, [id])
  // console.log([order]);
  return (
    <div className='orders'>
      <div className="orders__head">
        <h2>Orders #34562</h2>
        <div className="orders__head--btns">
          <button>Dine In</button>
          <button>To Go</button>
          <button>Delivery</button>
        </div>
        <div className="order__subtitle">
          <span>Item</span>
          <span>Qty</span>
          <span>Price</span>
        </div>
      </div>

      <ul className='order__list'>
        {
          data && data.map((item, index) => (
            <li className='order__items' key={index}>
              <div className="order__block">
                <img src={item.img} alt="" />
                <div>{item.title} <br /> <span>$ {item.price}</span></div>
                <label className='inp__count'>{item.count} </label>
                <b>$ {(item.price * item.count).toFixed(2)}</b></div>
              <div className="inp__del">
                <input type="text" placeholder='Order Note...' />
                <button onClick={() => setId(item.id)} className='del__btn'><i className="bi bi-trash"></i></button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Orders