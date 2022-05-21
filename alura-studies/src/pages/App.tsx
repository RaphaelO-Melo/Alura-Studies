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

  function endTask(){

    if(selected){

      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {

        if(task.id == selected.id){
          return {
            ...task,
            selected: false,
            completed: true
          }
        }

        return task;

      }));

    }

  }

  function removeTask(targetTask: ITask){
    
    setSelected(undefined);
    setTasks(oldTasks => oldTasks.filter(task => {
      return task.id != targetTask.id
    }));
    
  }

  return (
    <div className={style.AppStyle}>
        <div className={style.dContents}>
          <Form setTasks={setTasks}/>
          <Chronometer selected={selected} endTask={endTask}/>
          <List tasks={tasks} removeTask={removeTask} selectTask={selectTask}/>
        </div>
    </div>
  );
}

export default App;