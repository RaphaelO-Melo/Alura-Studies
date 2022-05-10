import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
        <div>
          <Form/>
          <List/>
        </div>
    </div>
  );
}

export default App;