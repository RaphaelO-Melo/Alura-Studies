import Form from '../components/Form';
import List from '../components/List';
import Chronometer from '../components/Chronometer';

import style from './App.module.scss';
import { useState } from 'react';
import { ITask } from '../types/task';

function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask){
    setSelected(selectedTask);
    setTasks(
      oldTasks => oldTasks.map(
        task => ({
          ...task,
          selected: task.id === selectedTask.id
        })
      )
    )
  }

  return (
    <div className={style.AppStyle}>
        <div className={style.dContents}>
          <Form setTasks={setTasks}/>
          <Chronometer selected={selected}/>
          <List tasks={tasks} selectTask={selectTask}/>
        </div>
    </div>
  );
}

export default App;