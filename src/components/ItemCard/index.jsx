import './style.css'

function ItemCard({name, image, onClick}) {
    return (
        <div className='itemCard' onClick={onClick}>
            <p>{name}</p>
            <div className='gradient'></div>
            <img src={image}/>
        </div>
    )
}

export default ItemCard