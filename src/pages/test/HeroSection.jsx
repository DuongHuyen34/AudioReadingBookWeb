import React from "react";
import "./HeroSection.css";
import { FaBookOpen, FaHeadphones, FaUsers, FaCommentDots } from "react-icons/fa";
import bookImage from "../assets/bookopen.png"; 

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src={bookImage} alt="Magic Book" className="hero-image" />
      </div>

      <div className="hero-right">
        <h1 className="hero-title">
          Khám phá thế giới <span className="highlight">tri thức!</span>
        </h1>
        <h2 className="hero-subtitle">
          Trong từng trang sách và từng âm thanh 🎧
        </h2>
        <p className="hero-description">
          READIO mang đến cho bạn trải nghiệm đọc và nghe sách mọi lúc, mọi nơi.  
          Từ tiểu thuyết, truyện ngắn đến sách kỹ năng — hãy để mỗi cuốn sách  
          mở ra một hành trình mới.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <FaBookOpen className="stat-icon" />
            <p className="stat-number">1.000+</p>
            <p className="stat-label">Tựa sách</p>
          </div>
          <div className="stat-item">
            <FaHeadphones className="stat-icon" />
            <p className="stat-number">500+</p>
            <p className="stat-label">Giọng đọc</p>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <p className="stat-number">10K+</p>
            <p className="stat-label">Người dùng</p>
          </div>
          <div className="stat-item">
            <FaCommentDots className="stat-icon" />
            <p className="stat-number">5K+</p>
            <p className="stat-label">Bình luận</p>
          </div>
        </div>

        <button className="hero-btn">Khám phá ngay</button>
      </div>
    </section>
  );
}

export default HeroSection;
