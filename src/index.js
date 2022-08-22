import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './redux/config/ConfigStore'
import axios from 'axios'


// axios.defaults.baseURL = '';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
