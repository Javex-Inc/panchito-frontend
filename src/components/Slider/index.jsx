import './style.css'

function Slider({selectedIndex, setSelectedIndex, options}) {
    return (
        <div className='slider' style={{width: `${(options.length * 120) + 6}px`}}>
            <div className='sliderFocus' style={{width: '120px', left: `${3+ ((options.length * 120) / options.length) * selectedIndex}px`}}></div>

            {options.map((option, index) => (
                <a key={index} onClick={() => setSelectedIndex(index)}>
                    <div
                    className='sliderOption'
                    style={{
                        color: selectedIndex === index ? "#595959" : "#848484",
                    }}>{option}</div>
                </a>
            ))}
        </div>
    )
}

export default Slider