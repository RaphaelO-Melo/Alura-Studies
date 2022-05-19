import React from "react";
import button from './button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button ({onClick, type, children} : Props) {
    
    return (
        <button onClick={onClick} type={type} className={button.botao}>
            {children}
        </button>
    )

}

export default Button;