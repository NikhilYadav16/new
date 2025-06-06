import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';       // <-- Your main React component
//import './style.css';          // <-- Your CSS (optional, if you have it)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
