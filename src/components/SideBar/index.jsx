import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import OptionCard from '../OptionCard'
import './style.css'

function SideBar() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    return (
        <div className='sideBar'>
            <div className='mainIcon'>
                <img src="src/assets/logo-panchito.png"/>
            </div>
            <div className='options'>
                <OptionCard title={'Geral'} path={'/'} active={active} iconName={'dashboard'} onClick={() => setActive('/')}/>
                <OptionCard title={'Pedidos'} path={'/orders'} active={active} iconName={'order'} onClick={() => setActive('/orders')}/>
                <OptionCard title={'Catálogo'} path={'/catalog'} active={active} iconName={'catalog'} onClick={() => setActive('/catalog')}/>
            </div>
        </div>
    )
}

export default SideBar