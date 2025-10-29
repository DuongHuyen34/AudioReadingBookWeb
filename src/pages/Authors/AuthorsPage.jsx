// import React, { useState } from 'react';
// import { useLanguage } from '../hooks/useLanguage';
// import { texts } from "../locales/texts";
// import Header from './Header';
// import Footer from './Footer';
// import './AuthorsPage.css';
// import { 
//   FaSearch, 
//   FaBook, 
//   FaUserFriends, 
//   FaAward,
//   FaQuoteLeft,
//   FaArrowRight,
//   FaStar
// } from 'react-icons/fa';
// // import authorsBg from "../assets/authorsBg.jpg";
// import AuthorsBg from "../assets/AuBg.jpg";
// import NNAnh from "../assets/authors/NNAnh.jpg";

// const AuthorsPage = () => {
//   const { lang } = useLanguage();
//   const t = texts[lang]?.authors || {};
  
//   const [searchTerm, setSearchTerm] = useState('');

//   // Dữ liệu authors
//   const authorsData = [
//     {
//       id: 1,
//       name: "Nguyễn Nhật Ánh",
//       genre: "Fiction",
//       country: "Vietnam",
//       booksCount: 45,
//       followers: "125K",
//       rating: 4.8,
//       image: NNAnh,
//       description: "One of Vietnam's most beloved authors, known for his heartwarming stories about childhood and youth.",
//       popularBooks: ["Tôi Thấy Hoa Vàng Trên Cỏ Xanh", "Mắt Biếc", "Cho Tôi Xin Một Vé Đi Tuổi Thơ"]
//     },
//     {
//       id: 2,
//       name: "Haruki Murakami",
//       genre: "Fiction",
//       country: "Japan",
//       booksCount: 38,
//       followers: "890K",
//       rating: 4.7,
//       image: NNAnh,
//       description: "Internationally acclaimed author known for his magical realism and surreal storytelling.",
//       popularBooks: ["Norwegian Wood", "Kafka on the Shore", "1Q84"]
//     },
//     {
//       id: 3,
//       name: "J.K. Rowling",
//       genre: "Fantasy",
//       country: "United Kingdom",
//       booksCount: 22,
//       followers: "2.3M",
//       rating: 4.9,
//       image: NNAnh,
//       description: "Creator of the Harry Potter series, one of the best-selling book series in history.",
//       popularBooks: ["Harry Potter Series", "The Casual Vacancy", "The Ickabog"]
//     },
//     {
//       id: 4,
//       name: "Stephen King",
//       genre: "Horror",
//       country: "United States",
//       booksCount: 63,
//       followers: "1.8M",
//       rating: 4.6,
//       image: NNAnh,
//       description: "Master of horror and suspense fiction with over 60 novels to his name.",
//       popularBooks: ["The Shining", "It", "The Stand"]
//     },
//     {
//       id: 5,
//       name: "Jane Austen",
//       genre: "Classic",
//       country: "United Kingdom",
//       booksCount: 6,
//       followers: "950K",
//       rating: 4.8,
//       image: NNAnh,
//       description: "Renowned for her witty and insightful portrayals of 19th-century English society.",
//       popularBooks: ["Pride and Prejudice", "Sense and Sensibility", "Emma"]
//     },
//     {
//       id: 6,
//       name: "Paulo Coelho",
//       genre: "Fiction",
//       country: "Brazil",
//       booksCount: 28,
//       followers: "1.1M",
//       rating: 4.5,
//       image: NNAnh,
//       description: "Author of The Alchemist, one of the best-selling books in history.",
//       popularBooks: ["The Alchemist", "Brida", "Eleven Minutes"]
//     },
//     {
//       id: 7,
//       name: "Agatha Christie",
//       genre: "Mystery",
//       country: "United Kingdom",
//       booksCount: 66,
//       followers: "1.4M",
//       rating: 4.7,
//       image: NNAnh,
//       description: "The Queen of Crime, best known for her detective novels and short story collections.",
//       popularBooks: ["Murder on the Orient Express", "And Then There Were None", "The Murder of Roger Ackroyd"]
//     },
//     {
//       id: 8,
//       name: "Ernest Hemingway",
//       genre: "Classic",
//       country: "United States",
//       booksCount: 10,
//       followers: "780K",
//       rating: 4.6,
//       image: NNAnh,
//       description: "Nobel Prize-winning author known for his economical and understated style.",
//       popularBooks: ["The Old Man and the Sea", "A Farewell to Arms", "For Whom the Bell Tolls"]
//     }
//   ];

