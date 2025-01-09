import './style.css'

function DetailContainer({active, activeProduct}) {
    return (
        <div className='detailContainer' style={{
            right: `${active ? 0 : -45}rem`,
            opacity: `${active ? 100 : 0}%`,
            }}>
            <h3 className='title'>{activeProduct.name}</h3>
            <p>{activeProduct.description}</p>
            <img src={activeProduct.image} />
        </div>
    )
}

export default DetailContainer