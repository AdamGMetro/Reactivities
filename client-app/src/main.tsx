import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import './app/layout/styles.css'
import { StoreContext, store } from './app/stores/store';



ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
    <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

 