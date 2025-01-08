import { useEffect, useState } from 'react'
import './style.css'
import Slider from '../../components/Slider';
import axios from 'axios';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const options = ['Hamburguer', 'Frango', 'Batata', 'Bebida'];

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
                    products.filter(product => product.category.includes(options[selectedIndex])).map((product, key) => (
                        <div key={key}>
                            <p>{product.name}</p>
                            <img src={product.image} style={{maxWidth: '300px'}}/>
                        </div>
                    ))
                }
            </ul>
            

        </div>
    )
}

export default Catalog