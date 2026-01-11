import React, { useState, useEffect } from 'react'; // 新增 useEffect
import { FaSearch } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'; // 新增 useLocation
import Home from './pages/Home';
import Culture from './pages/Culture';
import Language from './pages/Language';
import History from './pages/History';
import Contact from './pages/Contact';
import './App.css';

// 封装导航链接组件（方便判断选中态）
const NavLinkItem = ({ to, children }) => {
  const location = useLocation(); // 获取当前路由路径
  // 判断当前路径是否匹配目标路径（根路径特殊处理：/ 和 /home 都匹配home链接）
  const isActive = location.pathname === to || (to === '/home' && location.pathname === '/');
  
  return (
    <Link 
      to={to} 
      // 匹配时添加 active 类名，用于选中态样式
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
                <nav className="navigation-bar">
                    <div className="nav-left">
                        <Link to="/" className="nav-logo">{languagePack[currentLanguage].logoText}</Link>
                        <button className="language-switch-button" onClick={switchLanguage}>
                            {languagePack[currentLanguage].switchButtonText}
                        </button>
                    </div>

                    <div className="nav-links">
                        {/* 替换为封装的 NavLinkItem 组件，自动判断选中态 */}
                        <NavLinkItem to="/home">{languagePack[currentLanguage].navigation.home}</NavLinkItem>
                        <NavLinkItem to="/culture">{languagePack[currentLanguage].navigation.culture}</NavLinkItem>
                        <NavLinkItem to="/language">{languagePack[currentLanguage].navigation.language}</NavLinkItem>
                        <NavLinkItem to="/history">{languagePack[currentLanguage].navigation.history}</NavLinkItem>
                        <NavLinkItem to="/contact">{languagePack[currentLanguage].navigation.contact}</NavLinkItem>
                    </div>

                    <div className="nav-search-icon"><FaSearch /></div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home currentLang={currentLanguage} />} />
                    <Route path="/home" element={<Home currentLang={currentLanguage} />} />
                    <Route path="/culture" element={<Culture currentLang={currentLanguage} />} />
                    <Route path="/language" element={<Language currentLang={currentLanguage} />} />
                    <Route path="/history" element={<History currentLang={currentLanguage} />} />
                    <Route path="/contact" element={<Contact currentLang={currentLanguage} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;