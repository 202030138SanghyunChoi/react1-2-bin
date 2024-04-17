import logo from './logo.svg';
import './App.css';
import Library from './week03/Library';
import Clock from './week04/Clock';
import Hello from './week04/Hello';
import Welcome from './week05/Welcome';
import CommentList from './week05/CommentList';
import NotificationList from './week05/NotificationList';
import Notification from './week05/Notification';
import { StrictMode } from 'react';
import Counter from './week07/Counter';
import CounterUseEffect from './week07/CounterUseEffect';
import UserStatus from './week07/UserStatus';
import FocusButton from './week07/FocusButton';
import MeasureExample from './week07/MeasureExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NotificationList/>
      <Library/>
      <Clock/>
      <Hello/>
      <Welcome name = "홍길동"/>
      <Welcome name = "강감찬"/>
      <Welcome name = "이순신"/>
      <Welcome name = "최상현"/>
      <CommentList/>
      <Counter/>
      <CounterUseEffect/>
      <UserStatus/>
      <FocusButton/>
      <MeasureExample/>
    </div>
  );
}

export default App;
