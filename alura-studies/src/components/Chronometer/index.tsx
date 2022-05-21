import chronometer from './chronometer.module.scss';
import Button from '../Button';
import Clock from './Clock';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props{
    selected: ITask | undefined,
    endTask: () => void,
    tasks: ITask[]
}

export default function Chronometer({selected, endTask, tasks} : Props) {
    
    const [time, setTime] = useState<number>(timeToSeconds(String(selected?.time)));

    useEffect(() =>{

        var constOn = false;
        tasks.forEach(task => {
            if(task.id == selected?.id){
                constOn = true;
            }
        });

        if(selected?.time && constOn){
            setTime(timeToSeconds(selected.time));
        } else {
            setTime(timeToSeconds('0'));
        }

    }, [selected]);

    function startCont(time: number = 0){
        setTimeout(() => {
            
            if(time > 0){
                setTime(time - 1);
                return startCont(time - 1);
            }

            endTask();

        }, 1000);
    }

    return(
        <div className={chronometer.cronometro}>
            <p className={chronometer.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={chronometer.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={()=> startCont(time)}>Começar!</Button>
        </div>
    )
}