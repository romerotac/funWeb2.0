import React from 'react';
import ReactDOMServer from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { hydrateRoot } from 'react-dom/client';
import {createRoot} from 'react-dom/client';
const container = document.getElementById('root');
/*
const root = hydrateRoot(container, 
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  );
*/

const root = createRoot(container, {hydrate: true});
root.render(
<React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</React.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
