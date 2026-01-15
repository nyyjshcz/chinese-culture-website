// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = ({ currentLang }) => {
  // 多语言文本配置
  const homeText = {
    es: {
      title: "CHINA UNA CULTURA LARGA",
      btn1: "Explorar",
      btn2: "Sobre nosotros"
    },
    en: {
      title: "CHINA A LONG CULTURE",
      btn1: "Explore",
      btn2: "About Us"
    }
  };
  const text = homeText[currentLang];

  return (
    <div className="home-container">
      {/* 标题 */}
      <h1 className="home-title">{text.title}</h1>
      {/* 双按钮容器 */}
      <div className="home-btn-group">
        <button className="btn btn-home-outline">{text.btn1}</button>
        <button className="btn btn-home-outline">{text.btn2}</button>
      </div>
    </div>
  );
};

export default Home;