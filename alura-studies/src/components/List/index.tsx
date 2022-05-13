import { log } from "console";
import { useState } from "react";
import Item from "./Item";
import list from './list.module.scss';

export default function List() {

    const [tasks, setTasks] = useState(
        [
            {
                task: "React",
                time: "02:00:00" 
            },
            {
                task: "Javascript",
                time: "01:00:00" 
            },
            {
                task: "Typescript",
                time: "03:00:00" 
            },
        ]
    );


    
    return(
        <aside className={list.listaTarefas}>
            <h2 onClick={() => {
                setTasks([...tasks, {task: "Nova tarefa 1", time: "01:02:03"}, {task: "Nova tarefa 2", time: "04:05:06"}])
            }}>Estudos do dia</h2>
            <ul>
                {tasks.map((item, key) => (
                    <Item key={key} task={item.task} time={item.time} />
                ))}
            </ul>
        </aside>
    )
}