// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "../../hooks/useLanguage";
// import { texts } from "../../locales/texts";
// import "./RegisterPage.css";
// import '../../App.css';
// import logo from "../../assets/logo.png";
// import flagsVI from "../../flags/vn.png";
// import flagsEN from "../../flags/en.png";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// function RegisterPage() {
//     const navigate = useNavigate();
//     const { lang, changeLanguage } = useLanguage();
//     const [open, setOpen] = useState(false);
//     const [showPass, setShowPass] = useState(false);
//     const [showConfirm, setShowConfirm] = useState(false);

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         confirmPassword: "",
//         agreeToTerms: false
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

//     const toggleConfirmPasswordVisibility = () => {
//         setShowConfirm(!showConfirm);
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
//                     <h1 className="login-title">{t.register.createAccount}</h1>
                    
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         {/* Email Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.register.email}</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 className="lg-form-input"
//                                 placeholder={t.register.emailPlaceholder}
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         {/* Password Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.register.password}</label>
//                             <div className="lg-password-input-container">
//                                 <input
//                                     type={showPass ? "text" : "password"}
//                                     name="password"
//                                     className="lg-password-input"
//                                     placeholder={t.register.passwordPlaceholder}
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

//                         {/* Confirm Password Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.register.confirmPassword}</label>
//                             <div className="lg-password-input-container">
//                                 <input
//                                     type={showConfirm ? "text" : "password"}
//                                     name="confirmPassword"
//                                     className="lg-password-input"
//                                     placeholder={t.register.passwordPlaceholder}
//                                     value={formData.confirmPassword}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     className="lg-password-toggle"
//                                     onClick={toggleConfirmPasswordVisibility}
//                                 >
//                                     {showConfirm ? <FaEyeSlash /> : <FaEye />}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Terms Checkbox */}
//                         <div className="lg-checkbox-group">
//                             <input
//                                 type="checkbox"
//                                 id="agreeTerms"
//                                 name="agreeToTerms"
//                                 checked={formData.agreeToTerms}
//                                 onChange={handleInputChange}
//                                 className="lg-checkbox-input"
//                             />
//                             <label htmlFor="agreeTerms" className="lg-checkbox-label">
//                                 {lang === "vi" ? (
//                                 <>
//                                     Tôi đồng ý với{" "}
//                                     <span
//                                     className="rgp-link-text"
//                                     onClick={() => console.log("Điều khoản clicked!")}
//                                     >
//                                     Điều khoản
//                                     </span>{" "}
//                                     và{" "}
//                                     <span
//                                     className="rgp-link-text"
//                                     onClick={() => console.log("Chính sách bảo mật clicked!")}
//                                     >
//                                     Chính sách bảo mật
//                                     </span>
//                                 </>
//                                 ) : (
//                                 <>
//                                     I agree to the{" "}
//                                     <span
//                                     className="rgp-link-text"
//                                     onClick={() => console.log("Terms clicked!")}
//                                     >
//                                     Terms
//                                     </span>{" "}
//                                     and{" "}
//                                     <span
//                                     className="rgp-link-text"
//                                     onClick={() => console.log("Privacy policy clicked!")}
//                                     >
//                                     Privacy Policy
//                                     </span>
//                                 </>
//                                 )}
//                             </label>
//                         </div>


//                         {/* Buttons */}
//                         <div className="auth-button-group">
//                             <button type="submit" className="auth-btn rgp-primary" onClick={() => navigate("/")}>
//                                 {t.register.createAccountBtn}
//                             </button>
//                             <button type="button" className="auth-btn rgp-google-btn">
//                                 <FcGoogle className="rgp-google-icon" />
//                                 {t.register.signUpGoogle}
//                             </button>
//                         </div>

