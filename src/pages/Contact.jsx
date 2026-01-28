// src/pages/Contact.jsx - 联系方式与个人信息
import React from 'react';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h2 className="title-main">Contact</h2>
                <p className="text-body">
                    Longcong Cultural Team welcomes collaboration. You can reach the contributor via:
                </p>
                <div style={{ marginTop: '1rem' }}>
                    <a className="footer-link" href="https://github.com/nyyjshcz" target="_blank" rel="noreferrer">
                        GitHub: nyyjshcz
                    </a>
                </div>
                <p className="text-body" style={{ marginTop: '0.5rem' }}>
                    Email: <a className="footer-link" href="mailto:hongchengze@qq.com">hongchengze@qq.com</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
