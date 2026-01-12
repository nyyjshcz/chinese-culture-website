import React from 'react';
import './Home.css'; // 导入外部样式

const Home = ({ currentLang }) => {
  return (
    <div className="home-container">
      <h1>{currentLang === 'en' ? 'Welcome to Our Website' : 'Bienvenido a Nuestro Sitio Web'}</h1>
      <p>{currentLang === 'en' ? 'Explore culture, language and history' : 'Explora cultura, idioma e historia'}</p>
    </div>
  );
};

export default Home;