/** Import react dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// @ts-ignore
import App from './App.tsx';
import './index.css';

/** Create and init react app */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:pageNumber" element={<App animate={true} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
