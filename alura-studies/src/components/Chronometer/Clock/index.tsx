import React from 'react';
import clock from './clock.module.scss';

interface Props{
    time: number | undefined
}

export default function Clock({time = 0} : Props){

    const minutes = String(Math.floor(time/60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    return(
        <React.Fragment>
            <span className={clock.relogioNumero}>{minutes[0]}</span>
            <span className={clock.relogioNumero}>{minutes[1]}</span>
            <span className={clock.relogioDivisao}>:</span>
            <span className={clock.relogioNumero}>{seconds[0]}</span>
            <span className={clock.relogioNumero}>{seconds[1]}</span>
        </React.Fragment>
    )
}