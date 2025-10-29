// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "../../hooks/useLanguage";
// import { texts } from "../../locales/texts";
// import "./CreateNewPass.css";
// import '../../App.css';
// import logo from "../../assets/logo.png";
// import flagsVI from "../../flags/vn.png";
// import flagsEN from "../../flags/en.png";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function CreateNewPass() {
//     const navigate = useNavigate();
//     const { lang, changeLanguage } = useLanguage();
//     const [open, setOpen] = useState(false);
//     const [showPass, setShowPass] = useState(false);
//     const [showConfirm, setShowConfirm] = useState(false);

//     const [formData, setFormData] = useState({
//         password: "",
//         confirmPassword: ""
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
//                     <h1 className="login-title">{t.createNewPass.createNewPass}</h1>
//                     <h6 className="login-note">{t.createNewPass.note}</h6>
                    
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         {/* Password Field */}
//                         <div className="lg-form-group">
//                             <label className="lg-form-label">{t.createNewPass.password}</label>
//                             <div className="lg-password-input-container">
//                                 <input
//                                     type={showPass ? "text" : "password"}
//                                     name="password"
//                                     className="lg-password-input"
//                                     placeholder=""
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
//                             <label className="lg-form-label">{t.createNewPass.confirmPassword}</label>
//                             <div className="lg-password-input-container">
//                                 <input
//                                     type={showConfirm ? "text" : "password"}
//                                     name="confirmPassword"
//                                     className="lg-password-input"
//                                     placeholder=""
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

//                         {/* Buttons */}
//                         <button type="submit" className="auth-btn" onClick={() => navigate("/signin")}>
//                             {t.createNewPass.resetPassBtn}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CreateNewPass;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import "./CreateNewPass.css";
import '../../App.css';
import logo from "../../assets/logo.png";
import flagsVI from "../../flags/vn.png";
import flagsEN from "../../flags/en.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function CreateNewPass() {
  const navigate = useNavigate();
  const { lang, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const email = localStorage.getItem("resetEmail");
  const code = localStorage.getItem("resetCode");

  const t = texts[lang];
  const currentLang = lang === "en" ? { code: "EN", flag: flagsEN } : { code: "VI", flag: flagsVI };
  const otherLang = lang === "en" ? { code: "VI", flag: flagsVI } : { code: "EN", flag: flagsEN };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset", {
        email,
        code,
        newPassword: formData.password,
      });

      setMessage("✅ Đặt lại mật khẩu thành công!");
      console.log("Reset success:", res.data);

      // Xoá localStorage
      localStorage.removeItem("resetEmail");
      localStorage.removeItem("resetCode");

      setTimeout(() => navigate("/signin"), 2000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Đặt lại mật khẩu thất bại. Kiểm tra lại mã hoặc email.");
    }
  };

  return (
    <div className="lg-container">
      <div className="lg-logo">
        <img src={logo} alt="Logo" />
      </div>

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
          <h1 className="login-title">{t.createNewPass.createNewPass}</h1>
          <h6 className="login-note">{t.createNewPass.note}</h6>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="lg-form-group">
              <label className="lg-form-label">{t.createNewPass.password}</label>
              <div className="lg-password-input-container">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="lg-password-input"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, password: e.target.value }))
                  }
                  required
                />
                <button
                  type="button"
                  className="lg-password-toggle"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="lg-form-group">
              <label className="lg-form-label">{t.createNewPass.confirmPassword}</label>
              <div className="lg-password-input-container">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  className="lg-password-input"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  required
                />
                <button
                  type="button"
                  className="lg-password-toggle"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {message && (
              <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>
            )}

            <button type="submit" className="auth-btn">
              {t.createNewPass.resetPassBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPass;
