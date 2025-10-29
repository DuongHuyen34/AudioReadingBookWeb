// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "../../hooks/useLanguage";
// import { texts } from "../../locales/texts";
// import "./Verify.css";
// import '../../App.css';
// import logo from "../../assets/logo.png";
// import flagsVI from "../../flags/vn.png";
// import flagsEN from "../../flags/en.png";

// function Verify() {
//     const navigate = useNavigate();
//     const { lang, changeLanguage } = useLanguage();
//     const [open, setOpen] = useState(false);

//     const [formData, setFormData] = useState({
//         code: ""
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
//                     <h1 className="login-title">{t.verify.verifyCode}</h1>
//                     <h6 className="login-note">{t.verify.note}</h6>
                    
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         {/* Code Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.verify.code}</label>
//                             <input
//                                 type="code"
//                                 name="code"
//                                 className="lg-form-input"
//                                 placeholder=""
//                                 value={formData.code}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         {/* Buttons */}
//                         <button type="submit" className="auth-btn" onClick={() => navigate("/createnewpass")}>
//                             {t.verify.verifyBtn}
//                         </button>

//                         {/* Resend code link */}
//                         <button 
//                             type="button" 
//                             className="ver-link-btn"
//                             onClick={() => navigate("/verify")}
//                         >
//                             {t.verify.resendCode}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Verify;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import "./Verify.css";
import '../../App.css';
import logo from "../../assets/logo.png";
import flagsVI from "../../flags/vn.png";
import flagsEN from "../../flags/en.png";

function Verify() {
  const navigate = useNavigate();
  const { lang, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("resetEmail");
  const t = texts[lang];
  const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
  const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("❌ Thiếu email! Vui lòng quay lại bước trước.");
      return;
    }

    if (!code.trim()) {
      setMessage("❌ Vui lòng nhập mã xác nhận!");
      return;
    }

    try {
      setLoading(true);
      // Gọi API tới backend để xác minh mã
      const res = await axios.post("http://localhost:5000/api/auth/reset", {
        email,
        code,
        newPassword: "TEMP_PLACEHOLDER" // Backend yêu cầu có newPassword để reset, nhưng ở đây ta chỉ xác minh bước đầu
      });

      if (res.data.message) {
        setMessage("✅ Mã xác nhận hợp lệ. Tiếp tục đặt lại mật khẩu...");
        localStorage.setItem("resetCode", code);
        setTimeout(() => navigate("/createnewpass"), 1500);
      }
    } catch (err) {
      console.error("Verification error:", err);
      const msg = err.response?.data?.message || "❌ Mã xác nhận không đúng hoặc đã hết hạn.";
      setMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg-container">
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

      <div className="lg-right-panel">
        <div className="login-content">
          <h1 className="login-title">{t.verify.verifyCode}</h1>
          <h6 className="login-note">{t.verify.note}</h6>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="lg-form-group">
              <label className="lg-form-label">{t.verify.code}</label>
              <input
                type="text"
                name="code"
                className="lg-form-input"
                placeholder="Nhập mã 6 số"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            {message && (
              <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>
            )}

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Đang xác minh..." : t.verify.verifyBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Verify;
