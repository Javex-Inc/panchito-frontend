import './style.css'

function OrderCard({order}) {
    function formatHour(hour) {
        const dateObj = new Date(hour);

        const hours = String(dateObj.getUTCHours()).padStart(2, "0");
        const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`
    }

    return (
        <div className='orderCard'>
            <div className='orderStatus'>{order.status}</div>
            <p>{formatHour(order.timestamp)}</p>
            <p>{order.client.name}</p>
            <p>Pedido: {order.number}</p>
            <p>{`${order.products.length} ${order.products.length > 1 ? 'Itens' : 'Item'}`}</p>
            <p>R$ {order.total}</p>
        </div>
    )
}

export default OrderCard