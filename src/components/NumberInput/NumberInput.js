import './NumberInput.css';

function NumberInput(props) {
    return(
        <div className='number-input-container'>
        <label htmlFor={props.id}>
                {props.label}
            </label>
            <div className='input-wrapper'>
                <img src={props.icon} alt='icon'></img>
                <input id={props.id} type='number' placeholder='0'></input>
            </div >
        </div>
    )
}

export default NumberInput