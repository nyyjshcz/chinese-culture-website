// src/App.js - 定义应用骨架、导航和路由
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Culture from './pages/Culture';
import Language from './pages/Language';
import History from './pages/History';
import Contact from './pages/Contact';
import './App.css';

// 顶部导航中的单个链接项
const NavLinkItem = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to === '/home' && location.pathname === '/');

    return (
        <Link
            to={to}
            className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

function App() {
    // 导航及按钮文案的多语言配置
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 切换中英文 / 西班牙文
    const switchLanguage = () => {
        setCurrentLanguage(currentLanguage === 'es' ? 'en' : 'es');
    };

    // 切换移动端菜单
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 关闭移动端菜单
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <BrowserRouter>
            <div className="app-container">
                {/* 顶部导航栏，悬浮在首页背景图上 */}
                <nav className="navigation-bar">
                    <div className="nav-left">
                        <div className="menu-icon" onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                        <Link to="/" className="nav-logo" onClick={closeMenu}>
                            {languagePack[currentLanguage].logoText}
                        </Link>
                        <button
                            className="language-switch-button"
                            onClick={switchLanguage}
                        >
                            {languagePack[currentLanguage].switchButtonText}
                        </button>
                    </div>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <NavLinkItem to="/home" onClick={closeMenu}>
                            {languagePack[currentLanguage].navigation.home}
                        </NavLinkItem>
                        <NavLinkItem to="/culture" onClick={closeMenu}>
                            {languagePack[currentLanguage].navigation.culture}
                        </NavLinkItem>
                        <NavLinkItem to="/language" onClick={closeMenu}>
                            {languagePack[currentLanguage].navigation.language}
                        </NavLinkItem>
                        <NavLinkItem to="/history" onClick={closeMenu}>
                            {languagePack[currentLanguage].navigation.history}
                        </NavLinkItem>
                        <NavLinkItem to="/contact" onClick={closeMenu}>
                            {languagePack[currentLanguage].navigation.contact}
                        </NavLinkItem>
                    </div>

                    <div className="nav-search-icon">
                        <FaSearch />
                    </div>
                </nav>

                {/* 路由区域：Home 全屏显示，其他页面使用 container 居中内容 */}
                <Routes>
                    <Route
                        path="/"
                        element={<Home currentLang={currentLanguage} />}
                    />
                    <Route
                        path="/home"
                        element={<Home currentLang={currentLanguage} />}
                    />
                    <Route
                        path="/culture"
                        element={(
                            <div className="page-content container">
                                <Culture currentLang={currentLanguage} />
                            </div>
                        )}
                    />
                    <Route
                        path="/language"
                        element={(
                            <div className="page-content container">
                                <Language currentLang={currentLanguage} />
                            </div>
                        )}
                    />
                    <Route
                        path="/history"
                        element={(
                            <div className="page-content container">
                                <History currentLang={currentLanguage} />
                            </div>
                        )}
                    />
                    <Route
                        path="/contact"
                        element={(
                            <div className="page-content container">
                                <Contact currentLang={currentLanguage} />
                            </div>
                        )}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
