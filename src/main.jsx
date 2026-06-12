// main.jsx — Vite + React entry point
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';   // ← rename your main.css to index.css, or change this path
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
