import React from 'react';
import './App.css';
import MyView from './component/MyView';

function App() {
  return (
    <div className="App">
      <MyView  title="这是第1个" caption="first"/>
      <br/>
      <hr/>
      <MyView  title="这是第2个" caption="second"/>
      <br/>
      <hr/>
      <MyView  title="这是第3个" caption="third"/>
    </div>
  );
}

export default App;
