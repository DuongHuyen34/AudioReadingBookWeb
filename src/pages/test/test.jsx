import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useLanguage } from '../../hooks/useLanguage';
import { texts } from "../../locales/texts";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import '../BooksShelfSection.css';
import './BooksPage.css';
import { 
  FaSearch,
  FaFilter,
  FaStar,
  FaBook,
  FaBookOpen,
  FaHeart,
  FaRegHeart,
  FaSort,
  FaLayerGroup,
  FaPalette,
  FaMagic,
  FaChevronDown,
  FaPlay,
  FaPause
} from 'react-icons/fa';
import booksBg from "../../assets/store.jpg";
import shelf2 from "../../assets/ke1.png"; 
import shelf3 from "../../assets/ke2.png"; 
import book1 from "../../assets/authors/The_Midnight_Library.jpg";
import book2 from "../../assets/authors/Atomic_Habits.png";
import book3 from "../../assets/authors/Where_the_Crawdads_Sing.jpg";
import book4 from "../../assets/authors/The_Silent_Patient.jpg";
import book5 from "../../assets/authors/Dune.webp";
import book6 from "../../assets/authors/The_Alchemist.jpg";

const BooksPage = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = texts[lang]?.books || {};
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState(new Set());
  const [activeBook, setActiveBook] = useState(null);
  const audioRef = useRef(null);

  const shelfRef = useRef(null);
  const [hoveredBook, setHoveredBook] = useState(null); // Lưu thông tin sách
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  // Hủy ẩn card (Xóa timeout)
  const clearHideTimeout = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
  };

  const handleMouseEnter = (e, book) => {
    // 1.1. Xóa timeout nếu có (vì chuột quay lại vùng kích hoạt)
    clearHideTimeout();

    const itemRect = e.currentTarget.getBoundingClientRect();
    const shelfContainerRect = shelfRef.current.getBoundingClientRect();
    
    // Lấy kích thước card (cần phải khớp với CSS: width: 350px, height: 250px)
    const CARD_WIDTH = 350; 
    const CARD_HEIGHT = 250; 
    
    // Tính toán vị trí card:
    
    // 1. Tính toán vị trí LEFT:
    // Chúng ta muốn card CĂN GIỮA theo chiều ngang của item sách.
    // Vị trí giữa item sách = (itemRect.left - shelfContainerRect.left) + (itemRect.width / 2)
    // Vị trí mép trái card = Vị trí giữa item sách - (CARD_WIDTH / 2)
    const calculatedLeft = itemRect.left - shelfContainerRect.left + (itemRect.width / 2) - (CARD_WIDTH / 2);

    // 2. Tính toán vị trí TOP:
    // Chúng ta muốn card đè lên ảnh sách, nên chỉ cần chỉnh vị trí top âm nhẹ.
    // Vị trí đỉnh item sách = itemRect.top - shelfContainerRect.top
    // Đặt card cao hơn item sách 10px (giá trị âm nhỏ) để card "lấn" lên trên
    const calculatedTop = itemRect.top - shelfContainerRect.top -10; 

    setHoveredBook(book);
    setCardPosition({
      top: calculatedTop, 
      left: calculatedLeft,
      display: 'flex'
    });
  };

  // 2. Kích hoạt ẩn card (sách hoặc card)
  const handleMouseLeave = () => {
    // 2.1. Thiết lập timeout 100ms trước khi ẩn card
    const timeoutId = setTimeout(() => {
      setHoveredBook(null);
      setCardPosition({ top: 0, left: 0, display: 'none' });
      setLeaveTimeout(null);
    }, 100); // <-- Độ trễ 100ms
    
    setLeaveTimeout(timeoutId);
  };

  // 3. Chuột di chuyển lên card
  const handleCardMouseEnter = () => {
    // 3.1. Hủy bỏ timeout ẩn card ngay lập tức
    clearHideTimeout(); 
  };

  // Dữ liệu sách với thông tin phong phú
  const booksData = [
    {
      id: 1,
      title: "The Midnight Library",
      titleVi: "Thư Viện Nửa Đêm",
      author: "Matt Haig",
      cover: book1,
      rating: 4.8,
      reviews: 12400,
      pages: 304,
      genre: "Fiction",
      genreVi: "Tiểu thuyết",
      published: "2020",
      description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
      descriptionVi: "Giữa sự sống và cái chết có một thư viện, và trong thư viện đó, những kệ sách kéo dài vô tận. Mỗi cuốn sách mang đến một cơ hội để trải nghiệm một cuộc sống khác mà bạn có thể đã sống.",
      color: "#8B4513",
      audioSample: "/audio/sample1.mp3",
      featured: true
    },
    {
      id: 2,
      title: "Atomic Habits",
      titleVi: "Thói Quen Nguyên Tử", 
      author: "James Clear",
      cover: book2,
      rating: 4.7,
      reviews: 15200,
      pages: 320,
      genre: "Self-Help",
      genreVi: "Tự lực",
      published: "2018",
      description: "Tiny Changes, Remarkable Results. An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
      descriptionVi: "Những thay đổi nhỏ, kết quả đáng kinh ngạc. Cách dễ dàng và đã được chứng minh để xây dựng thói quen tốt và phá vỡ thói quen xấu.",
      color: "#2E8B57",
      audioSample: "/audio/sample2.mp3",
      featured: true
    },
    {
      id: 3,
      title: "Where the Crawdads Sing",
      titleVi: "Nơi Những Con Cua Hát", 
      author: "Delia Owens",
      cover: book3,
      rating: 4.6,
      reviews: 8900,
      pages: 384,
      genre: "Fiction",
      genreVi: "Tiểu thuyết",
      published: "2018",
      description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast.",
      descriptionVi: "Trong nhiều năm, những lời đồn về 'Cô gái đầm lầy' đã ám ảnh Barkley Cove, một thị trấn yên tĩnh trên bờ biển Bắc Carolina.",
      color: "#4682B4",
      audioSample: "/audio/sample3.mp3"
    },
    {
      id: 4,
      title: "The Silent Patient",
      titleVi: "Bệnh Nhân Im Lặng",
      author: "Alex Michaelides", 
      cover: book4,
      rating: 4.5,
      reviews: 7300,
      pages: 336,
      genre: "Mystery",
      genreVi: "Trinh thám",
      published: "2019",
      description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer.",
      descriptionVi: "Cuộc sống của Alicia Berenson dường như hoàn hảo. Một họa sĩ nổi tiếng kết hôn với một nhiếp ảnh gia thời trang được săn đón.",
      color: "#800020",
      audioSample: "/audio/sample4.mp3"
    },
    {
      id: 5,
      title: "Dune",
      titleVi: "Xứ Cát",
      author: "Frank Herbert",
      cover: book5, 
      rating: 4.8,
      reviews: 25100,
      pages: 412,
      genre: "Sci-Fi",
      genreVi: "Khoa học viễn tưởng",
      published: "1965",
      description: "Set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs.",
      descriptionVi: "Đặt trong tương lai xa giữa một xã hội liên sao phong kiến nơi các gia tộc quý tộc khác nhau kiểm soát các lãnh địa hành tinh.",
      color: "#D2691E",
      audioSample: "/audio/sample5.mp3",
      featured: true
    },
    {
      id: 6,
      title: "The Alchemist",
      titleVi: "Nhà Giả Kim", 
      author: "Paulo Coelho",
      cover: book6,
      rating: 4.7,
      reviews: 18500,
      pages: 208,
      genre: "Fiction",
      genreVi: "Tiểu thuyết",
      published: "1988",
      description: "A magical story about the wisdom of listening to our hearts, recognizing opportunity and learning to read the omens.",
      descriptionVi: "Một câu chuyện kỳ diệu về sự khôn ngoan của việc lắng nghe trái tim, nhận ra cơ hội và học cách đọc các điềm báo.",
      color: "#DA9100",
      audioSample: "/audio/sample6.mp3"
    }
  ];

  const genres = [
    { value: 'all', label: t.allGenres || 'All Genres' },
    { value: 'fiction', label: t.fiction || 'Fiction' },
    { value: 'mystery', label: t.mystery || 'Mystery' },
    { value: 'sciFi', label: t.sciFi || 'Science Fiction' },
    { value: 'selfHelp', label: t.selfHelp || 'Self-Help' },
    { value: 'fantasy', label: t.fantasy || 'Fantasy' },
    { value: 'romance', label: t.romance || 'Romance' },
    { value: 'thriller', label: t.thriller || 'Thriller' },
    { value: 'biography', label: t.biography || 'Biography' }
  ];

  const sortOptions = [
    { value: 'popular', label: t.popular || 'Popular' },
    { value: 'newest', label: t.newest || 'Newest' },
    { value: 'rating', label: t.rating || 'Rating' },
    { value: 'title', label: t.titleSort || 'Title' }
  ];

  const getGenreLabel = (genreValue) => {
    const genre = genres.find(g => g.value === genreValue);
    return genre ? genre.label : genreValue;
  };

  const getFavoriteTooltip = (bookId) => {
    return favorites.has(bookId) 
      ? t.removeFromFavorites || 'Remove from Favorites'
      : t.addToFavorites || 'Add to Favorites';
  };

  const toggleFavorite = (bookId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(bookId)) {
        newFavorites.delete(bookId);
      } else {
        newFavorites.add(bookId);
      }
      return newFavorites;
    });
  };

  const toggleAudio = (book) => {
    if (activeBook?.id === book.id) {
      setActiveBook(null);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setActiveBook(book);
      // In a real app, you would play the actual audio sample
      console.log('Playing audio sample:', book.audioSample);
    }
  };

  const filteredBooks = booksData.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (lang === 'vi' && book.titleVi?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.published) - new Date(a.published);
      case 'rating':
        return b.rating - a.rating;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return b.reviews - a.reviews;
    }
  });

  const featuredBooks = booksData.filter(book => book.featured);

  return (
    <div className="books-page">
      <Header />
      
      <main className="books-main">
        {/* Hero Section với Parallax Effect */}
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
              
              {/* Search Bar với hiệu ứng */}
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

            {/* Featured Books Carousel */}
            <div className="bp-featured-books">
              <div className="bp-featured-header">
                <FaMagic className="bp-featured-icon" />
                <h3>{t.featured || "Featured Books"}</h3>
              </div>
              <div className="bp-featured-carousel">
                {featuredBooks.map(book => (
                  <div key={book.id} className="bp-featured-book" style={{ '--book-color': book.color }}>
                    <div className="book-glow"></div>
                    <img src={book.cover} alt={book.title} className="bp-featured-cover" />
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

        {/* Main Content */}
        <section className="books-content">
          <div className="books-container">
            {/* Controls Bar */}
            <div className="bp-controls-bar">
              <div className="bp-controls-left">
                <div className="bp-view-toggle">
                  <button 
                    className={`bp-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <FaLayerGroup />
                  </button>
                  <button 
                    className={`bp-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                    title={t.viewList}
                  >
                    <FaBook />
                  </button>
                </div>

                <div className="bp-filter-group">
                  <FaFilter className="bp-filter-icon" />
                  <span className="bp-filter-label">{t.filterBy}:</span>
                  <select 
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                    className="bp-genre-select"
                  >
                    {genres.map(genre => (
                      <option key={genre.value} value={genre.value}>
                        {genre.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bp-controls-right">
                <div className="bp-sort-group">
                  <FaSort className="bp-sort-icon" />
                  <span className="bp-sort-label">{t.sortBy}:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bp-sort-select"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Books Grid/List */}
            {/* <div className={`books-display ${viewMode}`}>
              {sortedBooks.map(book => (
                <div key={book.id} className="book-card" style={{ '--book-color': book.color }}>
                  <div className="bp-card-inner">
                    <div className="bp-cover-container">
                      <img src={book.cover} alt={book.title} className="book-cover" />
                      <div className="bp-cover-overlay">
                        <button 
                          className="bp-favorite-btn"
                          onClick={() => toggleFavorite(book.id)}
                          title={getFavoriteTooltip(book.id)}
                        >
                          {favorites.has(book.id) ? <FaHeart /> : <FaRegHeart />}
                        </button>
                        <button 
                          className="bp-audio-btn"
                          onClick={() => toggleAudio(book)}
                          title={t.audioSample}
                        >
                          {activeBook?.id === book.id ? <FaPause /> : <FaPlay />}
                        </button>
                      </div>
                      <div className="book-glow-effect"></div>
                    </div>

                    <div className="book-info">
                      <h3 className="book-title">{lang === 'vi' ? book.titleVi : book.title}</h3>
                      <p className="book-author">{t.by} {book.author}</p>
                      
                      <div className="book-meta">
                        <div className="bp-rating">
                          <FaStar className="bp-star-icon" />
                          <span>{book.rating}</span>
                          <span className="bp-reviews">({book.reviews.toLocaleString()})</span>
                        </div>
                        <div className="bp-pages">
                          <FaBookOpen className="bp-pages-icon" />
                          <span>{book.pages} {t.pages}</span>
                        </div>
                      </div>

                      <div className="bp-genre-tag">
                        <span>{getGenreLabel(book.genre)}</span>
                      </div>

                      <p className="book-description">
                        {lang === 'vi' ? book.descriptionVi : book.description}
                      </p>

                      <div className="book-actions">
                        <button className="bp-read-btn">
                          {t.readNow}
                        </button>
                        <button className="bp-details-btn">
                          {t.details}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Books Grid/List với hiệu ứng kệ sách */}
            <div className={`books-display ${viewMode}`}>
              {sortedBooks.map(book => (
                <div key={book.id} className="book-card" style={{ '--book-color': book.color }}>
                  <div className="bp-card-inner">

                    <div className="bp-cover-container">
                      <img src={book.cover} alt={book.title} className="book-cover" />
                      <div className="book-glow-effect"></div>
                    </div>

                    <div className="book-info">
                      <h3 className="book-title">{lang === 'vi' ? book.titleVi : book.title}</h3>
                      <p className="book-author">{t.by || 'by'} {book.author}</p>
                      
                      <div className="book-meta">
                        <div className="bp-rating">
                          <FaStar className="bp-star-icon" />
                          <span>{book.rating}</span>
                          <span className="bp-reviews">({book.reviews.toLocaleString()})</span>
                        </div>
                        <div className="bp-pages">
                          <FaBookOpen className="bp-pages-icon" />
                          <span>{book.pages} {t.pages || 'pages'}</span>
                        </div>
                      </div>

                      <div className="bp-genre-tag">
                        <span>{getGenreLabel(book.genre)}</span>
                      </div>

                      <p className="book-description">
                        {lang === 'vi' ? book.descriptionVi : book.description}
                      </p>

                      <div className="book-action-icons">
                        <button 
                          className={`bp-favorite-btn ${favorites.has(book.id) ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(book.id);
                          }}
                          title={getFavoriteTooltip(book.id)}
                        >
                          {favorites.has(book.id) ? <FaHeart /> : <FaRegHeart />}
                        </button>
                        
                        <button 
                          className={`bp-audio-btn ${activeBook?.id === book.id ? 'playing' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleAudio(book);
                          }}
                          title={t.audioSample || 'Audio Sample'}
                        >
                          {activeBook?.id === book.id ? <FaPause /> : <FaPlay />}
                        </button>
                      </div>

                      <div className="book-actions">
                        <button className="bp-read-btn">
                          {t.readNow || 'Read Now'}
                        </button>
                        <button className="bp-details-btn">
                          {t.details || 'Details'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Books Shelf Section - Giống HomePage */}
            {/* <section className="bp-books-shelf-section">
              <h2 className="bp-shelf-title">{t.featured || "Featured Books"}</h2>
              
              <div className="bp-shelves-group">
                <div className="bp-shelf-container">
                  <img src={shelf2} alt="Bookshelf" className="bp-shelf-bg" />
                  <div className="bp-shelf">
                    {featuredBooks.slice(0, 6).map((book) => (
                      <div key={book.id} className="bp-shelf-item glow-effect">
                        <img 
                          src={book.cover} 
                          alt={book.title} 
                          onClick={() => navigate("/bookdetail")}
                        />
                        <div className="bp-shelf-book-info">
                          <div className="bp-shelf-book-title">
                            {lang === 'vi' ? book.titleVi : book.title}
                          </div>
                          <div className="bp-shelf-book-author">{book.author}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bp-shelf-container">
                  <img src={shelf3} alt="Bookshelf" className="bp-shelf-bg" />
                  <div className="bp-shelf">
                    {featuredBooks.slice(6).map((book) => (
                      <div key={book.id} className="bp-shelf-item glow-effect">
                        <img 
                          src={book.cover} 
                          alt={book.title} 
                          onClick={() => navigate("/bookdetail")}
                        />
                        <div className="bp-shelf-book-info">
                          <div className="bp-shelf-book-title">
                            {lang === 'vi' ? book.titleVi : book.title}
                          </div>
                          <div className="bp-shelf-book-author">{book.author}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section> */}

            {/* Books Shelf Section với hover card */}
            <section className="bp-books-shelf-section">
              <div className='bp-books-container'>
                <h2 className="bp-shelf-title">{t.featured || "Featured Books"}</h2>
              
                <div className="bp-shelves-group" ref={shelfRef}>
                  <div className="bp-shelf-container">
                    <img src={shelf2} alt="Bookshelf" className="bp-shelf-bg" />
                    <div className="bp-shelf">
                      {featuredBooks.slice(0, 6).map((book) => (
                        <div 
                          key={book.id} 
                          className="bp-shelf-item glow-effect"
                          onMouseEnter={(e) => handleMouseEnter(e, book)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className='bp-shelf-item-img'>
                            <img 
                              src={book.cover} 
                              alt={book.title} 
                              className='bp-shelf-img'
                              onClick={() => navigate("/bookdetail")}
                            />
                          </div>
                          {/* <div className="bp-shelf-book-info">
                            <div className="bp-shelf-book-title">
                              {lang === 'vi' ? book.titleVi : book.title}
                            </div>
                            <div className="bp-shelf-book-author">{book.author}</div>
                          </div>*/}
                          
                          {/* <div className="bp-book-card">
                            <div className="bp-book-card-content">
                              <div className="bp-book-card-image">
                                <img src={book.cover} alt={book.title} className="bp-book-card-img" />
                              </div>
                              
                              <div className="bp-book-card-info">
                                <h3 className="bp-book-card-title">
                                  {lang === 'vi' ? book.titleVi : book.title}
                                </h3>
                                <p className="bp-book-card-author">{t.by || 'by'} {book.author}</p>
                                
                                <div className="bp-book-card-meta">
                                  <div className="bp-book-card-rating">
                                    <FaStar className="bp-book-card-star" />
                                    <span>{book.rating}</span>
                                  </div>
                                  <div className="bp-book-card-pages">
                                    <FaBookOpen className="bp-book-card-pages-icon" />
                                    <span>{book.pages} {t.pages || 'pages'}</span>
                                  </div>
                                </div>
                                
                                <div className="bp-book-card-genre">
                                  {getGenreLabel(book.genre)}
                                </div>
                                
                                <p className="bp-book-card-description">
                                  {lang === 'vi' ? book.descriptionVi : book.description}
                                </p>
                                
                                <div className="bp-book-card-actions">
                                  <button className="bp-book-card-read">
                                    {t.readNow || 'Read Now'}
                                  </button>
                                  <button className="bp-book-card-details">
                                    {t.details || 'Details'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>

                  {hoveredBook && (
                    <div 
                      className="bp-book-card-absolute" 
                      style={{ 
                        top: cardPosition.top, 
                        left: cardPosition.left,
                        display: cardPosition.display || 'flex',
                        // Đảm bảo card không bị dịch chuyển khi có transform: scale()
                        // transform: 'translateX(0%) translateY(0%)'
                      }}
                      onMouseEnter={handleCardMouseEnter} // <-- Hủy ẩn khi di chuột lên card
                      onMouseLeave={handleMouseLeave}    // <-- Kích hoạt ẩn (có trễ) khi di chuột rời card
                    >
                      {/* Sao chép nội dung card sách từ code JSX cũ */}
                      <div className="bp-book-card-content">
                        <div className="bp-book-card-image">
                          <img src={hoveredBook.cover} alt={hoveredBook.title} className="bp-book-card-img" />
                        </div>
                        
                        <div className="bp-book-card-info">
                          <h3 className="bp-book-card-title">
                            {lang === 'vi' ? hoveredBook.titleVi : hoveredBook.title}
                          </h3>
                          <p className="bp-book-card-author">{t.by || 'by'} {hoveredBook.author}</p>
                          {/* ... (Phần meta và actions) ... */}
                          <div className="bp-book-card-meta">
                            <div className="bp-book-card-rating">
                              <FaStar className="bp-book-card-star" />
                              <span>{hoveredBook.rating}</span>
                            </div>
                            <div className="bp-book-card-pages">
                              <FaBookOpen className="bp-book-card-pages-icon" />
                              <span>{hoveredBook.pages} {t.pages || 'pages'}</span>
                            </div>
                          </div>
                          
                          <div className="bp-book-card-genre">
                            {getGenreLabel(hoveredBook.genre)}
                          </div>
                          
                          <p className="bp-book-card-description">
                            {lang === 'vi' ? hoveredBook.descriptionVi : hoveredBook.description}
                          </p>
                          <div className="bp-book-card-actions">
                            <button className="bp-book-card-read">
                              {t.readNow || 'Read Now'}
                            </button>
                            <button className="bp-book-card-details">
                              {t.details || 'Details'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="bp-shelf-container">
                    <img src={shelf3} alt="Bookshelf" className="bp-shelf-bg" />
                    <div className="bp-shelf">
                      {featuredBooks.slice(0, 6).map((book) => (
                        <div key={book.id} className="bp-shelf-item glow-effect" style={{'margin-top': '60px'}}>
                          <div className='bp-shelf-item-img'>
                            <img 
                              src={book.cover} 
                              alt={book.title} 
                              className='bp-shelf-img'
                              onClick={() => navigate("/bookdetail")}
                            />
                          </div>
                          {/* <div className="bp-shelf-book-info">
                            <div className="bp-shelf-book-title">
                              {lang === 'vi' ? book.titleVi : book.title}
                            </div>
                            <div className="bp-shelf-book-author">{book.author}</div>
                          </div>

                          <div className="bp-book-card">
                            <div className="bp-book-card-content">
                              <div className="bp-book-card-image">
                                <img src={book.cover} alt={book.title} className="bp-book-card-img" />
                              </div>
                              
                              <div className="bp-book-card-info">
                                <h3 className="bp-book-card-title">
                                  {lang === 'vi' ? book.titleVi : book.title}
                                </h3>
                                <p className="bp-book-card-author">{t.by || 'by'} {book.author}</p>
                                
                                <div className="bp-book-card-meta">
                                  <div className="bp-book-card-rating">
                                    <FaStar className="bp-book-card-star" />
                                    <span>{book.rating}</span>
                                  </div>
                                  <div className="bp-book-card-pages">
                                    <FaBookOpen className="bp-book-card-pages-icon" />
                                    <span>{book.pages} {t.pages || 'pages'}</span>
                                  </div>
                                </div>
                                
                                <div className="bp-book-card-genre">
                                  {getGenreLabel(book.genre)}
                                </div>
                                
                                <p className="bp-book-card-description">
                                  {lang === 'vi' ? book.descriptionVi : book.description}
                                </p>
                                
                                <div className="bp-book-card-actions">
                                  <button className="bp-book-card-read">
                                    {t.readNow || 'Read Now'}
                                  </button>
                                  <button className="bp-book-card-details">
                                    {t.details || 'Details'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Load More */}
            <div className="bp-load-more-section">
              <button className="bp-load-more-btn">
                <span>{t.loadMore || "Discover More Books"}</span>
                <div className="bp-btn-sparkles">
                  <div className="bp-sparkle"></div>
                  <div className="bp-sparkle"></div>
                  <div className="bp-sparkle"></div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} className="bp-audio-element" />
    </div>
  );
};

export default BooksPage;