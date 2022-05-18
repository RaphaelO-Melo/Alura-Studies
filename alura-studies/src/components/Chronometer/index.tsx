import chronometer from './chronometer.module.scss';
import Button from '../Button';
import Clock from './Clock';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props{
    selected: ITask | undefined
}

export default function Chronometer({selected} : Props) {
    
    const [time, setTime] = useState<number>(timeToSeconds(String(selected?.time)));

    useEffect(() =>{

        if(selected?.time){
            setTime(timeToSeconds(selected.time));
        }

    }, [selected]);

    return(
        <div className={chronometer.cronometro}>
            <p className={chronometer.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {time}
            <div className={chronometer.relogioWrapper}>
                <Clock/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}