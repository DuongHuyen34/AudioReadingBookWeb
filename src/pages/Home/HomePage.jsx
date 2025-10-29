// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from '../../hooks/useLanguage';
// import { texts } from "../../locales/texts";
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
// import "./HomePage.css";
// import bookOpen from "../../assets/bookopen.png";
// import bookShelf from "../../assets/bookshelf.png";
// import bgVid from "../../assets/bgvid.mp4";
// import shelf2 from "../../assets/shelf2.png"; 
// import shelf3 from "../../assets/shelf3.png"; 
// import bookImg from "../../assets/101book.jpg";
// import NNAnh from "../../assets/authors/NNAnh.jpg";
// import NPhong from "../../assets/authors/NPhong.jpg";
// import NMTuan from "../../assets/authors/NMTuan.jpg";
// import THoai from "../../assets/authors/THoai.jpg";
// import MTwain from "../../assets/authors/MTwain.jpg";
// import JAusten from "../../assets/authors/JAusten.jpg";
// import EHemingway from "../../assets/authors/EHemingway.webp";
// import AChristie from "../../assets/authors/AChristie.jpg";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function HomePage() {
//   const navigate = useNavigate();
//   const { lang } = useLanguage();
//   const t = texts[lang];

//   // Dữ liệu best picks với tiêu đề cho từng shelf
//   const bestPicksData = [
//     {
//       title: "Trending Now",
//       shelves: [
//         [
//           { id: 1, title: "Kamala", author: "Markandaya", img: bookImg },
//           { id: 2, title: "Kedan Na Seve", author: "Unknown Author", img: bookImg },
//           { id: 3, title: "The Silent Patient", author: "Alex Michaelides", img: bookImg },
//           { id: 4, title: "Where the Crawdads Sing", author: "Delia Owens", img: bookImg },
//           { id: 5, title: "Atomic Habits", author: "James Clear", img: bookImg },
//           { id: 6, title: "The Midnight Library", author: "Matt Haig", img: bookImg }
//         ],
//         [
//           { id: 7, title: "Dune", author: "Frank Herbert", img: bookImg },
//           { id: 8, title: "Project Hail Mary", author: "Andy Weir", img: bookImg },
//           { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", img: bookImg },
//           { id: 10, title: "Harry Potter", author: "J.K. Rowling", img: bookImg },
//           { id: 11, title: "The Alchemist", author: "Paulo Coelho", img: bookImg },
//           { id: 12, title: "1984", author: "George Orwell", img: bookImg }
//         ]
//       ]
//     },
//     {
//       title: "Classic Literature",
//       shelves: [
//         [
//           { id: 13, title: "Pride and Prejudice", author: "Jane Austen", img: bookImg },
//           { id: 14, title: "To Kill a Mockingbird", author: "Harper Lee", img: bookImg },
//           { id: 15, title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: bookImg },
//           { id: 16, title: "Moby Dick", author: "Herman Melville", img: bookImg },
//           { id: 17, title: "War and Peace", author: "Leo Tolstoy", img: bookImg },
//           { id: 18, title: "The Odyssey", author: "Homer", img: bookImg }
//         ],
//         [
//           { id: 19, title: "Crime and Punishment", author: "Fyodor Dostoevsky", img: bookImg },
//           { id: 20, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", img: bookImg },
//           { id: 21, title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", img: bookImg },
//           { id: 22, title: "The Catcher in the Rye", author: "J.D. Salinger", img: bookImg },
//           { id: 23, title: "Brave New World", author: "Aldous Huxley", img: bookImg },
//           { id: 24, title: "The Lord of the Rings", author: "J.R.R. Tolkien", img: bookImg }
//         ]
//       ]
//     },
//     {
//       title: "Our Best Picks",
//       shelves: [
//         [
//           { id: 25, title: "Foundation", author: "Isaac Asimov", img: bookImg },
//           { id: 26, title: "Neuromancer", author: "William Gibson", img: bookImg },
//           { id: 27, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", img: bookImg },
//           { id: 28, title: "Snow Crash", author: "Neal Stephenson", img: bookImg },
//           { id: 29, title: "The Name of the Wind", author: "Patrick Rothfuss", img: bookImg },
//           { id: 30, title: "American Gods", author: "Neil Gaiman", img: bookImg }
//         ],
//         [
//           { id: 31, title: "Ender's Game", author: "Orson Scott Card", img: bookImg },
//           { id: 32, title: "The Martian", author: "Andy Weir", img: bookImg },
//           { id: 33, title: "Ready Player One", author: "Ernest Cline", img: bookImg },
//           { id: 34, title: "The Three-Body Problem", author: "Liu Cixin", img: bookImg },
//           { id: 35, title: "Mistborn", author: "Brandon Sanderson", img: bookImg },
//           { id: 36, title: "The Wheel of Time", author: "Robert Jordan", img: bookImg }
//         ]
//       ]
//     },
//     {
//       title: "Tác giả nổi bật",
//       type: "authors", // Thêm type để phân biệt
//       authors: [
//         [
//           { id: 37, name: "Nguyễn Nhật Ánh", avatar: NNAnh },
//           { id: 38, name: "Nguyễn Phong", avatar: NPhong },
//           { id: 39, name: "Nguyễn Mạnh Tuấn", avatar: NMTuan },
//           { id: 40, name: "Tô Hoài", avatar: THoai }
//         ],
//         [
//           { id: 41, name: "Mark Twain", avatar: MTwain },
//           { id: 42, name: "Jane Austen", avatar: JAusten },
//           { id: 43, name: "Ernest Hemingway", avatar: EHemingway },
//           { id: 44, name: "Agatha Christie", avatar: AChristie }
//         ]
//       ]
//     },
//     {
//       title: "Self Development",
//       shelves: [
//         [
//           { id: 45, title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", img: bookImg },
//           { id: 46, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", img: bookImg },
//           { id: 47, title: "The Power of Now", author: "Eckhart Tolle", img: bookImg },
//           { id: 48, title: "Mindset", author: "Carol S. Dweck", img: bookImg },
//           { id: 49, title: "Deep Work", author: "Cal Newport", img: bookImg },
//           { id: 50, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", img: bookImg }
//         ],
//         [
//           { id: 51, title: "How to Win Friends and Influence People", author: "Dale Carnegie", img: bookImg },
//           { id: 52, title: "The 5 AM Club", author: "Robin Sharma", img: bookImg },
//           { id: 53, title: "The Miracle Morning", author: "Hal Elrod", img: bookImg },
//           { id: 54, title: "Essentialism", author: "Greg McKeown", img: bookImg },
//           { id: 55, title: "The Happiness Project", author: "Gretchen Rubin", img: bookImg },
//           { id: 56, title: "Daring Greatly", author: "Brené Brown", img: bookImg }
//         ]
//       ]
//     }
//   ];

