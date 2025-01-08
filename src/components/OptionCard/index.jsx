import { Link } from 'react-router-dom'
import './style.css'

function OptionCard({title, path, active, iconName, onClick}) {
    return (
        <Link to={path} style={{textDecoration: 'none'}}>
            <div className="optionCard" style={active == path ? {backgroundColor: '#feeee3'} : {backgroundColor: ''}} onClick={onClick}>
                <div className={active == path ? "line active" : "line"}></div>
                <div className="optionImage">
                    <img src={`src/assets/icons/${active == path ? 'active' : 'disactive'}/${iconName}.png`}/>
                </div>
                <div className="optionText">
                    <span style={active == path ? {color: '#f36701'} : {color: '#b8b8b8'}}>{title}</span>
                </div>
            </div>
        </Link>
    )
}

export default OptionCard