import './style.css'

function TopBar() {
    return (
        <div className='topBar'>
            <div className='topBarContent'>
                <div className='topBarSpacer'></div>
                <div className='topBarSearch'>
                    <input type="text" placeholder='Buscar...'/>
                    <div className='searchIcon'>
                        <img src="src/assets/icons/active/search.png"/>
                    </div>
                </div>
                <div className='topBarIcon'>
                    <img src="src/assets/icons/active/user.png"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar