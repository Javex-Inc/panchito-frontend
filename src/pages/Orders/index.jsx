import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import OrderCard from '../../components/OrderCard';
import DetailOrder from '../../components/DetailOrder';

function Orders() {

    const [orders, setOrders] = useState([]);

    async function fetchOrders() {
        const response = await axios.get("http://localhost:8080/orders");

        setOrders(response.data);
    }

    useEffect(() => {
        fetchOrders()
    }, []);

    const [activeOrder, setActiveOrder] = useState(null)
    const [active, setActive] = useState(false) // todo: onClick show detailOrder

    return (
        <div className='ordersContainer'>
            <DetailOrder order={activeOrder}/>
            <span className='ordersTitle'>Pedidos</span>
            <div className='ordersList'>
                {
                    orders.map((order, index) => (
                        <OrderCard order={order} key={index} onClick={() => {
                            setActiveOrder(order)
                            console.log(activeOrder)
                        }}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Orders