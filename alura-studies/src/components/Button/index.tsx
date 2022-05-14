import React from "react";
import button from './button.module.scss';

class Button extends React.Component<any, {type?: string}>{ 
    render() {

        const {type = "button"} = this.props;

        return (
            <button type={type} className={button.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;