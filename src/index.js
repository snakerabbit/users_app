// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//
//
// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './App';

document.addEventListener("DOMContentLoaded", ()=>{
 const root = document.getElementById('root');
 const store = configureStore();
 ReactDOM.render(<App store={store}/>, root);
});