//   // Filter authors chỉ theo search term
//   const filteredAuthors = authorsData.filter(author => {
//     const matchesSearch = author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          author.genre.toLowerCase().includes(searchTerm.toLowerCase());
    
//     return matchesSearch;
//   });

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//   };

//   return (
//     <div className="authors-page">
//       <Header />
      
//       <main className="authors-main">
//         {/* Hero Section */}
//         <section className="authors-hero" style={{ '--authors-bg': `url(${AuthorsBg})` }}>
//           <div className="authors-hero-content">
//             <div className="authors-hero-text">
//               <h1 className="authors-title">
//                 {t.title || "Meet Our Authors"}
//               </h1>
//               <p className="authors-subtitle">
//                 {t.subtitle || "Discover the brilliant minds behind your favorite stories. Explore author profiles, their works, and literary journeys."}
//               </p>
              
//               {/* Search Bar */}
//               <div className="authors-search">
//                 <div className="ap-search-box">
//                   <FaSearch className="ap-search-icon" />
//                   <input
//                     type="text"
//                     placeholder={t.searchPlaceholder || "Search authors by name or genre..."}
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     className="ap-search-input"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="authors-hero-stats">
//               <div className="ap-stat-item">
//                 <FaUserFriends className="ap-stat-icon" />
//                 <div className="ap-stat-content">
//                   <span className="ap-stat-number">500+</span>
//                   <span className="ap-stat-label">{t.authorsCount || "Authors"}</span>
//                 </div>
//               </div>
//               <div className="ap-stat-item">
//                 <FaBook className="ap-stat-icon" />
//                 <div className="ap-stat-content">
//                   <span className="ap-stat-number">10K+</span>
//                   <span className="ap-stat-label">{t.booksCount || "Books"}</span>
//                 </div>
//               </div>
//               <div className="ap-stat-item">
//                 <FaAward className="ap-stat-icon" />
//                 <div className="ap-stat-content">
//                   <span className="ap-stat-number">150+</span>
//                   <span className="ap-stat-label">{t.awardsCount || "Awards"}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* All Authors Grid */}
//         <section className="all-authors-section">
//           <div className="authors-container">
//             <div className="ap-section-header">
//               <h2 className="ap-section-title">
//                 {t.allAuthors || "All Authors"} ({filteredAuthors.length})
//               </h2>
//             </div>

//             {filteredAuthors.length === 0 ? (
//               <div className="ap-no-results">
//                 <FaSearch className="ap-no-results-icon" />
//                 <h3>{t.noResults || "No authors found"}</h3>
//                 <p>{t.noResultsDesc || "Try adjusting your search or filters"}</p>
//                 <button className="ap-clear-filters-btn" onClick={clearFilters}>
//                   {t.clearFilters || "Clear Filters"}
//                 </button>
//               </div>
//             ) : (
//               <div className="authors-grid">
//                 {filteredAuthors.map(author => (
//                   <div key={author.id} className="author-card">
//                     <div className="author-card-image">
//                       <img src={author.image} alt={author.name} />
//                     </div>
//                     <div className="author-card-content">
//                       <h3 className="author-card-name">{author.name}</h3>
//                       <p className="author-card-genre">{author.genre}</p>
//                       <p className="author-card-country">{author.country}</p>
                      
//                       <div className="author-card-stats">
//                         <div className="ap-stat">
//                           <FaBook className="ap-stat-icon" />
//                           <span>{author.booksCount} {t.books || "books"}</span>
//                         </div>
//                         <div className="ap-stat">
//                           <FaUserFriends className="ap-stat-icon" />
//                           <span>{author.followers}</span>
//                         </div>
//                       </div>

//                       <div className="author-card-rating">
//                         <FaStar className="ap-star-icon" />
//                         <span>{author.rating}</span>
//                       </div>

