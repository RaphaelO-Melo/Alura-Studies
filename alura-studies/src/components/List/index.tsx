import { ITask } from "../../types/task";
import Item from "./Item";
import list from './list.module.scss';

interface Props{
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void,
    removeTask: (taskId: ITask) => void
}

export default function List({tasks, selectTask, removeTask }:Props) {

    return(
        <aside className={list.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item 
                        removeTask={removeTask}
                        selectTask={selectTask}
                        key={item.id}
                        {...item}/>
                ))}
            </ul>
        </aside>
    )
}