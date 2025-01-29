import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import OrderCard from '../../components/OrderCard';

function Orders() {

    const [orders, setOrders] = useState([]);

    async function fetchOrders() {
        const response = await axios.get("http://localhost:8080/orders");

        setOrders(response.data);
    }

    useEffect(() => {
        fetchOrders()
    }, []);

    return (
        <div className='ordersContainer'>
            <span className='ordersTitle'>Pedidos</span>
            <div className='ordersList'>
                {
                    orders.map((order, index) => (
                        <OrderCard order={order} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders