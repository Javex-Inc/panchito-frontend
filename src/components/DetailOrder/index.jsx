import './style.css'

function DetailOrder({order}) {
    return (
        <div className='orderDetailContainer'>
            <div className='orderCardHeader'>
                <p>{order?.status}</p>
                <p>Pedido: {order?.number}</p>
                </div>
            </div>
    )
}

export default DetailOrder