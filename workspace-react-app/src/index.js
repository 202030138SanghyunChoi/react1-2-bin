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
import Toggle from './finalterm/Toggle';
import MyButton from './workspacesrc/MyButton';
import LoginControl from './workspacesrc/LoginControl';
import MainPage from './workspacesrc/MainPage';
import LandingPage from './workspacesrc/LandingPage';
import NumberList from './workspacesrc/NumberList';
import AttendanceBook from './workspacesrc/AttendanceBook';
import NameForm from './workspacesrc/NameForm';
import RequestForm from './workspacesrc/RequestForm';
import FruitSelect from './workspacesrc/FruitSelect';
import SignUp from './workspacesrc/SignUp';
import Calculator from './workspacesrc/Calculator';
import WelcomeDialog from './workspacesrc/WelcomeDialog';
import TestApp from './workspacesrc/SplitPane';
import SignUpDialog from './workspacesrc/SignUpDialog';
import ProfileCard from './workspacesrc/ProfileCard';
import ContextApp from './workspacesrc/ContextApp';
import DarkOrLight from './workspacesrc/DarkOrLight';
import StyleMainPage from './workspacesrc/StyleMainPage';

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
    <MyButton />
    <LoginControl />
    <MainPage />
    <LandingPage />
    <NumberList />
    <AttendanceBook />
    <NameForm />
    <RequestForm />
    <FruitSelect />
    <SignUp />
    <Calculator />
    <WelcomeDialog />
    <TestApp />
    <SignUpDialog/>
    <ProfileCard />
    <ContextApp />
    <DarkOrLight />
    <StyleMainPage />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
