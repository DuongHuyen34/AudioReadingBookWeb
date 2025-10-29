import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import "./LoginPage.css";
import '../../App.css';
import logo from "../../assets/logo.png";
import flagsVI from "../../flags/vn.png";
import flagsEN from "../../flags/en.png";

function LoginPage() {
    const navigate = useNavigate();
    const { lang, changeLanguage } = useLanguage(); // ✅ Lấy từ Context
    const [open, setOpen] = useState(false); // trạng thái mở menu ngôn ngữ

    const t = texts[lang]; // ✅ Lấy texts theo ngôn ngữ hiện tại

    // Hiển thị flag + text theo ngôn ngữ
    const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
    const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

    return (
        <div className="lg-container">
            {/* Logo */}
            <div className="lg-logo">
                <img src={logo} alt="Logo" />
            </div>

            {/* Language Switch */}
            <div className="lg-lang-switch">
                <button className="lg-lang-btn lg-active" onClick={() => setOpen(!open)}>
                    {currentLang.code} <img src={currentLang.flag} alt="Lang" />
                </button>

                {open && (
                    <button
                        className="lg-lang-btn"
                        onClick={() => {
                            changeLanguage(otherLang.code.toLowerCase());
                            setOpen(false); // chọn xong thì đóng menu
                        }}
                    >
                        {otherLang.code} <img src={otherLang.flag} alt="Lang" />
                    </button>
                )}
            </div>

            {/* Right Panel */}
            <div className="lg-right-panel">
                <div className="login-content">
                    <h1 className="title-login">{t.login.getStarted}</h1>
                    <h2 className="subtitle-login">{t.login.welcome}</h2>
                    
                    <div className="button-group-login">
                        <button className="btn-login login-primary" onClick={() => navigate("/register")}>
                            {t.login.create}
                        </button>
                        <button className="btn-login login-secondary" onClick={() => navigate("/signin")}>
                            {t.login.signin}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
