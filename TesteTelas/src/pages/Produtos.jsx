import React from 'react'
import './stylePages.css'
import ItemProd from '../components/itemProd'
import BarPage from '../components/BarPage'

const Produtos = () => {
  return (
    <>
    <BarPage janela="> Produtos"/>
      <div className='conteudo'>
      <h2>Produtos</h2>
    <div className='containerProd'>
     <ItemProd nome = "produto 67"/>
     <ItemProd nome = "produto 23"/>
     <ItemProd nome = "produto 12"/>
     </div>
    </div>
    </>
  
   

  )
}

export default Produtos