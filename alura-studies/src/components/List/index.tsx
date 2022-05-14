import { ITask } from "../../types/task";
import Item from "./Item";
import list from './list.module.scss';

export default function List({tasks}:{tasks: ITask[]}) {
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