//   const [currentShelf, setCurrentShelf] = useState(0);
//   const [slideDirection, setSlideDirection] = useState('');
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Dữ liệu stats
//   const stats = [
//     { number: "1K+", label: t.discover.statBooks },
//     { number: "500+", label: t.discover.statVoices },
//     { number: "10K+", label: t.discover.statUsers }
//   ];

//   // Hàm chuyển shelf với hiệu ứng
//   const nextShelf = () => {
//     if (isAnimating || currentShelf === bestPicksData.length - 1) return;
    
//     setIsAnimating(true);
//     setSlideDirection('right');
    
//     setTimeout(() => {
//       setCurrentShelf(prev => prev + 1);
//       setSlideDirection('');
//       setIsAnimating(false);
//     }, 300);
//   };

//   const prevShelf = () => {
//     if (isAnimating || currentShelf === 0) return;
    
//     setIsAnimating(true);
//     setSlideDirection('left');
    
//     setTimeout(() => {
//       setCurrentShelf(prev => prev - 1);
//       setSlideDirection('');
//       setIsAnimating(false);
//     }, 300);
//   };

//   // Chuyển trực tiếp đến shelf cụ thể
//   const goToShelf = (index) => {
//     if (isAnimating || index === currentShelf) return;
    
//     setIsAnimating(true);
//     setSlideDirection(index > currentShelf ? 'right' : 'left');
    
