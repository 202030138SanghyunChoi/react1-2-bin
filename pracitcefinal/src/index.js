import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Toggle from './finalterm/Toggle';
import MyButton from './finalterm/MyButton';
import LoginControl from './finalterm/LoginControl';
import Counter from './finalterm/Counter';
import InLineLoginControl from './finalterm/InLineLoginControl';
import MainPage from './finalterm/MainPage';
import NumberList from './finalterm/NumberList';
import NameForm from './finalterm/NameForm';
import RequestForm from './finalterm/RequestForm';
import FruitSelect from './finalterm/FruitSelect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toggle />
    <MyButton />
    <LoginControl />
    <Counter />
    <InLineLoginControl />
    <MainPage />
    <NumberList />
    <NameForm />
    <RequestForm />
    <FruitSelect />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
