import React from 'react'
import './style.css'
const ItemUser = ({nome, id, cidade}) => {
  return (
    <div className='ItemUser'><div>{nome} - ID: {id} Cidade: {cidade}</div></div>
  )
}

export default ItemUser