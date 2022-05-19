import React from "react";
import button from './button.module.scss';

class Button extends React.Component<any, {
    type?: string,
    onClick?: () => void
}>{ 
    render() {

        const {type = "button", onClick} = this.props;

        return (
            <button onClick={onClick} type={type} className={button.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;