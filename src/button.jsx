function Button(props) {

    
    const { type, disabled, children, onclick } = props;


    return (
        <button type={type} disabled={disabled} onClick={onclick}>
            {children}
        </button>
    )
}
export default Button