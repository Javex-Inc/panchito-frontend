import './style.css'

function OptionCard({title, active, iconName, onClick}) {
    return (
        <div className="optionCard" style={active == title ? {backgroundColor: '#feeee3'} : {backgroundColor: ''}} onClick={onClick}>
            <div className={active == title ? "line active" : "line"}></div>
            <div className="optionImage">
                <img src={`src/assets/icons/${active == title ? 'active' : 'disactive'}/${iconName}.png`}/>
            </div>
            <div className="optionText">
                <span style={active == title ? {color: '#f36701'} : {color: '#b8b8b8'}}>{title}</span>
            </div>
        </div>
    )
}

export default OptionCard