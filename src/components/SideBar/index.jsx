import { useState } from 'react'
import OptionCard from '../OptionCard'
import './style.css'

function SideBar() {
    
    const [active, setActive] = useState('Geral');

    return (
        <div className='sideBar'>
            <div className="mainIcon">
                <img src="src/assets/react.svg"/>
            </div>
            <div className="options">
                <OptionCard title={'Geral'} active={active} iconName={'dashboard'} onClick={() => setActive('Geral')}/>
                <OptionCard title={'Pedidos'} active={active} iconName={'order'} onClick={() => setActive('Pedidos')}/>
            </div>
        </div>
    )
}

export default SideBar