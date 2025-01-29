import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

function Orders() {

    const [orders, setOrders] = useState([]);

    async function fetchOrders() {
        const response = await axios.get("http://localhost:8080/orders");

        setOrders(response.data);
    }

    function formatHour(hour) {
        const dateObj = new Date(hour);

        const hours = String(dateObj.getUTCHours()).padStart(2, "0");
        const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`
    }

    useEffect(() => {
        fetchOrders()
    }, []);

    return (
        <div className='ordersContainer'>
            <span className='ordersTitle'>Pedidos</span>
            {
                orders.map((order, index) => (
                    <div key={index}>
                        <p>{order.status}</p>
                        <p>{formatHour(order.timestamp)}</p>
                        <p>{order.client_id}</p>
                        <p>Pedido: {order.number}</p>
                        <p>{`${order.products.length} ${order.products.length > 1 ? 'Itens' : 'Item'}`}</p>
                        <p>R$ 188,70</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Orders