// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "../../hooks/useLanguage";
// import { texts } from "../../locales/texts";
// import "./ForgotPass.css";
// import '../../App.css';
// import logo from "../../assets/logo.png";
// import flagsVI from "../../flags/vn.png";
// import flagsEN from "../../flags/en.png";

// function ForgotPass() {
//     const navigate = useNavigate();
//     const { lang, changeLanguage } = useLanguage();
//     const [open, setOpen] = useState(false);

//     const [formData, setFormData] = useState({
//         emailorphone: ""
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
//                     <h1 className="login-title">{t.forgotPassword.forgotPass}</h1>
//                     <h6 className="login-note">{t.forgotPassword.note}</h6>
                    
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         {/* Email Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.forgotPassword.emailOrPhone}</label>
//                             <input
//                                 type="emailOrPhone"
//                                 name="emailOrPhone"
//                                 className="lg-form-input"
//                                 placeholder={t.forgotPassword.emailPlaceholder}
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         {/* Buttons */}
//                         <button type="submit" className="auth-btn" onClick={() => navigate("/verify")}>
//                             {t.forgotPassword.sendCodeBtn}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ForgotPass;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import "./ForgotPass.css";
import '../../App.css';
import logo from "../../assets/logo.png";
import flagsVI from "../../flags/vn.png";
import flagsEN from "../../flags/en.png";

function ForgotPass() {
  const navigate = useNavigate();
  const { lang, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const t = texts[lang];
  const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
  const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");

      const res = await axios.post("http://localhost:5000/api/auth/forgot", {
        email,
      });

      setMessage("✅ Mã xác nhận đã được gửi đến email của bạn!");
      console.log("Forgot success:", res.data);

      // Lưu email vào localStorage để dùng lại ở trang Verify
      localStorage.setItem("resetEmail", email);

      setTimeout(() => navigate("/verify"), 1500);
    } catch (err) {
      console.error(err);
      setMessage("❌ Gửi thất bại. Vui lòng kiểm tra lại email.");
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
          <h1 className="login-title">{t.forgotPassword.forgotPass}</h1>
          <h6 className="login-note">{t.forgotPassword.note}</h6>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="lg-form-group">
              <label className="lg-form-label">{t.forgotPassword.emailOrPhone}</label>
              <input
                type="email"
                name="email"
                className="lg-form-input"
                placeholder={t.forgotPassword.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {message && (
              <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
                {message}
              </p>
            )}

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Đang gửi..." : t.forgotPassword.sendCodeBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
