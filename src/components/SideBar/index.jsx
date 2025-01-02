import { useState } from 'react'
import OptionCard from '../OptionCard'
import './style.css'

function SideBar() {
    
    const [active, setActive] = useState('Geral');

    return (
        <div className='sideBar'>
            <div className='mainIcon'>
                <img src="src/assets/logo-panchito.png"/>
            </div>
            <div className='options'>
                <OptionCard title={'Geral'} path={'/'} active={active} iconName={'dashboard'} onClick={() => setActive('Geral')}/>
                <OptionCard title={'Pedidos'} path={'/orders'} active={active} iconName={'order'} onClick={() => setActive('Pedidos')}/>
                <OptionCard title={'Catálogo'} path={'/catalog'} active={active} iconName={'catalog'} onClick={() => setActive('Catálogo')}/>
            </div>
        </div>
    )
}

export default SideBar