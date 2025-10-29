// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from '../../hooks/useLanguage';
// import { texts } from "../../locales/texts";
// import { getBooks } from "../../api"; 
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
// import '../BooksShelfSection.css';
// import './BooksPage.css';
// import { 
//   FaSearch,
//   FaStar,
//   FaBookOpen,
//   FaHeart,
//   FaRegHeart,
//   FaSort,
//   FaMagic,
//   FaPlay,
//   FaPause
// } from 'react-icons/fa';
// import booksBg from "../../assets/store.jpg";
// import shelf2 from "../../assets/ke1.png"; 
// import shelf3 from "../../assets/ke2.png"; 
// import book1 from "../../assets/authors/The_Midnight_Library.jpg";
// import book2 from "../../assets/authors/Atomic_Habits.png";
// import book3 from "../../assets/authors/Where_the_Crawdads_Sing.jpg";

// const BooksPage = () => {
//   const navigate = useNavigate();
//   const { lang } = useLanguage();
//   const t = texts[lang]?.books || {};
  
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedGenre, setSelectedGenre] = useState('all');
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // const [sortBy, setSortBy] = useState('popular');
//   // const [favorites, setFavorites] = useState(new Set());
//   // const [activeBook, setActiveBook] = useState(null);
//   // const [hoveredBook, setHoveredBook] = useState(null);
//   const audioRef = useRef(null);
//   // const shelfRef = useRef(null);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         setLoading(true);
//         const res = await getBooks({ 
//           search: searchTerm, 
//           genre: selectedGenre === 'all' ? '' : selectedGenre 
//         });
//         setBooks(res.data.books);
//         setLoading(false);
//       } catch (err) {
//         console.error("❌ Error fetching books:", err);
//         setError("Failed to load books");
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, [searchTerm, selectedGenre]);


//   const genres = [
//     { value: 'all', label: t.allGenres || 'All Genres' },
//     { value: 'Fiction', label: t.fiction || 'Fiction' },
//     { value: 'Mystery', label: t.mystery || 'Mystery' },
//     { value: 'Classics', label: t.classics || 'Classics' },
//     { value: 'Geography', label: t.geography || 'Geography' },
//     { value: 'Romance', label: t.romance || 'Romance' },
//     { value: 'Kids', label: t.kids || 'Kids' },
//     { value: 'Life', label: t.Life || 'Life' },
//     { value: 'Education', label: t.Education || 'Education' }
//   ];

//   const filteredBooks = books || [];
//   const featuredBooks = books.filter(book => book.featured);

//   if (loading) return <div className="loading">⏳ Loading books...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="books-page">
//       <Header />
      
//       <main className="books-main">
//         {/* Hero Section với Parallax Effect */}
//         <section className="books-hero">
//           <div className="bp-hero-background" style={{ '--books-bg': `url(${booksBg})` }}></div>
//           <div className="bp-hero-content">
//             <div className="bp-hero-text">
//               <h1 className="bp-hero-title">
//                 <span className="bp-title-line">{t.title?.split(' ')[0]} {t.title?.split(' ')[1]}</span>
//                 <span className="bp-title-line bp-highlight">{t.title?.split(' ').slice(2).join(' ')}</span>
//               </h1>
//               <p className="bp-hero-subtitle">
//                 {t.subtitle || "A book is a device to ignite the imagination. Explore thousands of books across all genres. Find your next favorite story in our carefully curated collection."}
//               </p>
              
//               {/* Search Bar với hiệu ứng */}
//               <div className="bp-hero-search">
//                 <div className="bp-search-container">
//                   <FaSearch className="bp-search-icon" />
//                   <input
//                     type="text"
//                     placeholder={t.searchPlaceholder || "Search books, authors, genres..."}
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="bp-search-input"
//                   />
//                   <div className="bp-search-decoration">
//                     <div className="bp-floating-book" style={{ '--books-bg': `url(${book1})` }}></div>
//                     <div className="bp-floating-book" style={{ '--books-bg': `url(${book3})` }}></div>
//                     <div className="bp-floating-book" style={{ '--books-bg': `url(${book2})` }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Featured Books Carousel với luật gần xa */}
//             <div className="bp-featured-books">
//               <div className="bp-featured-header">
//                 <FaMagic className="bp-featured-icon" />
//                 <h3>{t.featured || "Featured Books"}</h3>
//               </div>
//               <div className="bp-featured-carousel">
//                 {featuredBooks.map((book) => (
//                   <div key={book.id} className="bp-featured-book" style={{ '--book-color': book.color }}>
//                     <div className="book-glow"></div>
//                     <img 
//                         src={`http://localhost:5000${book.cover}`} 
//                         alt={book.title} 
//                         className='bp-featured-cover'
//                     />
//                     <div className="bp-featured-overlay">
//                       <h4>{lang === 'vi' ? book.titleVi : book.title}</h4>
//                       <p>{book.author}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Main Content */}
//         <section className="bp-books-content">
//           <div className="bp-books-container">
//             {/* Controls Bar với các nút genre */}
//             <div className="bp-controls-bar">
//               <div className="bp-genre-buttons">
//                 {genres.map(genre => (
//                   <button
//                     key={genre.value}
//                     className={`bp-genre-btn ${selectedGenre === genre.value ? 'active' : ''}`}
//                     onClick={() => setSelectedGenre(genre.value)}
//                   >
//                     {genre.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <section className="bp-books-shelf-section">
//               <div className='bp-books-container'>
//                 <h2 className="bp-shelf-title">{t.featured || "Featured Books"}</h2>
                  
