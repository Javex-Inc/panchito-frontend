import './style.css'

function OrderCard({ order, onClick }) {
    function formatHour(hour) {
        const dateObj = new Date(hour);

        const hours = String(dateObj.getUTCHours()).padStart(2, "0");
        const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`
    }

    const statusColor = new Map([
        ["Pendente", "#898989"],
        ["Preparando", "#2B92B1"],
        ["Pronto", "#7F4F24"],
        ["A caminho", "#F77F00"],
        ["Entregue", "#588157"],
        ["Cancelado", "#9A031E"]
    ])

    function searchStatusColor(status) {
        return statusColor.get(status) || "#000000";
    }

    return (
        <div className='order-card' onClick={onClick}>
            <div className='order-card-header'>
                <div className='order-card-status' style={{width: order.status.length > 6 ? '7.5rem' : '5rem', background: searchStatusColor(order.status)}}>
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