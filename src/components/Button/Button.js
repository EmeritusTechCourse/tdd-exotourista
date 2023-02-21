import { Link } from 'react-router-dom';
import styles from './Button.module.css'



export const Button = ({
    children, 
    onClick, // Callback for click event
    type = 'primary', // The style of the button
    href // The path to where the button navigates (converts button to link)
}) => {
    const classText = `button ${styles[type]}`;
    if(href){
        return <a href={href} className={classText}>{children}</a>
    }


    return <button onClick={onClick} className={classText}>{children}</button>
};