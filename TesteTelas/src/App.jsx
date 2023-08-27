
import './style.css'
import Navbar from './components/Navbar'
import Usuarios from './pages/Usuarios'
import Produtos from './pages/Produtos';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/produtos' element ={<Produtos/>}/>
      <Route path ='/usuarios' element ={<Usuarios/>}/>
    </Routes>
    </>
  )
}

export default App
