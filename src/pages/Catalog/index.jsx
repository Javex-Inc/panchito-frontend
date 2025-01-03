import { useState } from 'react'
import './style.css'
import Slider from '../../components/Slider';

function Catalog() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const options = ['Categoria', 'Coleção', 'Oferta'];

    const examples = [
        'Categoria1', 'Categoria2', 'Categoria3', 'Categoria4', 'Categoria5', 'Categoria6',
        'Coleção1', 'Coleção2', 'Coleção3', 'Coleção4', 'Coleção5', 'Coleção6',
        'Oferta1', 'Oferta2', 'Oferta3', 'Oferta4', 'Oferta5', 'Oferta6',
    ];

    return (
        <div className='catalogContainer'>
            <span className='catalogTitle'>Catálogo</span>

            <Slider 
            selectedIndex={selectedIndex} 
            setSelectedIndex={setSelectedIndex} 
            options={options}
            />

            <ul>
                {
                    examples.filter(opt => opt.includes(options[selectedIndex]))
                    .map((opt, index) => (
                        <li key={index}>
                            {opt}
                        </li>
                    ))
                }
            </ul>
            

        </div>
    )
}

export default Catalog