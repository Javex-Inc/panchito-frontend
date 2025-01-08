import './style.css'

function ItemCard({name, image}) {
    return (
        <div className='itemCard'>
            <p>{name}</p>
            <div className='gradient'></div>
            <img src={image}/>
        </div>
    )
}

export default ItemCard