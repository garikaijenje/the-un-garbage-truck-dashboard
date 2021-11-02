import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
// import "./tailwind/style.css"
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes />
      </Router>
  </React.StrictMode>,
  document.getElementById('app')
);
