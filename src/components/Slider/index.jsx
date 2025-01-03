import './style.css'

function Slider({selectedIndex, setSelectedIndex, options}) {
    return (
        <div className='slider'>
            <div className='sliderFocus' style={{left: `${3 + 6 * selectedIndex + selectedIndex * 105}px`}}></div>

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