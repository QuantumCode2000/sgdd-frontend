import React, { useContext } from 'react'
import StateSidebarContext from '../../contexts/StateSidebar';
import './index.css'
import logoEjercito from '../../assets/images/logo-ejercito.png'
const Navbar = () => {
  const {active,setActive} = useContext(StateSidebarContext) || {};
  return (
    <nav className={
      active ? 'navbar-active' : 'navbar-deactive'}
    >
      <figure className='container-logo'>
        <img className='logo-ejercito' src={logoEjercito} alt="imagen"/>
      </figure>
    </nav>
  )
}

export default Navbar;
