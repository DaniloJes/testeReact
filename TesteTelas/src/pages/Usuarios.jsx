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
    <BarPage janela = " > Usuários"/>
  
     <div className='conteudo'>
     <h3>Usuários</h3>
      {pessoas.map((pessoa)=>(<ItemUser nome={pessoa.nome} id={pessoa.id}cidade = {pessoa.Cidade}/>  ))}
    </div>
    </>
   
  )
}

export default Usuarios