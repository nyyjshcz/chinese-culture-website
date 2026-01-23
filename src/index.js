// src/index.js - 应用入口，挂载 React 根组件
import React from 'react';
import ReactDOM from 'react-dom/client';
// 全局样式（需在 App 之前加载）
import './styles/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
