// src/App.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Culture from './pages/Culture';
import Language from './pages/Language';
import History from './pages/History';
import Contact from './pages/Contact';
import './App.css';

// 封装导航链接组件
const NavLinkItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/home' && location.pathname === '/');
  
  return (
    <Link 
      to={to} 
      className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
    >
      {children}
    </Link>
  );
};

function App() {
  const languagePack = {
    es: {
      logoText: '珑骢',
      navigation: {
        home: 'INICIO',
        culture: 'CULTURA',
        language: 'IDIOMA',
        history: 'HISTORIA',
        contact: 'CONTACTO'
      },
      switchButtonText: 'English'
    },
    en: {
      logoText: '珑骢',
      navigation: {
        home: 'START',
        culture: 'CULTURE',
        language: 'LANGUAGE',
        history: 'HISTORY',
        contact: 'CONTACT'
      },
      switchButtonText: 'Español'
    }
  };

  const [currentLanguage, setCurrentLanguage] = useState('en');
  const switchLanguage = () => {
    setCurrentLanguage(currentLanguage === 'es' ? 'en' : 'es');
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* 导航栏（悬浮在背景图上） */}
        <nav className="navigation-bar">
          <div className="nav-left">
            <Link to="/" className="nav-logo">{languagePack[currentLanguage].logoText}</Link>
            <button className="language-switch-button" onClick={switchLanguage}>
              {languagePack[currentLanguage].switchButtonText}
            </button>
          </div>

          <div className="nav-links">
            <NavLinkItem to="/home">{languagePack[currentLanguage].navigation.home}</NavLinkItem>
            <NavLinkItem to="/culture">{languagePack[currentLanguage].navigation.culture}</NavLinkItem>
            <NavLinkItem to="/language">{languagePack[currentLanguage].navigation.language}</NavLinkItem>
            <NavLinkItem to="/history">{languagePack[currentLanguage].navigation.history}</NavLinkItem>
            <NavLinkItem to="/contact">{languagePack[currentLanguage].navigation.contact}</NavLinkItem>
          </div>

          <div className="nav-search-icon"><FaSearch /></div>
        </nav>

        {/* 路由区域：Home不包裹container（全屏），其他页面包裹 */}
        <Routes>
          <Route path="/" element={<Home currentLang={currentLanguage} />} />
          <Route path="/home" element={<Home currentLang={currentLanguage} />} />
          <Route path="/culture" element={
            <div className="page-content container">
              <Culture currentLang={currentLanguage} />
            </div>
          } />
          <Route path="/language" element={
            <div className="page-content container">
              <Language currentLang={currentLanguage} />
            </div>
          } />
          <Route path="/history" element={
            <div className="page-content container">
              <History currentLang={currentLanguage} />
            </div>
          } />
          <Route path="/contact" element={
            <div className="page-content container">
              <Contact currentLang={currentLanguage} />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;