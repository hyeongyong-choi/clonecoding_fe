import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './redux/config/ConfigStore'
import axios from 'axios'


// axios.defaults.baseURL = 'http://43.200.170.123';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
