// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLanguage } from '../../hooks/useLanguage';
// import { texts } from "../../locales/texts";
// import headerBg from '../../assets/bg_header.png';
// import logo from '../../assets/logoL.png';
// import flagsVI from "../../flags/vn.png";
// import flagsEN from "../../flags/en.png";
// import './Header.css';

// import bellIcon from '../../assets/icons/bell.png';
// import cartIcon from '../../assets/icons/cart.png';
// import userIcon from '../../assets/icons/user.png';


// function Header() {
//     const navigate = useNavigate();
//     const { lang, changeLanguage } = useLanguage();
//     const [open, setOpen] = useState(false);

//     const t = texts[lang];

//     // Hiển thị flag + text theo ngôn ngữ
//     const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
//     const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

//     return (
//         <header className="header" style={{ '--header-bg': `url(${headerBg})` }}>
//             <div className="header-container">
//                 <div className="hd-logo-section">
//                     <h1 className="hd-logo" onClick={() => navigate("/homepage")}>
//                         <img src={logo} alt='logo'/>
//                         READIO
//                     </h1>
//                 </div>

//                 <nav className="nav-menu">
//                     <a href="/homepage" className="nav-link">{t.header.home}</a>
//                     <a href="/bookspage" className="nav-link">{t.header.book}</a>
//                     <a href="/authors" className="nav-link">{t.header.authors}</a>
//                     <a href="/rankings" className="nav-link">{t.header.rank}</a>
//                     <a href="/support" className="nav-link">{t.header.support}</a>
//                 </nav>

//                 <div className="header-actions">
//                     {/* Icons Section */}
//                     <div className="header-icons">
//                         {/* Notification Bell */}
//                         <div className="icon-wrapper">
//                             <button className="icon-btn notification-btn">
//                                 <img src={bellIcon} alt="Notifications" />
//                                 <span className="notification-badge">3</span>
//                             </button>
//                         </div>

//                         {/* Shopping Cart */}
//                         <div className="icon-wrapper">
//                             <button className="icon-btn cart-btn">
//                                 <img src={cartIcon} alt="Shopping Cart" />
//                                 <span className="cart-badge">2</span>
//                             </button>
//                         </div>

//                         {/* User Profile */}
//                         <div className="icon-wrapper">
//                             <button className="icon-btn user-btn">
//                                 <img src={userIcon} alt="User Profile" />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Language Switch */}
//                     <div className="hd-lang-switch">
//                         <button className="hd-lang-btn active" onClick={() => setOpen(!open)}>
//                             {currentLang.code} <img src={currentLang.flag} alt="Lang" />
//                         </button>

//                         {open && (
//                             <button
//                                 className="hd-lang-btn"
//                                 onClick={() => {
//                                     changeLanguage(otherLang.code.toLowerCase());
//                                     setOpen(false); // chọn xong thì đóng menu
//                                 }}
//                             >
//                                 {otherLang.code} <img src={otherLang.flag} alt="Lang" />
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { texts } from "../../locales/texts";
import headerBg from '../../assets/bg_header.png';
import logo from '../../assets/logoL.png';
import flagsVI from "../../flags/vn.png";
import flagsEN from "../../flags/en.png";
import './Header.css';

import bellIcon from '../../assets/icons/bell.png';
import cartIcon from '../../assets/icons/cart.png';
import userIcon from '../../assets/icons/user.png';

