import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './style.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to={"/"} className='icon'>Meu App</Link>
      <ul>
        <CustomLink to={"/"}>Início</CustomLink>
        <CustomLink to={"/usuarios"}>Usuários</CustomLink>
        <CustomLink to={"/produtos"}>Produtos</CustomLink>

      </ul>
    </nav>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  console.log(resolvedPath.pathname)
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default Navbar