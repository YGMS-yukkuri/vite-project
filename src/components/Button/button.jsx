import styles from './Button.module.css';

function Button(props) {
    const { onClick, children } = props;


    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button;