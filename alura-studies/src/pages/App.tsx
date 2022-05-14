import Form from '../components/Form';
import List from '../components/List';
import Chronometer from '../components/Chronometer';

import style from './App.module.scss';
import { useState } from 'react';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
        <div className={style.dContents}>
          <Form setTasks={setTasks}/>
          <Chronometer/>
          <List tasks={tasks}/>
        </div>
    </div>
  );
}

export default App;