//     setTimeout(() => {
//       setCurrentShelf(index);
//       setSlideDirection('');
//       setIsAnimating(false);
//     }, 300);
//   };

//   return (
//     <div className="home-container">
//       <Header />
      
//       <main className="home-main">
//         {/* Hero Section */}
//         <section className="hp-hero-section">
//           <video 
//             className="hp-hero-video-background"
//             autoPlay 
//             loop 
//             muted 
//             playsInline
//           >
//             <source src={bgVid} type="video/mp4" />
//             <source src={bgVid} type="video/quicktime" />
//             Your browser does not support the video tag.
//           </video>

//           <div className="hp-hero-content">
//             <h1 className="hp-hero-title">
//               <span className="hp-title-line hp-highlight">{t.hero.heroTitle}</span>
//             </h1>
//             <p className="hp-hero-description">
//               {t.hero.heroSubtitle}
//             </p>
            
//             <div className="hp-search-section">
//               <div className="hp-search-box">
//                 <input 
//                   type="text" 
//                   placeholder={t.hero.searchTitle}
//                   className="hp-search-input"
//                 />
//                 <button className="hp-search-btn">
//                   <p className="hp-search-btn-text">{t.hero.searchBtn}</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <img className="hero-img" src={bookOpen} alt="book" />
//         </section>

//         {/* Best Picks Section với Navigation */}
//         <section className="best-picks-section">
//           <h2 className="hp-section-title">{bestPicksData[currentShelf].title}</h2>
          
//           <div className="shelf-navigation-container">
//             {/* Nút điều hướng trái */}
//             <button 
//               className={`shelf-nav-btn shelf-nav-prev ${currentShelf === 0 ? 'shelf-nav-hidden' : ''}`}
//               onClick={prevShelf}
//               disabled={currentShelf === 0 || isAnimating}
//             >
//               <FaChevronLeft />
//             </button>

//             {/* Shelf Container với hiệu ứng trượt */}
//             <div className="shelf-wrapper">
//               <div className={`shelf-slide-container ${slideDirection ? `slide-${slideDirection}` : ''}`}>
//                 {/* Hiển thị authors section nếu type là authors */}
//                 {bestPicksData[currentShelf].type === "authors" ? (
//                   <div className="shelf-group">
//                     <div className="hp-authors-container">
//                       <div className="hp-authors-row">
//                         {bestPicksData[currentShelf].authors[0].map((author) => (
//                           <div key={author.id} className="hp-author-item">
//                             <div className="hp-author-avatar">
//                               <img src={author.avatar} alt={author.name} className="hp-author-avatar-img" />
//                             </div>
//                             <div className="hp-author-info">
//                               <div className="hp-author-name">{author.name}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
                      
//                       <div className="hp-authors-row">
//                         {bestPicksData[currentShelf].authors[1].map((author) => (
//                           <div key={author.id} className="hp-author-item">
//                             <div className="hp-author-avatar">
//                               <img src={author.avatar} alt={author.name} className="hp-author-avatar-img" />
//                             </div>
//                             <div className="hp-author-info">
//                               <div className="hp-author-name">{author.name}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   /* Hiển thị books section như bình thường */
//                   <div className="shelf-group">
//                     <div className="hp-shelf-container">
//                       <img src={shelf2} alt="Bookshelf" className="hp-shelf-bg" />
//                       <div className="hp-shelf">
//                         {bestPicksData[currentShelf].shelves[0].map((book) => (
//                           <div key={book.id} className="hp-shelf-item glow-effect">
//                             <img src={book.img} alt={book.title} onClick={() => navigate("/bookdetail")}/>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="hp-shelf-container">
//                       <img src={shelf3} alt="Bookshelf" className="hp-shelf-bg" />
//                       <div className="hp-shelf">
//                         {bestPicksData[currentShelf].shelves[1].map((book) => (
//                           <div key={book.id} className="hp-shelf-item glow-effect">
//                             <img src={book.img} alt={book.title} onClick={() => navigate("/bookdetail")}/>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Nút điều hướng phải */}
//             <button 
//               className={`shelf-nav-btn shelf-nav-next ${currentShelf === bestPicksData.length - 1 ? 'shelf-nav-hidden' : ''}`}
//               onClick={nextShelf}
//               disabled={currentShelf === bestPicksData.length - 1 || isAnimating}
//             >
//               <FaChevronRight />
//             </button>
//           </div>

