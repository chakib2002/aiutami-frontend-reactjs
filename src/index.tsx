import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tw-elements';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './state/configureStore'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);

