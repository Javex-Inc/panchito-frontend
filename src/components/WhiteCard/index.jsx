import './style.css'

function WhiteCard() {
    return (
        <div className={'white-card'}>
            <h3 className='title'>Título</h3>
            <input type='text' placeholder='Insira aqui o título do produto'/>
            <h3 className='description'>Descrição</h3>
            <input type='text' placeholder='Insira aqui a descrição do produto'/>
            <h3 className='image'>Imagem</h3>
            <input type='image'/>
        </div>
    )
}

export default WhiteCard