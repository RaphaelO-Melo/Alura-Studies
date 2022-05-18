import { ITask } from '../../../types/task';
import item from './item.module.scss';

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void
}

export default function Item({task, time, selected, completed, id, selectTask}: Props) {
    
    return(
        <li className={`${item.item} ${selected ? item.itemSelecionado : ''}`}
        onClick={() => selectTask(
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
        </li>
    )
}