//                 <div className="bp-shelves-group">
//                   {/* Kệ 1 */}
//                   <div className="bp-shelf-container">
//                     <img src={shelf2} alt="Bookshelf" className="bp-shelf-bg" />
//                     <div className="bp-shelf" style={{'top': '-93px', 'padding': '0 30px'}}>
//                       {filteredBooks.slice(0, 6).map((book) => (
//                         <div 
//                           key={book.id} 
//                           // KHÔNG CẦN onMouseEnter/onMouseLeave nữa, CSS xử lý
//                           className="bp-shelf-item"
//                           onClick={() => navigate("/bookdetail", { state: { bookData: book } })}
//                         >
//                           <div className='bp-shelf-item-img bp-glow-effect'>
//                             <img 
//                                 src={`http://localhost:5000${book.cover}`} 
//                                 alt={book.title} 
//                                 className='bp-shelf-img'
//                             />
//                             {/* Thêm div để tạo hiệu ứng GLOW (Mới) */}
//                             <div className="bp-book-glow-effect" style={{'--book-color': book.color}}></div>

//                             {/* ICON (Luôn hiện diện trong DOM, bị ẩn bằng CSS) */}
//                             <div className="bp-book-icons-overlay">
//                                 <button className="bp-shelf-icon bp-read-icon" title="Đọc">
//                                     <FaBookOpen />
//                                 </button>
//                                 <button className="bp-shelf-icon bp-listen-icon" title="Nghe">
//                                     <FaPlay />
//                                 </button>
//                             </div>
//                           </div>
//                           {/* TÊN SÁCH (Luôn hiện diện trong DOM, bị ẩn bằng CSS) */}
//                           <div className="bp-book-title-overlay">
//                               <span>{book.title}</span>
//                           </div>
//                         </div>
//                       ))}
                      
//                     </div>
//                   </div>
                  
//                   {/* Kệ 2 */}
//                   <div className="bp-shelf-container">
//                       <img src={shelf3} alt="Bookshelf" className="bp-shelf-bg" />
//                       <div className="bp-shelf" style={{'top': '-65px', 'padding': '0 40px'}}>
//                           {filteredBooks.slice(6, 12).map((book) => (
//                               <div 
//                                   key={book.id} 
//                                   className="bp-shelf-item" 
//                                   onClick={() => navigate("/bookdetail", { state: { bookData: book } })}
//                               >
//                                   <div className='bp-shelf-item-img bp-glow-effect'>
//                                       <img 
//                                           src={`http://localhost:5000${book.cover}`} 
//                                           alt={book.title} 
//                                           className='bp-shelf-img'
//                                       />
//                                       {/* Thêm div để tạo hiệu ứng GLOW (Mới) */}
//                                       <div className="bp-book-glow-effect" style={{'--book-color': book.color}}></div>

//                                       <div className="bp-book-icons-overlay">
//                                           <button className="bp-shelf-icon bp-read-icon" title="Đọc">
//                                               <FaBookOpen />
//                                           </button>
//                                           <button className="bp-shelf-icon bp-listen-icon" title="Nghe">
//                                               <FaPlay />
//                                           </button>
//                                       </div>
//                                   </div>
//                                   <div className="bp-book-title-overlay">
//                                       <span>{book.title}</span>
//                                   </div>
//                               </div>
//                           ))}
//                       </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* <div className="anyflip-section" style={{ textAlign: "center", margin: "60px 0" }}>
//               <iframe
//                 style={{ width: "900px", height: "425px", border: "none" }}
//                 src="https://anyflip.com/bookcase/zvald"
//                 seamless="seamless"
//                 scrolling="no"
//                 frameBorder="0"
//                 allowTransparency="true"
//                 allowFullScreen={true}
//                 title="AnyFlip Viewer"
//               ></iframe>
//             </div> */}

