import React from 'react';
import './app/layout/styles.css'
import { StoreContext, store } from './app/stores/store';
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

