import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const users = [
  {
    name: 'Chalo',
    lastname: 'Salvador Pesantes'
  },
  {
    name: 'María',
    lastname: 'Chavez'
  },
  {
    name: 'Carlos',
    lastname: 'Perez'
    
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App users={users} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
