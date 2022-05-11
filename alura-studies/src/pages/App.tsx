import Form from '../components/Form';
import List from '../components/List';
import Chronometer from '../components/Chronometer';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
        <div className={style.dContents}>
          <Form/>
          <Chronometer/>
          <List/>
        </div>
    </div>
  );
}

export default App;