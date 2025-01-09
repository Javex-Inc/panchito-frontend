import './style.css'

function DetailCard({active, activeProduct}) {
    return (
        <div className={`detailContainer ${active ? 'active' : ''}`}>
            <h3 className='title'>{activeProduct.name}</h3>
            <p>{activeProduct.description}</p>
            <img src={activeProduct.image} />
        </div>
    )
}

export default DetailCard