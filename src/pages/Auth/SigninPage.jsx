// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "../../hooks/useLanguage";
// import { texts } from "../../locales/texts";
// import "./SigninPage.css";
// import '../../App.css';
// import logo from "../../assets/logo.png";
// import flagsVI from "../../flags/vn.png";
// import flagsEN from "../../flags/en.png";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";

// function SigninPage() {
//     const navigate = useNavigate();
//     const { lang, changeLanguage } = useLanguage();
//     const [open, setOpen] = useState(false);
//     const [showPass, setShowPass] = useState(false);

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         stayToSignedIn: false
//     });

//     const t = texts[lang];

//     const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
//     const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Xử lý đăng ký ở đây
//         console.log(formData);
//     };

//     const togglePasswordVisibility = () => {
//         setShowPass(!showPass);
//     };

//     return (
//         <div className="lg-container">
//             {/* Logo */}
//             <div className="lg-logo">
//                 <img src={logo} alt="Logo" />
//             </div>

//             {/* Language Switch */}
//             <div className="lg-lang-switch">
//                 <button className="lg-lang-btn lg-active" onClick={() => setOpen(!open)}>
//                     {currentLang.code} <img src={currentLang.flag} alt="Lang" />
//                 </button>

//                 {open && (
//                     <button
//                         className="lg-lang-btn"
//                         onClick={() => {
//                             changeLanguage(otherLang.code.toLowerCase());
//                             setOpen(false);
//                         }}
//                     >
//                         {otherLang.code} <img src={otherLang.flag} alt="Lang" />
//                     </button>
//                 )}
//             </div>

//             {/* Right Panel */}
//             <div className="lg-right-panel">
//                 <div className="login-content">
//                     <h1 className="login-title">{t.signin.logIn}</h1>
                    
//                     {/* Buttons */}
//                     <div className="auth-button-group">
//                         <button type="button" className="auth-btn sgp-google-btn">
//                             <FcGoogle className="sgp-google-icon" />
//                             {t.signin.signUpGoogle}
//                         </button>
//                         <button type="button" className="auth-btn sgp-facebook-btn">
//                             <FaFacebook className="sgp-facebook-icon" />
//                             {t.signin.signUpFacebook}
//                         </button>
//                     </div>

//                     {/* Divider với chữ "Or" */}
//                     <div className="sgp-divider">
//                         <span className="sgp-divider-line"></span>
//                         <span className="sgp-divider-text">{t.signin.or}</span>
//                         <span className="sgp-divider-line"></span>
//                     </div>
                    
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         {/* Email Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.signin.email}</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 className="lg-form-input"
//                                 placeholder={t.signin.emailPlaceholder}
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         {/* Password Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.signin.password}</label>
//                             <div className="lg-password-input-container">
//                                 <input
//                                     type={showPass ? "text" : "password"}
//                                     name="password"
//                                     className="lg-password-input"
//                                     placeholder={t.signin.passwordPlaceholder}
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     className="lg-password-toggle"
//                                     onClick={togglePasswordVisibility}
//                                 >
//                                     {showPass ? <FaEyeSlash /> : <FaEye />}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Terms Checkbox */}
//                         <div className="sgp-checkbox-forgot-group">
//                             <div className="lg-checkbox-group">
//                                 <input
//                                     type="checkbox"
//                                     id="staySignedIn"
//                                     name="stayToSignedIn"
//                                     checked={formData.stayToSignedIn}
//                                     onChange={handleInputChange}
//                                     className="lg-checkbox-input"
//                                 />
//                                 <label htmlFor="staySignedIn" className="lg-checkbox-label">
//                                     {t.signin.staySignedIn}
//                                 </label>
//                             </div>
//                             <button type="button" className="sgp-link-forgot" onClick={() => navigate("/forgotpass")}>
//                                 {t.signin.forgotPass}
//                             </button>
//                         </div>

//                         {/* Buttons */}
//                         <div className="auth-button-group">
//                             <button 
//                                 type="submit" 
//                                 className="auth-btn sgp-login"
//                                 onClick={() => navigate("/homepage")}
//                             >
//                                 {t.signin.logInBtn}
//                             </button>
//                         </div>

