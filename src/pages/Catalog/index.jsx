import { useEffect, useState } from 'react'
import './style.css'
import Slider from '../../components/Slider';
import axios from 'axios';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const options = ['Categoria', 'Coleção', 'Oferta'];
    
    const examples = [
        'Categoria1', 'Categoria2', 'Categoria3', 'Categoria4', 'Categoria5', 'Categoria6',
        'Coleção1', 'Coleção2', 'Coleção3', 'Coleção4', 'Coleção5', 'Coleção6',
        'Oferta1', 'Oferta2', 'Oferta3', 'Oferta4', 'Oferta5', 'Oferta6',
    ];

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        } catch (error) {
            console.log("failed to request: ", error);
        }
    }
    
    useEffect(() => {
        fetchProducts()
    }, []);

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

            <ul>
                {
                    products.map((product, key) => (
                        <>
                            <p>{product.name}</p>
                            <img key={key} src={`data:image/jpeg;base64,${product.image}`} alt="" />
                        </>
                    ))
                }
            </ul>
            

        </div>
    )
}

export default Catalog