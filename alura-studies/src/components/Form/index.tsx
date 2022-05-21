import React, { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import form from './form.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form ({setTasks} : Props){

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>){

        event.preventDefault();
        setTasks(
            oldTasks => [
                ...oldTasks,
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );

        setTask("");
        setTime("00:00");

    }

    return(
        <form className={form.novaTarefa} onSubmit={addTask}>
            <div className={form.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                type="text" 
                name="tarefa" 
                id="tarefa" 
                placeholder="O que você quer estudar"
                value={task}
                onChange={event => setTask(event.target.value)}
                required/>
            </div>
            <div className={form.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                type="time" 
                step="1"
                name="tempo" 
                id="tempo" 
                min="00:00:00" 
                max="01:30:00" 
                value={time} 
                onChange={event => setTime(event.target.value)} 
                required/>
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}

export default Form;