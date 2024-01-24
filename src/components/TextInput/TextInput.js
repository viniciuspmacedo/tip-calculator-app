import './TextInput.css';

function TextInput(props) {
    return(
        <input className='text-input' type="Text" placeholder={props.placeholder}></input>
    )
}

export default TextInput;