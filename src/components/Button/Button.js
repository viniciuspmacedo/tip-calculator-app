import './Button.css';

function Button(props) {
    return (
        <button className={props.className}>
            {props.value}
        </button>
    )
};

export default Button