//             {/* Load More */}
//             <div className="bp-load-more-section">
//               <button className="bp-load-more-btn">
//                 <span>{t.loadMore || "Discover More Books"}</span>
//                 <div className="bp-btn-sparkles">
//                   <div className="bp-sparkle"></div>
//                   <div className="bp-sparkle"></div>
//                   <div className="bp-sparkle"></div>
//                   <div className="bp-sparkle"></div>
//                   <div className="bp-sparkle"></div>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
      
//       {/* Hidden Audio Element */}
//       <audio ref={audioRef} className="bp-audio-element" />
//     </div>
//   );
// };

// export default BooksPage;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLanguage } from '../../hooks/useLanguage';
import { texts } from "../../locales/texts";
import { getBooks } from "../../api";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import '../BooksShelfSection.css';
import './BooksPage.css';
import { FaSearch, FaMagic, FaBookOpen, FaPlay, FaArrowRight  } from 'react-icons/fa';
import booksBg from "../../assets/store.jpg";
import shelf2 from "../../assets/ke1.png";
import shelf3 from "../../assets/ke2.png";
import book1 from "../../assets/authors/The_Midnight_Library.jpg";
import book2 from "../../assets/authors/Atomic_Habits.png";
import book3 from "../../assets/authors/Where_the_Crawdads_Sing.jpg";

