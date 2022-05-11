import React from 'react';
import clock from './clock.module.scss';

export default function Clock(){
    return(
        <React.Fragment>
            <span className={clock.relogioNumero}>0</span>
            <span className={clock.relogioNumero}>0</span>
            <span className={clock.relogioDivisao}>:</span>
            <span className={clock.relogioNumero}>0</span>
            <span className={clock.relogioNumero}>0</span>
        </React.Fragment>
    )
}