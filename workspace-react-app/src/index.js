import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './workspacesrc/Library';
import Clock from './workspacesrc/Clock';
import CommentList from './workspacesrc/CommentList';
import NotificationList from './workspacesrc/NotificationList';
import Accomodate from './workspacesrc/Accommodate';
import UserStatus from './workspacesrc/UserStatus';
import Toggle from './workspacesrc/Toggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Library />
    <Clock />
    <CommentList />
    <NotificationList />
    <Accomodate />
    <Toggle />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
