import { act, useEffect, useState } from 'react'
import './style.css'
import Slider from '../../components/Slider';
import axios from 'axios';
import ItemCard from '../../components/ItemCard';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const options = ['Hamburguer', 'Frango', 'Batata', 'Bebida'];
    const [active, setActive] = useState(false);
    const [activeProduct, setActiveProduct] = useState({})

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        } catch (error) {
            console.log("failed to request: ", error);
        }
    }

    useEffect(() => {
        if (options[selectedIndex] != activeProduct.category) {
            setActive(false);
        }

        setActiveProduct({})

        console.log(activeProduct.category)
    }, [selectedIndex])
    
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

            <div className='catalogContent'>
                <ul style={{
                    width: `${active ? 60 : 100}%`
                }}>
                    {
                        products.filter(product => product.category.includes(options[selectedIndex])).map((product, key) => (
                            <ItemCard key={key} name={product.name} image={product.image} onClick={() => {
                                if(activeProduct == product) {
                                    setActive(!active);
                                } else {
                                    setActive(true)
                                }
                                setActiveProduct(product);
                            }}/>
                        ))
                    }
                </ul>

                <div className='detailContainer' style={{
                        right: `${active ? 0 : -45}rem`,
                        opacity: `${active ? 100 : 0}%`,
                    }}>
                    <p>{activeProduct.name}</p>
                    <p>{activeProduct.description}</p>
                    <img src={activeProduct.image} />
                </div>
            </div>
        </div>
    )
}

export default Catalog