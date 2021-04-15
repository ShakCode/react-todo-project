import React from 'react';
import ReactDOM from 'react-dom';
//component file
import TodoContainer from "./functionBased/components/TodoContainer.js";
//stylesheet
import "./functionBased/App.css";
//browser router library
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer/>
    </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
 );
