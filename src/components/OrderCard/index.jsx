import './style.css'

function OrderCard({ order }) {
    function formatHour(hour) {
        const dateObj = new Date(hour);

        const hours = String(dateObj.getUTCHours()).padStart(2, "0");
        const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`
    }

    return (
        <div className='order-card'>
            <div className='order-card-header'>
                <div className='order-card-status'>
                    {order.status}
                </div>
                <p>{formatHour(order.timestamp)}</p>
            </div>
            <div className='order-card-client-name'>
                <p>{order.client.name}</p>
            </div>
            <div className='order-card-bottom'>
                <div className='order-card-id'>
                    <p>Pedido: {order.number}</p>
                </div>
                <div className='order-card-itens-value'>
                    <p>{`${order.products.length} ${order.products.length > 1 ? 'Itens' : 'Item'}`}</p>
                    <div className='separator'></div>
                    <p>R$ {order.total}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCard