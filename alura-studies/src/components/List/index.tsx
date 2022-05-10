import React from "react";
import list from './list.module.scss';

function List() {
    const tasks = [
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
    ];
    
    return(
        <aside className={list.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, key) => (
                    <li key={key} className={list.item}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;