//                         {/* Register link */}
//                         <div className="sgp-register-link">
//                             <span>{t.signin.needAccount} </span>
//                             <button 
//                                 type="button" 
//                                 className="sgp-link-btn"
//                                 onClick={() => navigate("/register")}
//                             >
//                                 {t.signin.createAccount}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SigninPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import "./SigninPage.css";
import '../../App.css';
import logo from "../../assets/logo.png";
import flagsVI from "../../flags/vn.png";
import flagsEN from "../../flags/en.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function SigninPage() {
    const navigate = useNavigate();
    const { lang, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false); // ✅ Trạng thái loading
    const [message, setMessage] = useState(""); // ✅ Thông báo lỗi/thành công

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        stayToSignedIn: false
    });

    const t = texts[lang];

    const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
    const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    };

    // ✅ Hàm xử lý đăng nhập
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/signin",
                {
                    email: formData.email,
                    password: formData.password,
                },
                { withCredentials: true } // Cho phép gửi cookie/token
            );

            console.log("Đăng nhập thành công:", res.data);

            // ✅ Lưu token nếu backend trả về
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }

            setMessage(res.data.message || t.signin.success || "Đăng nhập thành công!");

            // ✅ Chuyển hướng sang homepage sau 1 giây
            setTimeout(() => navigate("/"), 1000);
        } catch (err) {
            console.error("Lỗi đăng nhập:", err);
            setMessage(
                err.response?.data?.message ||
                t.signin.error ||
                "Đăng nhập thất bại, vui lòng kiểm tra lại thông tin!"
            );
        } finally {
            setLoading(false);
        }
    };

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
                            setOpen(false);
                        }}
                    >
                        {otherLang.code} <img src={otherLang.flag} alt="Lang" />
                    </button>
                )}
            </div>

            {/* Right Panel */}
            <div className="lg-right-panel">
                <div className="login-content">
                    <h1 className="login-title">{t.signin.logIn}</h1>
                    
                    {/* Buttons */}
                    <div className="auth-button-group">
                        <button type="button" className="auth-btn sgp-google-btn">
                            <FcGoogle className="sgp-google-icon" />
                            {t.signin.signUpGoogle}
                        </button>
                        <button type="button" className="auth-btn sgp-facebook-btn">
                            <FaFacebook className="sgp-facebook-icon" />
                            {t.signin.signUpFacebook}
                        </button>
                    </div>

                    {/* Divider với chữ "Or" */}
                    <div className="sgp-divider">
                        <span className="sgp-divider-line"></span>
                        <span className="sgp-divider-text">{t.signin.or}</span>
                        <span className="sgp-divider-line"></span>
                    </div>
                    
                    <form className="login-form" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="lg-form-group">
                            <label className="lg-form-label">{t.signin.email}</label>
                            <input
                                type="email"
                                name="email"
                                className="lg-form-input"
                                placeholder={t.signin.emailPlaceholder}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="lg-form-group">
                            <label className="lg-form-label">{t.signin.password}</label>
                            <div className="lg-password-input-container">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    className="lg-password-input"
                                    placeholder={t.signin.passwordPlaceholder}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="lg-password-toggle"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="sgp-checkbox-forgot-group">
                            <div className="lg-checkbox-group">
                                <input
                                    type="checkbox"
                                    id="staySignedIn"
                                    name="stayToSignedIn"
                                    checked={formData.stayToSignedIn}
                                    onChange={handleInputChange}
                                    className="lg-checkbox-input"
                                />
                                <label htmlFor="staySignedIn" className="lg-checkbox-label">
                                    {t.signin.staySignedIn}
                                </label>
                            </div>
                            <button type="button" className="sgp-link-forgot" onClick={() => navigate("/forgotpass")}>
                                {t.signin.forgotPass}
                            </button>
                        </div>

                        {/* Buttons */}
                        <div className="auth-button-group">
                            <button 
                                type="submit" 
                                className="auth-btn sgp-login"
                                disabled={loading}
                            >
                                {loading ? t.signin.loading || "Đang xử lý..." : t.signin.logInBtn}
                            </button>
                        </div>

                        {/* Thông báo */}
                        {message && <p className="signin-message">{message}</p>}

                        {/* Register link */}
                        <div className="sgp-register-link">
                            <span>{t.signin.needAccount} </span>
                            <button 
                                type="button" 
                                className="sgp-link-btn"
                                onClick={() => navigate("/register")}
                            >
                                {t.signin.createAccount}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
