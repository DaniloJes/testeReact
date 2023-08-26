import React from 'react'
import './stylePages.css'
import ItemUser from '../components/ItemUser'
import BarPage from '../components/BarPage'

 const pessoas =([
  {
    id: '1',
    nome:'João da silva',
    Cidade: 'Sorocaba'
},
{
  id: '2',
  nome:'Maria Sauro',
  Cidade: 'Votorantim'
},
])
const Usuarios = () => {
  return (
    <>
    <BarPage janela = " > Usuarios"/>
  
     <div className='conteudo'>
      Usuarios
       <ItemUser nome = {pessoas[0].nome} id={pessoas[0].id} cidade={pessoas[0].Cidade}/>
       <ItemUser nome = {pessoas[1].nome} id={pessoas[1].id} cidade={pessoas[1].Cidade}/>
  
    </div>
    </>
   
  )
}

export default Usuarios