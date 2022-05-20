import { ITask } from '../../../types/task';
import item from './item.module.scss';

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void,
    removeTask: (taskId: ITask) => void
}

export default function Item({task, time, selected, completed, id, selectTask, removeTask}: Props) {
    
    return(
        <li className={`${item.item} ${selected ? item.itemSelecionado : ''} ${completed ? item.itemCompletado : ''}`}
        onClick={() => !completed && selectTask(
            {
                task,
                time,
                selected,
                completed,
                id
            }
            )}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={item.concluido} aria-label="tarefa completada"></span>}
            <span className={item.lixo} aria-label="remover tarefa" onClick={() => {removeTask({task, time, selected, completed, id})}}></span>
        </li>
    )
}