//                         {/* Sign in link */}
//                         <div className="rgp-signin-link">
//                             <span>{t.register.haveAccount} </span>
//                             <button 
//                                 type="button" 
//                                 className="rgp-link-btn"
//                                 onClick={() => navigate("/signin")}
//                             >
//                                 {t.register.signIn}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default RegisterPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import "./RegisterPage.css";
import "../../App.css";
import logo from "../../assets/logo.png";
import flagsVI from "../../flags/vn.png";
import flagsEN from "../../flags/en.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function RegisterPage() {
    const navigate = useNavigate();
    const { lang, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const t = texts[lang];

    const currentLang =
        lang === "en"
            ? { code: "EN", flag: flagsEN }
            : { code: "VI", flag: flagsVI };
    const otherLang =
        lang === "en"
            ? { code: "VI", flag: flagsVI }
            : { code: "EN", flag: flagsEN };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra đơn giản
        if (!formData.agreeToTerms) {
            setMessage("❗Bạn phải đồng ý với điều khoản sử dụng.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setMessage("❗Mật khẩu xác nhận không khớp.");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            // Gọi API backend
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                email: formData.email,
                password: formData.password,
            });

            setMessage("✅ Đăng ký thành công! Kiểm tra email để xác minh tài khoản.");
            console.log("Register success:", res.data);

            // Chuyển hướng đến trang xác minh sau 2 giây
            setTimeout(() => navigate("/"), 2000);
        } catch (err) {
            console.error("Register error:", err);
            if (err.response && err.response.data && err.response.data.message) {
                setMessage(`❌ ${err.response.data.message}`);
            } else {
                setMessage("❌ Lỗi không xác định khi đăng ký.");
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => setShowPass(!showPass);
    const toggleConfirmPasswordVisibility = () => setShowConfirm(!showConfirm);

    return (
        <div className="lg-container">
            {/* Logo */}
            <div className="lg-logo">
                <img src={logo} alt="Logo" />
            </div>

            {/* Language Switch */}
            <div className="lg-lang-switch">
                <button
                className="lg-lang-btn lg-active"
                onClick={() => setOpen(!open)}
                >
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
                    <h1 className="login-title">{t.register.createAccount}</h1>

                    <form className="login-form" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="lg-form-group">
                            <label className="lg-form-label">{t.register.email}</label>
                            <input
                                type="email"
                                name="email"
                                className="lg-form-input"
                                placeholder={t.register.emailPlaceholder}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="lg-form-group">
                            <label className="lg-form-label">{t.register.password}</label>
                            <div className="lg-password-input-container">
                                <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                className="lg-password-input"
                                placeholder={t.register.passwordPlaceholder}
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

                        {/* Confirm Password */}
                        <div className="lg-form-group">
                            <label className="lg-form-label">
                                {t.register.confirmPassword}
                            </label>
                            <div className="lg-password-input-container">
                                <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                className="lg-password-input"
                                placeholder={t.register.passwordPlaceholder}
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                />
                                <button
                                type="button"
                                className="lg-password-toggle"
                                onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="lg-checkbox-group">
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                                className="lg-checkbox-input"
                            />
                            <label htmlFor="agreeTerms" className="lg-checkbox-label">
                                {lang === "vi"
                                ? "Tôi đồng ý với Điều khoản và Chính sách bảo mật"
                                : "I agree to the Terms and Privacy Policy"}
                            </label>
                        </div>

                        {/* Status message */}
                        {message && (
                            <p
                                style={{
                                color: message.startsWith("✅") ? "green" : "red",
                                marginTop: "10px",
                                fontWeight: "500",
                                }}
                            >
                                {message}
                            </p>
                        )}

                        {/* Buttons */}
                        <div className="auth-button-group">
                            <button
                                type="submit"
                                className="auth-btn rgp-primary"
                                disabled={loading}
                            >
                                {loading ? "Đang đăng ký..." : t.register.createAccountBtn}
                            </button>
                            <button type="button" className="auth-btn rgp-google-btn">
                                <FcGoogle className="rgp-google-icon" />
                                {t.register.signUpGoogle}
                            </button>
                        </div>

                        {/* Signin link */}
                        <div className="rgp-signin-link">
                            <span>{t.register.haveAccount} </span>
                            <button
                                type="button"
                                className="rgp-link-btn"
                                onClick={() => navigate("/signin")}
                            >
                                {t.register.signIn}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
