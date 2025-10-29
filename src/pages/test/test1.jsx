// import React, { useState } from 'react';
// import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import './KidsBookPage.css';
// // Giả định bạn đã import hai ảnh
// import bookBackground from '../../assets/child.png'; // Ảnh nền sách vàng (ảnh 1)

// // Dữ liệu mô phỏng
// const storyData = [
//     { id: 1, title: "Sinh nhật của Anna", image: "/images/story1.jpg" },
//     { id: 2, title: "Cô Bé Lọ Lem", image: "/images/story2.jpg" },
//     { id: 3, title: "Ông Trăng", image: "/images/story3.jpg" },
//     { id: 4, title: "Quả Nhân Sâm...", image: "/images/story4.jpg" },
//     { id: 5, title: "Hạc Trả Ơn (phần 3)", image: "/images/story5.jpg" },
//     { id: 6, title: "Hạc Trả Ơn (phần 2)", image: "/images/story6.jpg" },
//     { id: 7, title: "Hạc Trả Ơn (phần 1)", image: "/images/story7.jpg" },
//     { id: 8, title: "Táo Ngọc Tàng Linh Chi", image: "/images/story8.jpg" },
//     { id: 9, title: "Công chúa Thủy Cung", image: "/images/story9.jpg" },
// ];

// const Tabs = ["Tất cả", "Truyện cổ", "Hiện đại", "Thơ", "Sóc Nhí"];

// const KidsBookPage = () => {
//     const [activeTab, setActiveTab] = useState("Sóc Nhí");
//     const [currentPage, setCurrentPage] = useState(43);
//     const totalPages = 43;

//     return (
//         <div className="kids-page-container">
//             {/* Vỏ sách làm nền */}
//             <div className="book-bg-wrapper">
//                 <img src={bookBackground} alt="Book Background" className="book-bg" />
//             </div>

//             {/* Khung nội dung (Đặt chính xác trên nền sách) */}
//             <div className="book-content-frame">
                
//                 {/* 1. Menu Tabs và Thanh tìm kiếm */}
//                 <div className="book-header-controls">
//                     <div className="tabs-container">
//                         {Tabs.map((tab) => (
//                             <button
//                                 key={tab}
//                                 className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
//                                 onClick={() => setActiveTab(tab)}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>
//                     <div className="search-box">
//                         <input type="text" placeholder="Tìm kiếm..." />
//                         <FaSearch className="search-icon" />
//                     </div>
//                 </div>

//                 {/* 2. Lưới ảnh sách (Các câu chuyện) */}
//                 <div className="stories-grid">
//                     {storyData.map((story) => (
//                         <div key={story.id} className="story-item">
//                             {/* Ở đây bạn sẽ dùng ảnh thật của câu chuyện thay cho placeholder */}
//                             <img src={story.image} alt={story.title} className="story-image" />
//                         </div>
//                     ))}
//                 </div>

//                 {/* 3. Phân trang */}
//                 <div className="pagination-controls">
//                     <div className="page-number-display">
//                         Chọn trang: **{currentPage}** / **{totalPages}**
//                     </div>
//                     {/* Nút chuyển trang (Bên trong nội dung sách) */}
//                     <div className="pagination-buttons">
//                         <button 
//                             className="nav-btn" 
//                             disabled={currentPage === 1}
//                             onClick={() => setCurrentPage(1)}
//                         >
//                             <FaChevronLeft /> <FaChevronLeft />
//                         </button>
//                         <button 
//                             className="nav-btn" 
//                             disabled={currentPage === 1}
//                             onClick={() => setCurrentPage(currentPage - 1)}
//                         >
//                             <FaChevronLeft />
//                         </button>
//                         <button 
//                             className="nav-btn" 
//                             disabled={currentPage === totalPages}
//                             onClick={() => setCurrentPage(currentPage + 1)}
//                         >
//                             <FaChevronRight />
//                         </button>
//                         <button 
//                             className="nav-btn" 
//                             disabled={currentPage === totalPages}
//                             onClick={() => setCurrentPage(totalPages)}
//                         >
//                             <FaChevronRight /> <FaChevronRight />
//                         </button>
//                     </div>
//                 </div>
//             </div>
            
