import { ITask } from '../../../types/task';
import list from '../list.module.scss';

export default function Item({task, time, selected, completed, id}: ITask) {

    console.log(task, time, selected, completed, id);
    
    return(
        <li className={list.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}