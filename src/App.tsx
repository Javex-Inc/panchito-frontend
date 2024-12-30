import './App.css'

function App() {
  return (
    <div className='container'>
      <div className='sideBar'>
        <div className="mainIcon">
          <img src="src/assets/react.svg"/>
        </div>
        <div className="options">
          <div className="optionCard" style={{backgroundColor: '#feeee3'}}>
            <div className="optionImage">
              <img src="src/assets/icons/active/dashboard.png"/>
            </div>
            <div className="optionText">
              <span style={{color: '#F36701'}}>Geral</span>
            </div>
          </div>

          <div className="optionCard">
            <div className="optionImage">
              <img src="src/assets/icons/disactive/order.png"/>
            </div>
            <div className="optionText">
              <span style={{color: '#B8B8B8'}}>Pedidos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="topBar">

      </div>
    </div>
  )
}

export default App