//             {/* 4. Nút chuyển trang Lớn (Nằm ngoài khung nội dung, trên nền sách) */}
//             <button className="large-nav-btn left-btn">
//                 <FaChevronLeft />
//             </button>
//             <button className="large-nav-btn right-btn">
//                 <FaChevronRight />
//             </button>
//         </div>
//     );
// };

// export default KidsBookPage;

import React, { useState } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './KidsBookPage.css';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import bookBackground from '../../assets/child.png'; // Ảnh nền sách vàng (ảnh 1)
import b1 from '../../assets/child/viet-tiep-cau-chuyen-hoa-binh.png';
import b2 from '../../assets/child/tam-cam-1.jpg';
import b3 from '../../assets/child/su-tich-dua-hau-1.jpg';
import b4 from '../../assets/child/an-khe-tra-vang-1.jpg';
import b5 from '../../assets/child/cau-chuyen-bo-dua.jpg';
import b6 from '../../assets/child/chu-tho-tinh-khon.png';
import b7 from '../../assets/child/ga-de-trung-vang-1.jpg';
import b8 from '../../assets/child/qua-bau-tien.jpg';
import b9 from '../../assets/child/vit-con-cau-tha-1.jpg';

// Dữ liệu mô phỏng
const storyData = [
    { id: 1, title: "Sinh nhật của Anna", image: b1 },
    { id: 2, title: "Cô Bé Lọ Lem", image: b2 },
    { id: 3, title: "Ông Trăng", image: b3 },
    { id: 4, title: "Quả Nhân Sâm...", image: b4 },
    { id: 5, title: "Hạc Trả Ơn (phần 3)", image: b5 },
    { id: 6, title: "Hạc Trả Ơn (phần 2)", image: b6 },
    { id: 7, title: "Hạc Trả Ơn (phần 1)", image: b7 },
    { id: 8, title: "Táo Ngọc Tàng Linh Chi", image: b8 },
    { id: 9, title: "Công chúa Thủy Cung", image: b9 },
];

const Tabs = ["Tất cả", "Truyện cổ", "Hiện đại", "Thơ"];

