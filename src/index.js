// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入全局样式（必须在App前导入）
import './styles/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);