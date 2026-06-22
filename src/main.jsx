// main.jsx — Vite + React entry point
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';   // ← rename your main.css to index.css, or change this path
import App from './App';

import { HashRouter, Routes, Route  } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      </Routes>
    </HashRouter>
  </StrictMode>
);


