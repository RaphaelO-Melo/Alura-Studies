import Item from "./Item";
import list from './list.module.scss';

export default function List() {
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
                    <Item key={key} task={item.task} time={item.time} />
                ))}
            </ul>
        </aside>
    )
}