function Header() {
    const navigate = useNavigate();
    const { lang, changeLanguage } = useLanguage();
    const [openLang, setOpenLang] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const userMenuRef = useRef(null);

    const t = texts[lang];

    // Hiển thị flag + text theo ngôn ngữ
    const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
    const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

    // Đóng dropdown khi click bên ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setOpenUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Xử lý click User Profile
    const handleUserClick = () => {
        setOpenUserMenu(!openUserMenu);
        setOpenLang(false); // Đóng language menu nếu đang mở
    };

    // Xử lý chọn menu item
    const handleMenuItemClick = (action) => {
        setOpenUserMenu(false);
        switch (action) {
            case 'account':
                navigate('/account');
                break;
            case 'profile':
                navigate('/profile');
                break;
            case 'login':
                navigate('/login');
                break;
            case 'logout':
                // Xử lý đăng xuất
                console.log('Đăng xuất');
                break;
            default:
                break;
        }
    };

    // Kiểm tra trạng thái đăng nhập (tạm thời để false)
    const isLoggedIn =  true; // Thay bằng state thực tế từ context/redux

    return (
        <header className="header" style={{ '--header-bg': `url(${headerBg})` }}>
            <div className="header-container">
                <div className="hd-logo-section">
                    <h1 className="hd-logo" onClick={() => navigate("/")}>
                        <img src={logo} alt='logo'/>
                        READIO
                    </h1>
                </div>

                <nav className="nav-menu">
                    <a href="/" className="nav-link">{t.header.home}</a>
                    <a href="/bookspage" className="nav-link">{t.header.book}</a>
                    <a href="/authors" className="nav-link">{t.header.authors}</a>
                    <a href="/rankings" className="nav-link">{t.header.rank}</a>
                    <a href="/support" className="nav-link">{t.header.support}</a>
                </nav>

                <div className="header-actions">
                    {/* Icons Section */}
                    <div className="header-icons">
                        {/* Notification Bell */}
                        <div className="icon-wrapper">
                            <button className="icon-btn notification-btn">
                                <img src={bellIcon} alt="Notifications" />
                                <span className="notification-badge">3</span>
                            </button>
                        </div>

                        {/* Shopping Cart */}
                        <div className="icon-wrapper">
                            <button className="icon-btn cart-btn">
                                <img src={cartIcon} alt="Shopping Cart" />
                                <span className="cart-badge">2</span>
                            </button>
                        </div>

                        {/* User Profile với Dropdown */}
                        <div className="icon-wrapper" ref={userMenuRef}>
                            <button 
                                className={`icon-btn user-btn ${openUserMenu ? 'active' : ''}`}
                                onClick={handleUserClick}
                            >
                                <img src={userIcon} alt="User Profile" />
                            </button>

                            {/* User Dropdown Menu */}
                            {openUserMenu && (
                                <div className="user-dropdown-menu">
                                    {isLoggedIn ? (
                                        // Menu khi đã đăng nhập
                                        <>
                                            <div className="user-info">
                                                <div className="user-avatar">
                                                    <img src={userIcon} alt="Avatar" />
                                                </div>
                                                <div className="user-details">
                                                    <span className="user-name">Nguyễn Văn A</span>
                                                    <span className="user-email">nguyenvana@email.com</span>
                                                </div>
                                            </div>
                                            <div className="dropdown-divider"></div>
                                            <button 
                                                className="dropdown-item"
                                                onClick={() => handleMenuItemClick('account')}
                                            >
                                                <span className="item-icon">👤</span>
                                                {t.header.myAccount || "Tài khoản của tôi"}
                                            </button>
                                            <button 
                                                className="dropdown-item"
                                                onClick={() => handleMenuItemClick('profile')}
                                            >
                                                <span className="item-icon">⚙️</span>
                                                {t.header.editProfile || "Chỉnh sửa hồ sơ"}
                                            </button>
                                            <div className="dropdown-divider"></div>
                                            <button 
                                                className="dropdown-item logout-item"
                                                onClick={() => handleMenuItemClick('logout')}
                                            >
                                                <span className="item-icon">🚪</span>
                                                {t.header.logout || "Đăng xuất"}
                                            </button>
                                        </>
                                    ) : (
                                        // Menu khi chưa đăng nhập
                                        <>
                                            <button 
                                                className="dropdown-item"
                                                onClick={() => handleMenuItemClick('login')}
                                            >
                                                <span className="item-icon">🔑</span>
                                                {t.header.login || "Đăng nhập"}
                                            </button>
                                            <button 
                                                className="dropdown-item"
                                                onClick={() => handleMenuItemClick('account')}
                                            >
                                                <span className="item-icon">👤</span>
                                                {t.header.register || "Đăng ký"}
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Language Switch */}
                    <div className="hd-lang-switch">
                        <button 
                            className={`hd-lang-btn ${openLang ? 'active' : ''}`} 
                            onClick={() => {
                                setOpenLang(!openLang);
                                setOpenUserMenu(false); // Đóng user menu nếu đang mở
                            }}
                        >
                            {currentLang.code} <img src={currentLang.flag} alt="Lang" />
                        </button>

                        {openLang && (
                            <button
                                className="hd-lang-btn"
                                onClick={() => {
                                    changeLanguage(otherLang.code.toLowerCase());
                                    setOpenLang(false);
                                }}
                            >
                                {otherLang.code} <img src={otherLang.flag} alt="Lang" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;