import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <div className="app-container" style={{ background: '#f4f4f4', minHeight: '100vh' }}>
        <App />
      </div>
    </SnackbarProvider>
  </BrowserRouter>
);