//           {/* Dot indicators */}
//           <div className="shelf-dots">
//             {bestPicksData.map((_, index) => (
//               <button
//                 key={index}
//                 className={`shelf-dot ${currentShelf === index ? 'shelf-dot-active' : ''}`}
//                 onClick={() => goToShelf(index)}
//                 disabled={isAnimating}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Discover Section */}
//         <section className="hp-discover-section">
//           <div className="hp-discover-content">
//             <img className="hp-discover-visual" src={bookShelf} alt="bookshelf" />

//             <div className="hp-discover-text">
//               <h2 className="hp-discover-title">
//                 {t.discover.disTitle.split('!')[0]} <span className="hp-title-highlight">{t.discover.disTitle.split('!')[1]}!</span>
//               </h2>
//               <p className="hp-discover-description">
//                 {t.discover.disSubtitle}
//               </p>
              
//               <div className="hp-stats-grid">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="hp-stat-item">
//                     <div className="hp-stat-number">{stat.number}</div>
//                     <div className="hp-stat-label">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
              
//               <button className="hp-explore-btn">{t.discover.btnExplore}</button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default HomePage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { texts } from "../../locales/texts";
import { API } from "../../api";
import { getFeaturedAuthors } from "../../api";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./HomePage.css";

import bookOpen from "../../assets/bookopen.png";
import bookShelf from "../../assets/bookshelf.png";
import bgVid from "../../assets/bgvid.mp4";
import shelf2 from "../../assets/shelf2.png";
import shelf3 from "../../assets/shelf3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = texts[lang];

  // Dữ liệu từ backend
  const [trending, setTrending] = useState([]);
  const [classic, setClassic] = useState([]);
  const [bestPick, setBestPick] = useState([]);
  const [selfDev, setSelfDev] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentShelf, setCurrentShelf] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Lấy dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendRes, classicRes, bestRes, selfRes, authorRes] = await Promise.all([
          API.get("/books/filter/trending"),
          API.get("/books/filter/classic"),
          API.get("/books/filter/bestpicks"),
          API.get("/books/filter/selfdev"),
          getFeaturedAuthors(),
        ]);

        setTrending(trendRes.data);
        setClassic(classicRes.data);
        setBestPick(bestRes.data);
        setSelfDev(selfRes.data);
        setAuthors(authorRes.data);
      } catch (error) {
        console.error("❌ Error fetching home data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Cấu trúc cho các kệ
  const bestPicksData = [
    { title: "Trending Now", type: "books", data: trending },
    { title: "Classic Literature", type: "books", data: classic },
    { title: "Our Best Picks", type: "books", data: bestPick },
    { title: "Tác giả nổi bật", type: "authors", data: authors },
    { title: "Self Development", type: "books", data: selfDev },
  ];

  const stats = [
    { number: "1K+", label: t.discover.statBooks },
    { number: "500+", label: t.discover.statVoices },
    { number: "10K+", label: t.discover.statUsers },
  ];

  const nextShelf = () => {
    if (isAnimating || currentShelf === bestPicksData.length - 1) return;
    setIsAnimating(true);
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentShelf((prev) => prev + 1);
      setSlideDirection("");
      setIsAnimating(false);
    }, 300);
  };

  const prevShelf = () => {
    if (isAnimating || currentShelf === 0) return;
    setIsAnimating(true);
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentShelf((prev) => prev - 1);
      setSlideDirection("");
      setIsAnimating(false);
    }, 300);
  };

  const goToShelf = (index) => {
    if (isAnimating || index === currentShelf) return;
    setIsAnimating(true);
    setSlideDirection(index > currentShelf ? "right" : "left");
    setTimeout(() => {
      setCurrentShelf(index);
      setSlideDirection("");
      setIsAnimating(false);
    }, 300);
  };

  if (loading) return <div className="loading">⏳ Loading HomePage...</div>;

  const currentSection = bestPicksData[currentShelf];

  return (
    <div className="home-container">
      <Header />

      <main className="home-main">
        {/* 🌟 Hero Section */}
        <section className="hp-hero-section">
          <video
            className="hp-hero-video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={bgVid} type="video/mp4" />
          </video>

          <div className="hp-hero-content">
            <h1 className="hp-hero-title">
              <span className="hp-title-line hp-highlight">{t.hero.heroTitle}</span>
            </h1>
            <p className="hp-hero-description">{t.hero.heroSubtitle}</p>

            <div className="hp-search-section">
              <div className="hp-search-box">
                <input
                  type="text"
                  placeholder={t.hero.searchTitle}
                  className="hp-search-input"
                />
                <button className="hp-search-btn">
                  <p className="hp-search-btn-text">{t.hero.searchBtn}</p>
                </button>
              </div>
            </div>
          </div>

          <img className="hero-img" src={bookOpen} alt="book" />
        </section>

        {/* 🪶 Best Picks Section */}
        <section className="best-picks-section">
          <h2 className="hp-section-title">{currentSection.title}</h2>

          <div className="shelf-navigation-container">
            <button
              className={`shelf-nav-btn shelf-nav-prev ${currentShelf === 0 ? "shelf-nav-hidden" : ""}`}
              onClick={prevShelf}
              disabled={currentShelf === 0 || isAnimating}
            >
              <FaChevronLeft />
            </button>

            <div className="shelf-wrapper">
              <div
                className={`shelf-slide-container ${
                  slideDirection ? `slide-${slideDirection}` : ""
                }`}
              >
                {currentSection.type === "authors" ? (
                  // ✍️ Hiển thị tác giả nổi bật
                  <div className="shelf-group">
                    <div className="hp-authors-container">
                      <div className="hp-authors-row">
                        {currentSection.data.length === 0 ? (
                          <p>No featured authors</p>
                        ) : (
                          currentSection.data.map((author) => (
                            <div key={author._id} className="hp-author-item">
                              <div className="hp-author-avatar">
                                <img
                                  src={`http://localhost:5000${author.image}`}
                                  alt={author.name}
                                  className="hp-author-avatar-img"
                                />
                              </div>
                              <div className="hp-author-info">
                                <div className="hp-author-name">{author.name}</div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // 📚 Hiển thị sách
                  <div className="shelf-group">
                    {[0, 1].map((row) => (
                      <div className="hp-shelf-container" key={row}>
                        <img src={row === 0 ? shelf2 : shelf3} alt="Bookshelf" className="hp-shelf-bg" />
                        <div className="hp-shelf">
                          {currentSection.data
                            .slice(row * 6, row * 6 + 6)
                            .map((book) => (
                              <div key={book._id} className="hp-shelf-item glow-effect">
                                <img
                                  src={`http://localhost:5000${book.cover}`}
                                  alt={book.title}
                                  onClick={() => navigate(`/book/${book._id}`)}
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              className={`shelf-nav-btn shelf-nav-next ${
                currentShelf === bestPicksData.length - 1 ? "shelf-nav-hidden" : ""
              }`}
              onClick={nextShelf}
              disabled={currentShelf === bestPicksData.length - 1 || isAnimating}
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="shelf-dots">
            {bestPicksData.map((_, index) => (
              <button
                key={index}
                className={`shelf-dot ${currentShelf === index ? "shelf-dot-active" : ""}`}
                onClick={() => goToShelf(index)}
                disabled={isAnimating}
              />
            ))}
          </div>
        </section>

        {/* 📚 Discover Section */}
        <section className="hp-discover-section">
          <div className="hp-discover-content">
            <img className="hp-discover-visual" src={bookShelf} alt="bookshelf" />

            <div className="hp-discover-text">
              <h2 className="hp-discover-title">
                {t.discover.disTitle.split("!")[0]}{" "}
                <span className="hp-title-highlight">
                  {t.discover.disTitle.split("!")[1]}!
                </span>
              </h2>
              <p className="hp-discover-description">{t.discover.disSubtitle}</p>

              <div className="hp-stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="hp-stat-item">
                    <div className="hp-stat-number">{stat.number}</div>
                    <div className="hp-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="hp-explore-btn">{t.discover.btnExplore}</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
