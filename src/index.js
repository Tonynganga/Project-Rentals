import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HouseContextProvider  from './components/HouseContext';
import { BrowserRouter as Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Route>
    <HouseContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HouseContextProvider>     
  </Route>
  
);

