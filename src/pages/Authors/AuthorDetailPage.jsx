import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./AuthorDetailPage.css";
import { FaHeadphones, FaUserPlus, FaChevronLeft, FaStar } from "react-icons/fa";
import { getAuthorById, getAuthors } from "../../api"; // ✅ Gọi API thật

// Background ảnh tổng thể
import AuthorsBg from "../../assets/authorsBg.jpg";

const AuthorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = texts[lang]?.authorDetail || {};

  // ✅ State
  const [author, setAuthor] = useState(null);
  const [featuredAuthors, setFeaturedAuthors] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // 🧠 Lấy chi tiết tác giả từ backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const res = await getAuthorById(id);
        setAuthor(res.data);

        // Lấy thêm danh sách vài tác giả khác để hiển thị ở "Featured Authors"
        const authorsRes = await getAuthors();
        setFeaturedAuthors(authorsRes.data.slice(0, 6)); // chỉ lấy 6 người đầu
        // setLoading(false);
      } catch (err) {
        console.error("❌ Error loading author:", err);
        // setError("Failed to load author data.");
        // setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // if (loading)
  //   return <div className="loading">⏳ Loading author details...</div>;

  // if (error)
  //   return <div className="error">{error}</div>;

  if (!author)
    return (
      <div className="author-detail-page">
        <Header />
        <div className="author-detail-main">
          <div className="author-detail-container">
            <div style={{ textAlign: "center", padding: "100px 20px" }}>
              <h2>{t.authorNotFound || "Author not found"}</h2>
              <button
                onClick={() => navigate("/authors")}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  background: "var(--primary)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {t.backToAuthors || "Back to Authors"}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="author-detail-page">
      <Header />

      <main className="author-detail-main">
        {/* Background section */}
        <div
          className="ad-authors-hero"
          style={{ "--authors-dt-bg": `url(${AuthorsBg})` }}
        >
          <button className="btn-back" onClick={() => navigate("/authors")}>
            <FaChevronLeft /> {t.backToAuthors || "Back to Authors"}
          </button>

          <div className="author-image-section">
            <div className="author-image">
              <img
                src={`http://localhost:5000${author.image}`}
                alt={author.name}
              />
            </div>
          </div>

          <h1 className="author-name">{author.name}</h1>

          <div className="author-meta">
            <span className="author-genre">{author.genre}</span>
            <span className="author-country">{author.country}</span>
          </div>
        </div>

        {/* Nội dung chi tiết */}
        <div className="author-detail-container">
          {/* Giới thiệu */}
          <section className="author-header">
            <div className="author-info-section">
              <h3 className="author-title">{t.title || "Introduce"}</h3>
              <p className="author-description">{author.description}</p>

              <div className="author-stats">
                <div className="author-stat">
                  <span className="stat-number">{author.booksCount}</span>
                  <span className="stat-label">{t.books || "Books"}</span>
                </div>
                <div className="author-stat">
                  <span className="stat-number">{author.followers}</span>
                  <span className="stat-label">
                    {t.followers || "Followers"}
                  </span>
                </div>
                <div className="author-stat">
                  <FaStar className="stat-icon" />
                  <span className="stat-number">{author.rating}</span>
                  <span className="stat-label">{t.rating || "Rating"}</span>
                </div>
              </div>

              <div className="author-actions">
                <button className="follow-btn">
                  <FaUserPlus /> {t.followAuthor || "Follow Author"}
                </button>
              </div>
            </div>

            {/* Featured Authors */}
            <div className="featured-authors-section">
              <h2 className="adp-section-title">
                {t.featuredAuthors || "Featured Authors"}
              </h2>
              <div className="featured-authors-grid">
                {featuredAuthors.map((fa) => (
                  <div
                    key={fa._id}
                    className="featured-author-card"
                    onClick={() => navigate(`/author/${fa._id}`)}
                  >
                    <img
                      className="featured-author-card-img"
                      src={`http://localhost:5000${fa.image}`}
                      alt={fa.name}
                    />
                    <div className="featured-author-name">{fa.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tác phẩm nổi bật */}
          <section className="albums-section">
            <h2 className="adp-section-title">
              {t.popularBooks || "Popular Books"}
            </h2>

            <div className="albums-grid">
              {author.popularBooks && author.popularBooks.length > 0 ? (
                author.popularBooks.map((book, index) => (
                  <div key={index} className="album-card">
                    <div className="album-header">
                      <h3 className="album-title">{book}</h3>
                    </div>
                    <div className="album-audio-count">
                      <FaHeadphones className="audio-icon" />
                      <span>{t.audios || "audio version available"}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>{t.noBooks || "No popular books listed."}</p>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorDetailPage;
