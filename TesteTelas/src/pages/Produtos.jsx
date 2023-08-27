import React from 'react'
import './stylePages.css'
import ItemProd from '../components/itemProd'
import BarPage from '../components/BarPage'

const Prod = ['Produto 1', 'Produto 2', 'Produto 3']
const Produtos = () => {
  return (
    <>
      <BarPage janela="> Produtos" />
      <div className='conteudo'>
        <h2>Produtos</h2>
        <div className='containerProd'>
          {Prod.map((produto) => (<ItemProd nome={produto} />)
          )}
        </div>
      </div>
    </>
  )
}

export default Produtos