const BooksPage = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = texts[lang]?.books || {};

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [books, setBooks] = useState([]);
  const [featuredBooks, setFeaturedBooks] = useState([]); // ✅ tách riêng để hero không thay đổi
  const [visibleShelves, setVisibleShelves] = useState(2);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const audioRef = useRef(null);

  // ✅ Lấy featuredBooks riêng (chỉ 1 lần khi load trang)
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await getBooks({ genre: '' });
        const featured = res.data.books.filter(b => b.featured);
        setFeaturedBooks(featured);
      } catch (err) {
        console.error("❌ Error fetching featured books:", err);
      }
    };
    fetchFeatured();
  }, []);

  // ✅ Lấy danh sách theo thể loại
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // setLoading(true);
        const res = await getBooks();
        setBooks(res.data.books);
        setFeaturedBooks(res.data.books.filter(b => b.featured));
        // setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching books:", err);
        // setError("Failed to load books");
        // setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setVisibleShelves(2);
  };

  // ✅ Lọc ngay trong frontend
  const filteredBooks =
    selectedGenre === 'all'
      ? books
      : books.filter(b => b.genre === selectedGenre);

  const visibleBooks = filteredBooks.slice(0, visibleShelves * 6);
  const handleLoadMore = () => setVisibleShelves(prev => prev + 2);

  const genres = [
    { value: 'all', label: t.allGenres || 'All Genres' },
    { value: 'Fiction', label: t.fiction || 'Fiction' },
    { value: 'Mystery', label: t.mystery || 'Mystery' },
    { value: 'Classics', label: t.classics || 'Classics' },
    { value: 'Geography', label: t.geography || 'Geography' },
    { value: 'Romance', label: t.romance || 'Romance' },
    { value: 'Kids', label: t.kids || 'Kids' },
    { value: 'Life', label: t.Life || 'Life' },
    { value: 'Education', label: t.Education || 'Education' }
  ];

  const currentGenreLabel =
    genres.find(g => g.value === selectedGenre)?.label || t.featured || "Featured Books";

  const handleKidsClick = () => { // ✅ FIX 3 - scroll lên đầu khi vào Kidsbook
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/kidsbook");
  };
  // if (loading) return <div className="loading">⏳ Loading books...</div>;
  // if (error) return <div className="error">{error}</div>;

  return (
    <div className="books-page">
      <Header />

      <main className="books-main">
        {/* ✅ HERO luôn giữ nguyên */}
        <section className="books-hero">
          <div className="bp-hero-background" style={{ '--books-bg': `url(${booksBg})` }}></div>
          <div className="bp-hero-content">
            <div className="bp-hero-text">
              <h1 className="bp-hero-title">
                <span className="bp-title-line">{t.title?.split(' ')[0]} {t.title?.split(' ')[1]}</span>
                <span className="bp-title-line bp-highlight">{t.title?.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="bp-hero-subtitle">
                {t.subtitle || "A book is a device to ignite the imagination. Explore thousands of books across all genres. Find your next favorite story in our carefully curated collection."}
              </p>

              <div className="bp-hero-search">
                <div className="bp-search-container">
                  <FaSearch className="bp-search-icon" />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder || "Search books, authors, genres..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bp-search-input"
                  />
                  <div className="bp-search-decoration">
                    <div className="bp-floating-book" style={{ '--books-bg': `url(${book1})` }}></div>
                    <div className="bp-floating-book" style={{ '--books-bg': `url(${book3})` }}></div>
                    <div className="bp-floating-book" style={{ '--books-bg': `url(${book2})` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🎨 Featured Carousel (Bất biến) */}
            <div className="bp-featured-books">
              <div className="bp-featured-header">
                <FaMagic className="bp-featured-icon" />
                <h3>{t.featured || "Featured Books"}</h3>
              </div>
              <div className="bp-featured-carousel">
                {featuredBooks.map((book) => (
                  <div key={book._id} className="bp-featured-book" style={{ '--book-color': book.color }}>
                    <div className="book-glow"></div>
                    <img
                      src={`http://localhost:5000${book.cover}`}
                      alt={book.title}
                      className='bp-featured-cover'
                    />
                    <div className="bp-featured-overlay">
                      <h4>{lang === 'vi' ? book.titleVi : book.title}</h4>
                      <p>{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 📚 MAIN CONTENT */}
        <section className="bp-books-content">
          <div className="bp-books-container">
            {/* 🎛️ GENRE BUTTONS */}
            <div className="bp-controls-bar">
              <div className="bp-genre-buttons">
                {genres.map(genre => (
                  <button
                    type="button"
                    key={genre.value}
                    className={`bp-genre-btn ${selectedGenre === genre.value ? 'active' : ''}`}
                    onClick={() => handleGenreChange(genre.value)}
                  >
                    {genre.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 🏷️ TITLE */}
            {/* <h2 className="bp-shelf-title">
              {currentGenreLabel}
              {selectedGenre === 'Kids' && (
                <span
                  className="bp-kids-label"
                  onClick={handleKidsClick}
                  style={{ cursor: "pointer", marginLeft: "12px", color: "#ff8b00", fontSize: "18px" }}
                >
                  → Khám phá thế giới mộng mơ nào!
                </span>
              )}
            </h2> */}

            <div className="bp-shelf-title-container">
              <h2 className="bp-shelf-title">
                {currentGenreLabel}
              </h2>
              {selectedGenre === 'Kids' && (
                <div className="bp-kids-explore-banner">
                  <div className="bp-kids-explore-content">
                    <button 
                      className="bp-kids-explore-btn"
                      onClick={handleKidsClick}
                      title={lang === 'vi' ? "Khám phá ngay" : "Explore now"}
                    >
                      <FaArrowRight  />
                    </button>
                    <button className="bp-kids-explore-text" onClick={handleKidsClick}>
                      {lang === 'vi' ? "Khám phá thế giới mộng mơ nào!" : "Explore the dreamy world!"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 🪶 SHELVES */}
            <div className="bp-shelves-group">
              {Array.from({ length: visibleShelves }).map((_, shelfIndex) => (
                <div 
                  key={shelfIndex} 
                  className="bp-shelf-container"
                  style={{ marginBottom: shelfIndex % 2 === 0 ? "50px" : "90px"}}
                >
                  <img 
                    src={shelfIndex % 2 === 0 ? shelf2 : shelf3} 
                    alt="Bookshelf" 
                    className="bp-shelf-bg"
                  />
                  <div
                    className="bp-shelf"
                    style={{ top: shelfIndex % 2 === 0 ? "-93px" : "-65px", left: shelfIndex % 2 === 0 ? "0" : "15px", padding: "0 30px" }}
                  >
                    {visibleBooks
                      .slice(shelfIndex * 6, shelfIndex * 6 + 6)
                      .map((book) => (
                        <div
                          key={book._id}
                          className="bp-shelf-item"
                          onClick={() => navigate(`/book/${book._id}`)}

                        >
                          <div className='bp-shelf-item-img bp-glow-effect'>
                            <img
                              src={`http://localhost:5000${book.cover}`}
                              alt={book.title}
                              className='bp-shelf-img'
                            />
                            <div className="bp-book-glow-effect" style={{ '--book-color': book.color }}></div>
                            <div className="bp-book-icons-overlay">
                              <button className="bp-shelf-icon bp-read-icon" title="Đọc">
                                <FaBookOpen />
                              </button>
                              <button className="bp-shelf-icon bp-listen-icon" title="Nghe">
                                <FaPlay />
                              </button>
                            </div>
                          </div>
                          <div className="bp-book-title-overlay">
                            <span>{book.title}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 🔘 LOAD MORE — luôn hiển thị */}
            {(filteredBooks.length > 0) && (
              <div className="bp-load-more-section">
                <button className="bp-load-more-btn" onClick={handleLoadMore}>
                  <span>{t.loadMore || "Discover More Books"}</span>
                  <div className="bp-btn-sparkles">
                    <div className="bp-sparkle"></div>
                    <div className="bp-sparkle"></div>
                    <div className="bp-sparkle"></div>
                    <div className="bp-sparkle"></div>
                    <div className="bp-sparkle"></div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <audio ref={audioRef} className="bp-audio-element" />
    </div>
  );
};

export default BooksPage;

