import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { texts } from "../../locales/texts";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import './RankingsPage.css';
import { 
  FaTrophy,
  FaFire,
  FaStar,
  FaBook,
  FaUserFriends,
  FaArrowUp,
  FaArrowDown,
  FaSearch,
  FaFilter,
  FaChevronDown
} from 'react-icons/fa';
import rankingBg from "../../assets/rank.jpg";
// Import author images
import NNAnh from "../../assets/authors/NNAnh.jpg";
import JKRowling from "../../assets/authors/JKRowling.jpg";
import SKing from "../../assets/authors/Sking.jpg";
import HMurakami from "../../assets/authors/HMurakami.jpg";
import JAusten from "../../assets/authors/JAusten.jpg";
import book1 from "../../assets/authors/The_Midnight_Library.jpg";
import book2 from "../../assets/authors/Atomic_Habits.png";
import book3 from "../../assets/authors/Where_the_Crawdads_Sing.jpg";
import book4 from "../../assets/authors/The_Silent_Patient.jpg";
import book5 from "../../assets/authors/Dune.webp";

const RankingsPage = () => {
    const { lang } = useLanguage();
    const t = texts[lang]?.rankings || {};
    
    const [activeTab, setActiveTab] = useState('books');
    // const [timeFilter, setTimeFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Dữ liệu rankings
    const rankingsData = {
        books: [
        {
            id: 1,
            rank: 1,
            change: 0,
            title: "The Midnight Library",
            author: "Matt Haig",
            cover: book1,
            rating: 4.8,
            reviews: "12.4K",
            genre: "Fiction",
            published: "2020"
        },
        {
            id: 2,
            rank: 2,
            change: 1,
            title: "Atomic Habits",
            author: "James Clear",
            cover: book2,
            rating: 4.7,
            reviews: "15.2K",
            genre: "Self-Help",
            published: "2018"
        },
        {
            id: 3,
            rank: 3,
            change: -1,
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            cover: book3,
            rating: 4.6,
            reviews: "8.9K",
            genre: "Fiction",
            published: "2018"
        },
        {
            id: 4,
            rank: 4,
            change: 2,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            cover: book4,
            rating: 4.5,
            reviews: "7.3K",
            genre: "Mystery",
            published: "2019"
        },
        {
            id: 5,
            rank: 5,
            change: 0,
            title: "Dune",
            author: "Frank Herbert",
            cover: book5,
            rating: 4.8,
            reviews: "25.1K",
            genre: "Sci-Fi",
            published: "1965"
        }
        ],
        authors: [
        {
            id: 1,
            rank: 1,
            change: 0,
            name: "Nguyễn Nhật Ánh",
            avatar: NNAnh,
            booksCount: 45,
            followers: "125K",
            rating: 4.8,
            genre: "Fiction"
        },
        {
            id: 2,
            rank: 2,
            change: 1,
            name: "J.K. Rowling",
            avatar: JKRowling,
            booksCount: 22,
            followers: "2.3M",
            rating: 4.9,
            genre: "Fantasy"
        },
        {
            id: 3,
            rank: 3,
            change: -1,
            name: "Stephen King",
            avatar: SKing,
            booksCount: 63,
            followers: "1.8M",
            rating: 4.6,
            genre: "Horror"
        },
        {
            id: 4,
            rank: 4,
            change: 2,
            name: "Haruki Murakami",
            avatar: HMurakami,
            booksCount: 38,
            followers: "890K",
            rating: 4.7,
            genre: "Fiction"
        },
        {
            id: 5,
            rank: 5,
            change: 0,
            name: "Jane Austen",
            avatar: JAusten,
            booksCount: 6,
            followers: "950K",
            rating: 4.8,
            genre: "Classic"
        }
        ],
        genres: [
        {
            id: 1,
            rank: 1,
            change: 0,
            name: "Fiction",
            booksCount: "2.5K",
            readers: "1.2M",
            trending: true
        },
        {
            id: 2,
            rank: 2,
            change: 1,
            name: "Fantasy",
            booksCount: "1.8K",
            readers: "980K",
            trending: true
        },
        {
            id: 3,
            rank: 3,
            change: -1,
            name: "Mystery",
            booksCount: "1.2K",
            readers: "750K",
            trending: false
        },
        {
            id: 4,
            rank: 4,
            change: 0,
            name: "Science Fiction",
            booksCount: "900",
            readers: "620K",
            trending: true
        },
        {
            id: 5,
            rank: 5,
            change: 2,
            name: "Self-Help",
            booksCount: "800",
            readers: "550K",
            trending: false
        }
        ]
    };

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("All time");
    const options = ["All time", "This Month", "This Week", "Today"];

    const getRankChangeIcon = (change) => {
        if (change > 0) return <FaArrowUp className="rank-up" />;
        if (change < 0) return <FaArrowDown className="rank-down" />;
        return <span className="rank-same">-</span>;
    };

    const getRankChangeText = (change) => {
        if (change > 0) return `+${change}`;
        if (change < 0) return change;
        return 'Same';
    };

    const filteredData = rankingsData[activeTab].filter(item => {
        if (activeTab === 'books') {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.author.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (activeTab === 'authors') {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    return (
        <div className="rankings-page">
            <Header />
            
            <main className="rankings-main">
                {/* Hero Section */}
                <section className="rankings-hero" style={{ '--rankings-bg': `url(${rankingBg})` }}>
                    <div className="rankings-hero-content">
                        <div className="rankings-hero-text">
                            <h1 className="rankings-title">
                                <span className="rp-title-line rp-highlight">{t.title || "Top Rankings"}</span>
                            </h1>
                            <p className="rankings-subtitle">
                                {t.subtitle || "Discover the most popular books, authors, and genres based on ratings, reviews, and reader engagement."}
                            </p>
                        </div>
                        
                        <div className="rankings-stats">
                            <div className="ranking-stat">
                                <FaTrophy className="rp-stat-icon" />
                                <div className="rp-stat-content">
                                    <span className="rp-stat-number">50K+</span>
                                    <span className="rp-stat-label">{t.ratedBooks || "Rated Books"}</span>
                                </div>
                            </div>
                            <div className="ranking-stat">
                                <FaUserFriends className="rp-stat-icon" />
                                <div className="rp-stat-content">
                                    <span className="rp-stat-number">100K+</span>
                                    <span className="rp-stat-label">{t.activeReaders || "Active Readers"}</span>
                                </div>
                            </div>
                            <div className="ranking-stat">
                                <FaStar className="rp-stat-icon" />
                                <div className="rp-stat-content">
                                    <span className="rp-stat-number">2M+</span>
                                    <span className="rp-stat-label">{t.reviews || "Reviews"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rankings Content */}
                <section className="rankings-content">
                    <div className="rankings-container">
                        {/* Tabs và Filters */}
                        <div className="rankings-header">
                            <div className="rankings-tabs">
                                <button 
                                className={`rp-tab-btn ${activeTab === 'books' ? 'active' : ''}`}
                                onClick={() => setActiveTab('books')}
                                >
                                <FaBook className="rp-tab-icon" />
                                {t.topBooks || "Top Books"}
                                </button>
                                <button 
                                className={`rp-tab-btn ${activeTab === 'authors' ? 'active' : ''}`}
                                onClick={() => setActiveTab('authors')}
                                >
                                <FaUserFriends className="rp-tab-icon" />
                                {t.topAuthors || "Top Authors"}
                                </button>
                                <button 
                                className={`rp-tab-btn ${activeTab === 'genres' ? 'active' : ''}`}
                                onClick={() => setActiveTab('genres')}
                                >
                                <FaFire className="rp-tab-icon" />
                                {t.topGenres || "Top Genres"}
                                </button>
                            </div>

                            <div className="rankings-filters">
                                <div className="rp-search-box">
                                    <FaSearch className="rp-search-icon" />
                                    <input
                                        type="text"
                                        placeholder={t.searchPlaceholder || "Search..."}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="rp-search-input"
                                    />
                                </div>

                                <div className="rp-time-filter">
                                    <FaFilter className="rp-filter-icon" />
                                    <div className="rp-custom-select" onClick={() => setOpen(!open)}>
                                        <span>{selected}</span>
                                        <FaChevronDown className={`rp-arrow ${open ? "open" : ""}`} />
                                    </div>

                                    {open && (
                                        <ul className="rp-custom-options">
                                        {options.map((opt) => (
                                            <li
                                            key={opt}
                                            className={opt === selected ? "active" : ""}
                                            onClick={() => {
                                                setSelected(opt);
                                                setOpen(false);
                                            }}
                                            >
                                            {opt}
                                            </li>
                                        ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Rankings List */}
                        <div className="rankings-list">
                            {filteredData.map((item) => (
                                <div key={item.id} className="ranking-item">
                                    {/* Rank Number */}
                                    <div className="rank-number">
                                        <span className={`rank ${item.rank <= 3 ? `rank-${item.rank}` : ''}`}>
                                        {item.rank}
                                        </span>
                                        <div className="rank-change">
                                            {getRankChangeIcon(item.change)}
                                            <span className={`rp-change-text ${item.change > 0 ? 'up' : item.change < 0 ? 'down' : 'same'}`}>
                                                {getRankChangeText(item.change)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content based on tab */}
                                    {activeTab === 'books' && (
                                        <div className="ranking-content book-ranking">
                                            <img src={item.cover} alt={item.title} className="rp-book-cover" />
                                            <div className="ranking-info">
                                                <h3 className="rp-item-title">{item.title}</h3>
                                                <p className="rp-item-subtitle">by {item.author}</p>
                                                <div className="rp-item-meta">
                                                    <span className="rp-genre">{item.genre}</span>
                                                    <span className="rp-published">{item.published}</span>
                                                </div>
                                                <div className="rp-item-stats">
                                                    <div className="rp-stat">
                                                        <FaStar className="rp-stat-icon" />
                                                        <span>{item.rating}</span>
                                                    </div>
                                                    <div className="rp-stat">
                                                        <FaBook className="rp-stat-icon" />
                                                        <span>{item.reviews} reviews</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'authors' && (
                                        <div className="ranking-content author-ranking">
                                            <img src={item.avatar} alt={item.name} className="rp-author-avatar" />
                                            <div className="ranking-info">
                                                <h3 className="rp-item-title">{item.name}</h3>
                                                <p className="rp-item-subtitle">{item.genre}</p>
                                                <div className="rp-item-stats">
                                                    <div className="rp-stat">
                                                        <FaBook className="rp-stat-icon" />
                                                        <span>{item.booksCount} books</span>
                                                    </div>
                                                    <div className="rp-stat">
                                                        <FaUserFriends className="rp-stat-icon" />
                                                        <span>{item.followers}</span>
                                                    </div>
                                                    <div className="rp-stat">
                                                        <FaStar className="rp-stat-icon" />
                                                        <span>{item.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'genres' && (
                                        <div className="ranking-content genre-ranking">
                                            <div className="rp-genre-icon">
                                                <FaFire className={`rp-fire-icon ${item.trending ? 'trending' : ''}`} />
                                            </div>
                                            <div className="ranking-info">
                                                <h3 className="rp-item-title">{item.name}</h3>
                                                <div className="rp-item-stats">
                                                    <div className="rp-stat">
                                                        <FaBook className="rp-stat-icon" />
                                                        <span>{item.booksCount} books</span>
                                                    </div>
                                                    <div className="rp-stat">
                                                        <FaUserFriends className="rp-stat-icon" />
                                                        <span>{item.readers} readers</span>
                                                    </div>
                                                </div>
                                                {item.trending && (
                                                    <div className="rp-trending-badge">
                                                        <FaFire />
                                                        <span>Trending</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Button */}
                                    <button className="rp-view-btn">
                                        {activeTab === 'books' ? 'View Book' : 
                                        activeTab === 'authors' ? 'View Profile' : 'Explore'}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="rp-load-more-section">
                            <button className="rp-load-more-btn">
                                {t.loadMore || "Load More"}
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default RankingsPage;