//                       <div className="author-card-popular">
//                         <h4>{t.popularBooks || "Popular Books"}:</h4>
//                         <ul>
//                           {author.popularBooks.slice(0, 2).map((book, index) => (
//                             <li key={index}>{book}</li>
//                           ))}
//                         </ul>
//                       </div>

//                       <button className="author-card-btn">
//                         {t.viewWorks || "View Works"} <FaArrowRight />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="authors-cta-section">
//           <div className="authors-container">
//             <div className="ap-cta-content">
//               <FaQuoteLeft className="ap-cta-icon" />
//               <h2 className="ap-cta-title">
//                 {t.ctaTitle || "Discover New Literary Worlds"}
//               </h2>
//               <p className="ap-cta-description">
//                 {t.ctaDescription || "Explore diverse voices and stories from authors around the world. Your next favorite book is waiting to be discovered."}
//               </p>
//               <button className="ap-cta-button">
//                 {t.exploreBooks || "Explore All Books"}
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default AuthorsPage;

// frontend/src/pages/AuthorsPage/AuthorsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { texts } from "../../locales/texts";
import { getAuthors } from "../../api";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import './AuthorsPage.css';
import { 
  FaSearch, 
  FaBook, 
  FaUserFriends, 
  FaAward,
  FaQuoteLeft,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';
import AuthorsBg from "../../assets/AuBg.jpg";
import NNAnh from "../../assets/authors/NNAnh.jpg";
import JKRowling from "../../assets/authors/JKRowling.jpg";
import MTwain from "../../assets/authors/MTwain.jpg";

const AuthorsPage = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = texts[lang]?.authors || {};

  const [searchTerm, setSearchTerm] = useState('');
  const [authors, setAuthors] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12); // 🧠 hiển thị 12 tác giả đầu tiên

  // 🧠 Gọi API lấy danh sách tác giả
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        // setLoading(true);
        const res = await getAuthors({ search: searchTerm });
        setAuthors(res.data);
        // setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching authors:", err);
        // setError("Failed to load authors");
        // setLoading(false);
      }
    };
    fetchAuthors();
  }, [searchTerm]);

  const filteredAuthors = authors;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // if (loading) return <div className="loading">⏳ Loading authors...</div>;
  // if (error) return <div className="error">{error}</div>;

  return (
    <div className="authors-page">
      <Header />
      
      <main className="authors-main">
        {/* 🌟 Hero Section */}
        <section className="authors-hero" style={{ '--authors-bg': `url(${AuthorsBg})` }}>
          <div className="authors-hero-content">
            <div className="authors-hero-text">
              <h1 className="authors-title">
                <span className="ap-title-line ap-highlight">{t.title || "Meet Our Authors"}</span>
              </h1>
              <p className="authors-subtitle">
                {t.subtitle || "Discover the brilliant minds behind your favorite stories. Explore author profiles, their works, and literary journeys."}
              </p>
              
              {/* 🔍 Search Bar */}
              <div className="authors-search">
                <div className="ap-search-box">
                  <FaSearch className="ap-search-icon" />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder || "Search authors by name or genre..."}
                    value={searchTerm}
                    onChange={handleSearch}
                    className="ap-search-input"
                  />
                  <div className="ap-search-decoration">
                    <div className="ap-floating-book" style={{ '--authors-bg': `url(${NNAnh})` }}></div>
                    <div className="ap-floating-book" style={{ '--authors-bg': `url(${JKRowling})` }}></div>
                    <div className="ap-floating-book" style={{ '--authors-bg': `url(${MTwain})` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔢 Hero Stats */}
            <div className="authors-hero-stats">
              <div className="ap-stat-item">
                <FaUserFriends className="ap-stat-icon" />
                <div className="ap-stat-content">
                  <span className="ap-stat-number">500+</span>
                  <span className="ap-stat-label">{t.authorsCount || "Authors"}</span>
                </div>
              </div>
              <div className="ap-stat-item">
                <FaBook className="ap-stat-icon" />
                <div className="ap-stat-content">
                  <span className="ap-stat-number">10K+</span>
                  <span className="ap-stat-label">{t.booksCount || "Books"}</span>
                </div>
              </div>
              <div className="ap-stat-item">
                <FaAward className="ap-stat-icon" />
                <div className="ap-stat-content">
                  <span className="ap-stat-number">150+</span>
                  <span className="ap-stat-label">{t.awardsCount || "Awards"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📚 All Authors Grid */}
        <section className="all-authors-section">
          <div className="authors-container">
            <div className="ap-section-header">
              <h2 className="ap-section-title">
                {t.allAuthors || "All Authors"}
              </h2>
            </div>

            {filteredAuthors.length === 0 ? (
              <div className="ap-no-results">
                <FaSearch className="ap-no-results-icon" />
                <h3>{t.noResults || "No authors found"}</h3>
                <p>{t.noResultsDesc || "Try adjusting your search or filters"}</p>
                <button className="ap-clear-filters-btn" onClick={clearFilters}>
                  {t.clearFilters || "Clear Filters"}
                </button>
              </div>
            ) : (
              <>
                <div className="ap-authors-grid">
                  {filteredAuthors.slice(0, visibleCount).map(author => (
                    <div key={author._id || author.id} className="ap-author-item">
                      <div className="ap-author-image-wrapper">
                        <img
                          src={`http://localhost:5000${author.image}`}
                          alt={author.name}
                          className="ap-author-img"
                        />
                      </div>
                      <div className="ap-author-name-overlay">{author.name}</div>

                      {/* Card hiện ra khi hover */}
                      <div className="ap-author-card">
                        <div className="ap-author-card-content">
                          <div className="ap-author-card-image">
                            <img
                              src={`http://localhost:5000${author.image}`}
                              alt={author.name}
                              className="ap-author-card-img"
                            />
                          </div>
                          <div className="ap-author-card-info">
                            <h3 className="ap-author-card-name">{author.name}</h3>
                            <p className="ap-author-card-genre">{author.genre}</p>
                            <p className="ap-author-card-country">{author.country}</p>

                            <div className="ap-author-card-stats">
                              <div className="ap-stat">
                                <FaBook className="ap-stat-icon" />
                                <span>{author.booksCount} {t.books || "books"}</span>
                              </div>
                              <div className="ap-stat">
                                <FaUserFriends className="ap-stat-icon" />
                                <span>{author.followers}</span>
                              </div>
                            </div>

                            <div className="ap-author-card-rating">
                              <FaStar className="ap-star-icon" />
                              <span>{author.rating}</span>
                            </div>

                            <div className="ap-author-card-popular">
                              <h4>{t.popularBooks || "Popular Books"}:</h4>
                              <ul>
                                {author.popularBooks.slice(0, 2).map((book, index) => (
                                  <li key={index}>{book}</li>
                                ))}
                              </ul>
                            </div>

                            <button
                              className="ap-author-card-btn"
                              onClick={() => {
                                navigate(`/author/${author._id || author.id}`);
                                window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 cuộn lên đầu
                              }}
                            >
                              {t.viewProfile || "View Profile"} <FaArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 🔽 Nút “Xem thêm” */}
                {visibleCount < filteredAuthors.length && (
                  <div className="ap-load-more-section">
                    <button className="ap-load-more-btn" onClick={handleShowMore}>
                      <span>{t.showMore || "Show More"}</span>
                      <div className="ap-btn-sparkles">
                        <div className="ap-sparkle"></div>
                        <div className="ap-sparkle"></div>
                        <div className="ap-sparkle"></div>
                        <div className="ap-sparkle"></div>
                        <div className="ap-sparkle"></div>
                      </div>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* 💬 CTA Section */}
        <section className="authors-cta-section">
          <div className="authors-container">
            <div className="ap-cta-content">
              <FaQuoteLeft className="ap-cta-icon" />
              <h2 className="ap-cta-title">
                {t.ctaTitle || "Discover New Literary Worlds"}
              </h2>
              <p className="ap-cta-description">
                {t.ctaDescription || "Explore diverse voices and stories from authors around the world. Your next favorite book is waiting to be discovered."}
              </p>
              <button 
                className="ap-cta-button"
                onClick={() => {
                  navigate("/bookspage");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t.exploreBooks || "Explore All Books"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorsPage;