const KidsBookPage = () => {
    const [activeTab, setActiveTab] = useState("Tất cả");
    // const [currentPage, setCurrentPage] = useState(43);
    // const totalPages = 43;

    return (
        <div className='kbp-page'>
            <Header />
            <div className="kids-page-container">
                {/* Vỏ sách làm nền */}
                <div className="book-bg-wrapper">
                    <img src={bookBackground} alt="Book Background" className="book-bg" />
                </div>
                
                {/* 1. THANH TÌM KIẾM TUYỆT ĐỐI (Nằm trên nền sách) */}
                {/* <div className="book-search-absolute">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <FaSearch className="search-icon-absolute" />
                </div> */}
                
                {/* 2. NÚT CHUYỂN TRANG LỚN TUYỆT ĐỐI (Nằm trên nền sách) */}
                {/* Giả định có ảnh nút chuyển trang thật (ảnh 3, 4) thay thế cho icon FaChevron */}
                <button className="page-nav-absolute left-btn-absolute">
                    {/* Thay thế bằng <img src={leftButtonImage} alt="Prev" /> */}
                    <FaChevronLeft /> 
                </button>
                <button className="page-nav-absolute right-btn-absolute">
                    {/* Thay thế bằng <img src={rightButtonImage} alt="Next" /> */}
                    <FaChevronRight />
                </button>

                {/* Khung nội dung (Mặt sách) */}
                <div className="book-content-frame">
                    
                    {/* Tabs Menu (Đã chuyển lên trên cùng của frame) */}
                    <div className="tabs-container">
                        {Tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* 2. Lưới ảnh sách (Các câu chuyện) */}
                    <div className="stories-grid">
                        {storyData.map((story) => (
                            <div key={story.id} className="story-item">
                                <img src={story.image} alt={story.title} className="story-image" />
                            </div>
                        ))}
                    </div>

                    {/* 3. Phân trang nhỏ (Nằm dưới cùng) */}
                    {/* <div className="pagination-controls">
                        <div className="page-number-display">
                            Chọn trang: **{currentPage}** / **{totalPages}**
                        </div>
                        <div className="pagination-buttons">
                            <button className="nav-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(1)}> <FaChevronLeft /> <FaChevronLeft /> </button>
                            <button className="nav-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}> <FaChevronLeft /> </button>
                            <button className="nav-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}> <FaChevronRight /> </button>
                            <button className="nav-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)}> <FaChevronRight /> <FaChevronRight /> </button>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default KidsBookPage;

// // AuthorDetailPage.jsx
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useLanguage } from '../../hooks/useLanguage';
// import { texts } from "../../locales/texts";
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
// import './AuthorDetailPage.css';
// import { 
//   FaHeadphones, FaShare, FaUserPlus, FaChevronLeft
// } from 'react-icons/fa';

// // Import author images
// import AuthorsBg from "../../assets/authorsBg.jpg";
// import NNAnh from "../../assets/authors/NNAnh.jpg";
// import NPhong from "../../assets/authors/NPhong.jpg";
// import NMTuan from "../../assets/authors/NMTuan.jpg";
// import THoai from "../../assets/authors/THoai.jpg";
// import MTwain from "../../assets/authors/MTwain.jpg";
// import JAusten from "../../assets/authors/JAusten.jpg";
// import EHemingway from "../../assets/authors/EHemingway.webp";
// import AChristie from "../../assets/authors/AChristie.jpg";

// const AuthorDetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { lang } = useLanguage();
//   const t = texts[lang]?.authorDetail || {};

//   // Mock data for authors
//   const authorsData = {
//     1: {
//       id: 1,
//       name: "Nguyễn Nhật Ánh",
//       genre: "Fiction",
//       country: "Vietnam",
//       booksCount: 45,
//       followers: "125K",
//       rating: 4.8,
//       image: NNAnh,
//       description: "Writer Nguyen Nhat Anh was born on May 7, 1955 in Quang Nam province. He is considered one of the most successful writers of books for teenagers with more than 100 works. His stories are constantly reprinted and have never lost their appeal to those who love Nguyen Nhat Anh's writing style. In nearly 40 years of writing, he has been awarded many literary awards at home and abroad. In 2009, his work Give me a ticket to childhood was awarded the ASEAN Literature Award by the Royal Thai Government. His books have been translated into many languages ​​and published in many countries such as Korea, Japan, Thailand, and the United States. Films adapted from his works such as Kaleidoscope, I See Yellow Flowers on the Green Grass, The Girl from Yesterday, and Blue Eyes have also achieved great success.",
//       popularBooks: ["Tôi Thấy Hoa Vàng Trên Cỏ Xanh", "Mắt Biếc", "Cho Tôi Xin Một Vé Đi Tuổi Thơ"],
//       albums: [
//         { id: 1, title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh", author: "Nguyễn Nhật Ánh", audioCount: 12 },
//         { id: 2, title: "Mắt Biếc", author: "Nguyễn Nhật Ánh", audioCount: 10 },
//         { id: 3, title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ", author: "Nguyễn Nhật Ánh", audioCount: 8 },
//         { id: 4, title: "Cô Gái Đến Từ Hôm Qua", author: "Nguyễn Nhật Ánh", audioCount: 11 },
//         { id: 5, title: "Kính Vạn Hoa", author: "Nguyễn Nhật Ánh", audioCount: 15 },
//         { id: 6, title: "Tôi Là Bêtô", author: "Nguyễn Nhật Ánh", audioCount: 9 },
//         { id: 7, title: "Cây Chuối Non Đi Giày Xanh", author: "Nguyễn Nhật Ánh", audioCount: 13 }
//       ]
//     },
//     2: {
//       id: 2,
//       name: "Nguyễn Phong",
//       genre: "Fiction",
//       country: "Vietnam",
//       booksCount: 12,
//       followers: "89K",
//       rating: 4.7,
//       image: NPhong,
//       description: "Vietnamese author known for his insightful stories about modern life and contemporary society.",
//       popularBooks: ["Tác phẩm 1", "Tác phẩm 2", "Tác phẩm 3"],
//       albums: [
//         { id: 1, title: "Tác phẩm Nổi Bật", author: "Nguyễn Phong", audioCount: 7 },
//         { id: 2, title: "Câu Chuyện Đời Thường", author: "Nguyễn Phong", audioCount: 5 }
//       ]
//     },
//     // Add other authors data...
//   };

//   // Featured authors for recommendation
//   const featuredAuthors = [
//     { id: 1, name: "Nguyễn Nhật Ánh", image: NNAnh },
//     { id: 2, name: "Nguyễn Phong", image: NPhong },
//     { id: 3, name: "Nguyễn Mạnh Tuấn", image: NMTuan },
//     { id: 4, name: "Tô Hoài", image: THoai },
//     { id: 5, name: "Mark Twain", image: MTwain },
//     { id: 6, name: "Jane Austen", image: JAusten }
//   ];

//   const author = authorsData[id];

//   if (!author) {
//     return (
//       <div className="author-detail-page">
//         <Header />
//         <div className="author-detail-main">
//           <div className="author-detail-container">
//             <div style={{ textAlign: 'center', padding: '100px 20px' }}>
//               <h2>{t.authorNotFound || "Author not found"}</h2>
//               <button 
//                 onClick={() => navigate('/authors')}
//                 style={{
//                   marginTop: '20px',
//                   padding: '10px 20px',
//                   background: 'var(--primary)',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 {t.backToAuthors || "Back to Authors"}
//               </button>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="author-detail-page">
//         <Header />
      
//         <main className="author-detail-main">
//             <div className='ad-authors-hero' style={{ '--authors-dt-bg': `url(${AuthorsBg})`}}>
//                 {/* Back Button */}
//                 <button className="btn-back" onClick={() => navigate('/authors')}>
//                     <FaChevronLeft /> {t.backToAuthors || "Back to Authors"}
//                 </button>
//                 <div className="author-image-section">
//                 <div className="author-image">
//                     <img src={author.image} alt={author.name} />
//                 </div>
//                 </div>
//                 <h1 className="author-name">{author.name}</h1>
                
//                 <div className="author-meta">
//                     <span className="author-genre">{author.genre}</span>
//                     <span className="author-country">{author.country}</span>
//                 </div>
//             </div>

//             <div className="author-detail-container">

//                 {/* Author Header Section */}
//                 <section className="author-header">
                    
//                     <div className="author-info-section">
//                         <h3 className='author-title'>{t.title || "Introduce"}</h3>
//                         <p className="author-description">{author.description}</p>
                    
//                         <div className="author-stats">
//                             <div className="author-stat">
//                                 <span className="stat-number">{author.booksCount}</span>
//                                 <span className="stat-label">{t.books || "Books"}</span>
//                             </div>
//                             <div className="author-stat">
//                                 <span className="stat-number">{author.followers}</span>
//                                 <span className="stat-label">{t.followers || "Followers"}</span>
//                             </div>
//                             <div className="author-stat">
//                                 <span className="stat-number">{author.rating}</span>
//                                 <span className="stat-label">{t.rating || "Rating"}</span>
//                             </div>
//                         </div>
                    
//                         <div className="author-actions">
//                             <button className="follow-btn">
//                                 <FaUserPlus /> {t.followAuthor || "Follow Author"}
//                             </button>
//                         </div>
//                     </div>
//                     {/* Featured Authors Section */}
//                     <div className="featured-authors-section">
//                         <h2 className="adp-section-title">{t.featuredAuthors || "Featured Authors"}</h2>
//                         <div className="featured-authors-grid">
//                             {featuredAuthors.map(featuredAuthor => (
//                                 <div 
//                                     key={featuredAuthor.id} 
//                                     className="featured-author-card"
//                                     onClick={() => navigate(`/author/${featuredAuthor.id}`)}
//                                 >
//                                     <img 
//                                         className="featured-author-card-img"
//                                         src={featuredAuthor.image} 
//                                         alt={featuredAuthor.name}
//                                     />
//                                     <div className="featured-author-name">{featuredAuthor.name}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Albums Section */}
//                 <section className="albums-section">
//                     <h2 className="adp-section-title">
//                         {t.albumsList || "Album List"} <span className="albums-count">({author.albums.length} {t.albums || "albums"})</span>
//                     </h2>
                    
//                     <div className="albums-grid">
//                         {author.albums.map(album => (
//                             <div key={album.id} className="album-card">
//                                 <div className="album-header">
//                                     <div>
//                                         <h3 className="album-title">{album.title}</h3>
//                                         <p className="album-author">A. {album.author}</p>
//                                     </div>
//                                 </div>
//                                 <div className="album-audio-count">
//                                     <FaHeadphones className="audio-icon" />
//                                     <span>{album.audioCount} {t.audios || "audios"}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </main>

//         <Footer />
//     </div>
//   );
// };

// export default AuthorDetailPage;

// AuthorDetailPage.jsx

