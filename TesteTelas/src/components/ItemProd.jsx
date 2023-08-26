import React from 'react'
import './style.css'
const ItemProd = ({nome}) => {
  return (
    <div className='produto'>
        <p>{nome}</p>
    </div>
  )
}

export default ItemProd