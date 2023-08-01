import React from 'react'
import { FaBars } from 'react-icons/fa';
import './index.css'
import { useContext } from 'react';
import StateSidebarContext from '../../contexts/StateSidebar/index.jsx';

const Borradores = () => {
    const {active,setActive} = useContext(StateSidebarContext);
    return (
        <main className={
            active ? 'main-active' : 'main-deactive'
        }>
            <section>
                <div class={
                    active ? 'menu-bars-active' : 'menu-bars-deactive'
                }
                    onClick={() => setActive(!active)}
                >
                    <FaBars className='icon-bars'/>
                </div>
                Borradores
            </section>
        </main>
    )
}

export default Borradores