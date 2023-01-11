import React from 'react'
import './Coin.scss'

export default function Coin({
    name,
    image,
    price,
    marketCap,
    priceChange
}) {
  return (
    <div >
        <img src={image} alt={name} className='img'/>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
        <span className='change' style={{color: priceChange > 0? 'green' : 'red'}}>{priceChange}%</span>
        <span className='market'>$ {marketCap}</span>
    </div>
  )
}
