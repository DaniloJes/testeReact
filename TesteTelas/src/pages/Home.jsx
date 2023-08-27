import React from 'react'
import './stylePages.css'
import BarPage from '../components/BarPage'

const Home = () => {
  return (
    <>
      <BarPage />
      <div className='conteudo'>
        <h3>Página inicial</h3>
        <p>Essa página não possuí conteúdo, apenas imagem.</p>
        <img src="https://conteudo.imguol.com.br/c/entretenimento/40/2016/12/19/cena-do-filme-shrek-2001-de-andrew-adamson-e-vicky-jenson-1482158251401_v2_900x506.jpg" alt="" />
      </div>
    </>
  )
}

export default Home