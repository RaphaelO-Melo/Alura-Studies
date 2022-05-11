import React from "react";
import button from './button.module.scss';

class Button extends React.Component<any, any>{
    render() {
        return (
            <button className={button.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;