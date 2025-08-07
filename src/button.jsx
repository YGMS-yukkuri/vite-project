function Button(props) {

    
    const handleClick = () => {
        alert('クリックされました！');
    }


    return (
        <button type="button" onClick={handleClick}>
            <i>icon</i>
            <span>クリック</span>
        </button>
    )
}
export default Button