import React from 'react';
import ReactDOM from 'react-dom/client';

import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import reducer from './reducer';
const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

