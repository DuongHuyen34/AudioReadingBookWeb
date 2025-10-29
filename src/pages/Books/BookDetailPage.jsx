// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookDetailPage.css";
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
// import "../Layout/Footer.css";
// import bookImg from "../../assets/101book.jpg";
// import shelf1 from "../../assets/shelf1.png";
// import shelf2 from "../../assets/shelf2.png";
// import userIcon from "../../assets/icons/user.png";
// import eggLIcon from "../../assets/icons/eggL.png";
// import eggRIcon from "../../assets/icons/eggR.png";
// import headerBg from '../../assets/bg_header.png';
// import { 
//     FaRegBookmark, FaRegHeart, FaShareAlt, FaChevronLeft, 
//     FaChevronRight, FaPlay, FaPause, FaForward, FaBackward,
//     FaExchangeAlt, FaRandom, FaHeadphones, FaHeadphonesAlt
// } from "react-icons/fa";
// import { FaRegClock } from "react-icons/fa6";
// import { MdMotionPhotosPaused } from "react-icons/md";
// import { GoHeart } from "react-icons/go";
// import { TbAdjustmentsHorizontal } from "react-icons/tb";
// import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
// import { HiOutlineClipboardList } from "react-icons/hi";
// import { PiBookOpenTextLight } from "react-icons/pi";

// const sampleBook = {
//     id: 1,
//     title: "101 cách cua đổ đại lão hàng xóm",
//     rating: 4.8,
//     reviews: 6,
//     author: "Đồng Vũ",
//     genre: "Ngôn tình",
//     publisher: "Đang cập nhật",
//     progress: "25/50",
//     img: bookImg,
//     summary:
//         `Tống Thiên Thị luôn cảm thấy hàng xóm mới tới là người không dễ sống chung, 
//         bởi hắn không chỉ lạnh lùng mà lời nói ra cũng chẳng dễ lọt tai. 
//         Mãi cho đến một ngày cô bị hàng xóm chặn trên hành lang. 
//         Đôi mắt của luật sư Ôn sáng quắc: "Trăm nhân ắt có quả, tôi chính là quả của em." 
//         Tống Thiên Thị nhìn người đàn ông ăn mặc chỉnh tề trước mặt, đột nhiên thay đổi quan điểm về anh.
//         ...
//         Cô cho rằng cô có thể yêu đương với luật sư nhưng kết hôn thì không thể, 
//         bởi về sau cãi nhau thì chắc chắn cô không thể thắng hắn, hơn nữa, 
//         có khi lúc ly hôn đối phương không cần thuê luật sư cũng có thể tiễn cô ra khỏi ra nhà ngay lập tức.
//         Nghe xong lý do cô cự tuyệt, luật sư Ôn bình thản: "Nếu em không thích thân phận luật sư của tôi, 
//         tôi có thể đổi một thân phận khác". Thì ra hàng xóm của cô là đại lão, 
//         vậy thì cô phải nhanh chóng ôm đùi thôi, từ nay về sau cuộc đời cô xuôi chèo mát mái, sung sướng đến biến thái!`,
//     chapters: Array.from({ length: 20 }).map((_, i) => ({
//         id: i + 1,
//         title: `Chương ${i + 1}: Tiêu đề chương ${i + 1}`,
//         date: "08/09/2024",
//         free: i < 3,
//     })),
//     comments: Array.from({ length: 12 }).map((_, i) => ({
//         id: i + 1,
//         user: i % 2 === 0 ? "Username" : "HienHien",
//         time: i % 2 === 0 ? "11:22 PM" : "03:04 PM",
//         note: "Đôi mắt của luật sư Ôn sáng quắc: 'Trăm nhân ắt có quả, tôi chính là quả của em.'",
//         body: i % 2 === 0 ? "AMAZING!!!" : "Waaa!!!"
//     })),
//     comment: 12,
//     review: 1,
// };

// function BookDetailPage() {
//     const navigate = useNavigate();
//     const [book] = useState(sampleBook);
//     const [tab, setTab] = useState("chapters");
//     const [formData, setFormData] = useState({
//         agreeToTerms: false,
//     });
//     const [isScrolled, setIsScrolled] = useState(false);
    
//     // State cho summary
//     const [showFullSummary, setShowFullSummary] = useState(false);
    
//     // State cho pagination chương
//     const [currentChapterPage, setCurrentChapterPage] = useState(1);
//     const chaptersPerPage = 7;
    
//     // State cho bình luận
//     const [visibleComments, setVisibleComments] = useState(4);
//     const commentsPerLoad = 4;

//     // State cho audio player
//     const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//     const [showAudioPlayer, setShowAudioPlayer] = useState(false);
//     const [currentChapter, setCurrentChapter] = useState(null);

//     const handleCheckboxChange = (e) => {
//         setFormData((s) => ({ ...s, agreeToTerms: e.target.checked }));
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             // Khi cuộn xuống 100px, thêm class scrolled
//             if (window.scrollY > 100) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Tính toán chapters hiển thị
//     const totalChapterPages = Math.ceil(book.chapters.length / chaptersPerPage);
//     const startChapterIndex = (currentChapterPage - 1) * chaptersPerPage;
//     const endChapterIndex = startChapterIndex + chaptersPerPage;
//     const displayedChapters = book.chapters.slice(startChapterIndex, endChapterIndex);

//     // Tính toán comments hiển thị
//     const displayedComments = book.comments.slice(0, visibleComments);
//     const hasMoreComments = visibleComments < book.comments.length;

//     const loadMoreComments = () => {
//         setVisibleComments(prev => prev + commentsPerLoad);
//     };

//     const handleChapterPageChange = (page) => {
//         setCurrentChapterPage(page);
//     };

//     // Hàm xử lý nghe sách
//     const handleListenBook = (chapter = null) => {
//         if (chapter) {
//             setCurrentChapter(chapter);
//         }
        
//         if (isAudioPlaying) {
//             // Nếu đang phát thì dừng
//             setIsAudioPlaying(false);
//         } else {
//             // Nếu không phát thì bắt đầu phát và hiện player
//             setIsAudioPlaying(true);
//             if (!showAudioPlayer) {
//                 setShowAudioPlayer(true);
//             }
//         }
//     };

//     // Thêm state cho volume
//     const [volume, setVolume] = useState(70); // 0-100

//     // Hàm xử lý thay đổi volume
//     const handleVolumeChange = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const offsetX = e.clientX - rect.left;
//         const newVolume = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
//         setVolume(newVolume);
//     };

//     // Hàm mute/unmute
//     const toggleMute = () => {
//         setVolume(volume === 0 ? 70 : 0);
//     };

//     // Lấy icon volume phù hợp
//     const getVolumeIcon = () => {
//         if (volume === 0) return <HiOutlineSpeakerXMark />;
//         if (volume < 50) return <HiOutlineSpeakerWave />;
//         return <HiOutlineSpeakerWave />;
//     };

//     // Hàm đóng audio player
//     const closeAudioPlayer = () => {
//         setIsAudioPlaying(false);
//         setShowAudioPlayer(false);
//         setCurrentChapter(null);
//     };

//     return (
//         <div className="bdp-root">
//             <Header />
//             <div className="bdp-body">

//                 {/* Audio Player Slide-up */}
//                 {showAudioPlayer && (
//                     <div className="bdp-audio-player" style={{ '--header-bg': `url(${headerBg})` }}>
//                         <div className="bdp-audio-content">
//                             <div className="bdp-audio-info">
//                                 <img src={book.img} alt={book.title} className="bdp-audio-book-img" />
//                                 <div className="bdp-audio-text">
//                                     <div className="bdp-audio-title">
//                                         {currentChapter ? currentChapter.title : book.title}
//                                     </div>
//                                     <div className="bdp-audio-author">{book.author}</div>
//                                 </div>
//                             </div>
                            
//                             <div className="bdp-audio-listen">
//                                 <div className="bdp-audio-controls">
//                                     <button className="bdp-audio-control-btn">
//                                         <GoHeart />
//                                     </button>
//                                     <button className="bdp-audio-control-btn">
//                                         <TbAdjustmentsHorizontal />
//                                     </button>
//                                     <button className="bdp-audio-control-btn">
//                                         <FaBackward />
//                                     </button>
//                                     <button 
//                                         className="bdp-audio-play-btn"
//                                         onClick={() => handleListenBook()}
//                                     >
//                                         {isAudioPlaying ? <FaPause /> : <FaPlay />}
//                                     </button>
//                                     <button className="bdp-audio-control-btn">
//                                         <FaForward />
//                                     </button>
//                                     <button className="bdp-audio-control-btn">
//                                         <FaRandom />
//                                     </button>
//                                     <button className="bdp-audio-control-btn">
//                                         <FaRegClock />
//                                     </button>
//                                 </div>

//                                 <div className="bdp-audio-progress">
//                                     <div className="bdp-audio-time">0:25</div>
//                                     <div className="bdp-audio-progress-bar">
//                                         <div className="bdp-audio-progress-filled"></div>
//                                     </div>
//                                     <div className="bdp-audio-time">1:34</div>
//                                 </div>
//                             </div>
                            
//                             <div className="bdp-audio-vol">
//                                 <button className="bdp-audio-vol-btn">
//                                     <HiOutlineClipboardList />
//                                 </button>
//                                 <div className="bdp-volume-control">
//                                     <button className="bdp-audio-vol-btn" onClick={toggleMute}>
//                                         {getVolumeIcon()}
//                                     </button>
//                                     <div 
//                                         className="bdp-volume-slider" 
//                                         onClick={handleVolumeChange}
//                                     >
//                                         <div 
//                                             className="bdp-volume-filled" 
//                                             style={{ width: `${volume}%` }}
//                                         ></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="bdp-audio-close" onClick={closeAudioPlayer}>
//                                 ×
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Main */}
//                 <main className="bdp-main">
//                     {/* Sticky Sidebar - chứa cả breadcrumb và ảnh sách */}
//                     <section className={`bdp-sticky-sidebar ${isScrolled ? 'scrolled' : ''}`}>
//                         {/* Breadcrumb cũng sticky */}
//                         <div className="bdp-breadcrumb">Trang chủ &gt; {book.title}</div>
                        
//                         {/* Phần ảnh sách */}
//                         <div className="bdp-left">
//                             <img src={book.img} alt={book.title} className="bdp-book-img" />
//                         </div>
//                     </section>

//                     <section className="bdp-right">
//                         {/* Tiêu đề */}
//                         <h1 className="bdp-book-title">{book.title}</h1>

//                         {/* Đánh giá */}
//                         <div className="bdp-meta-row">
//                             <div className="bdp-stars">
//                                 <span className="bdp-star-title">{book.rating}</span>
//                                 {Array.from({ length: 5 }).map((_, i) => (
//                                     <span key={i} className={i < book.rating ? "bdp-star on" : "bdp-star"}>
//                                         ★
//                                     </span>
//                                 ))}
                                
//                             </div>
//                             <span className="bdp-rating-count">• {book.reviews} đánh giá</span>
//                         </div>

//                         {/* info */}
//                         <div className="bdp-info-row">
//                             <div><strong>Tác giả</strong><div className="bdp-muted">{book.author}</div></div>
//                             <div><strong>Thể loại</strong><div className="bdp-muted">{book.genre}</div></div>
//                             <div><strong>Nhà xuất bản</strong><div className="bdp-muted">{book.publisher}</div></div>
//                             <div><strong>Tình trạng</strong><div className="bdp-muted">{book.progress}</div></div>
//                         </div>

//                         {/* btn */}
//                         <div className="bdp-cta-row">
//                             <button className="bdp-btn primary" onClick={() => navigate("/bookreader")}>
//                                 <PiBookOpenTextLight className="bdp-btn-img" style={{'font-size': '30px'}} />
//                                 Đọc sách
//                             </button>
//                             <button 
//                                 className={`bdp-btn outline ${isAudioPlaying ? 'active' : ''}`}
//                                 onClick={() => handleListenBook()}
//                             >
//                                 {isAudioPlaying ? (
//                                     <MdMotionPhotosPaused className="bdp-btn-img" style={{'font-size': '30px'}} />
//                                 ) : (
//                                     <FaHeadphonesAlt className="bdp-btn-img" />
//                                 )}
//                                 {isAudioPlaying ? "Dừng ngay" : "Nghe sách"}
//                             </button>
//                             <FaRegBookmark className="bdp-icon-small" />
//                             <FaRegHeart className="bdp-icon-small" />
//                             <FaShareAlt className="bdp-icon-small" />
//                         </div>

//                         {/* mô tả */}
//                         <div className={`bdp-summary ${!showFullSummary ? 'bdp-summary-collapsed' : ''}`}>
//                             {book.summary}
//                             {!showFullSummary && (
//                                 <button 
//                                     className="bdp-show-more-btn"
//                                     onClick={() => setShowFullSummary(true)}
//                                 >
//                                     ...Xem thêm
//                                 </button>
//                             )}
//                         </div>

//                         {/* Tabs: Chapters / Comments */}
//                         <div className="bdp-tabs">
//                             <button className={tab === "chapters" ? "bdp-tab active" : "bdp-tab"} onClick={() => setTab("chapters")}>
//                                 Danh sách chương ({book.chapters.length})
//                             </button>
//                             <button className={tab === "comments" ? "bdp-tab active" : "bdp-tab"} onClick={() => setTab("comments")}>
//                                 Bình luận ({book.comment})
//                             </button>
//                             <button className={tab === "reviews" ? "bdp-tab active" : "bdp-tab"} onClick={() => setTab("reviews")}>
//                                 Đánh giá & Nhận xét ({book.review})
//                             </button>
//                         </div>

//                         {tab === "chapters" && (
//                             <div className="bdp-chapters-list">
//                                 {displayedChapters.map((ch) => (
//                                     <div key={ch.id} className="bdp-chapter-item">
//                                         <div>
//                                             <div className="bdp-ch-title">{ch.title}</div>
//                                             <div className="bdp-ch-date">{ch.date}</div>
//                                         </div>
//                                         <div className="bdp-ch-actions">
//                                             {ch.free && <span className="bdp-tag-free">Miễn phí</span>}
//                                             <button className="bdp-small-btn primary">Đọc ngay</button>
//                                             <button className="bdp-small-btn outline">Nghe ngay</button>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <div className="bdp-pagination">
//                                     <button 
//                                         className="bdp-pg" 
//                                         onClick={() => handleChapterPageChange(currentChapterPage - 1)}
//                                         disabled={currentChapterPage === 1}
//                                     >
//                                         <FaChevronLeft className="bdp-pg-img" />
//                                     </button>
//                                     {Array.from({ length: totalChapterPages }, (_, i) => i + 1).map(page => (
//                                         <button
//                                             key={page}
//                                             className={`bdp-pg ${currentChapterPage === page ? 'bdp-pg-active' : ''}`}
//                                             onClick={() => handleChapterPageChange(page)}
//                                         >
//                                             {page}
//                                         </button>
//                                     ))}
//                                     <button 
//                                         className="bdp-pg" 
//                                         onClick={() => handleChapterPageChange(currentChapterPage + 1)}
//                                         disabled={currentChapterPage === totalChapterPages}
//                                     >
//                                         <FaChevronRight className="bdp-pg-img" />
//                                     </button>
//                                 </div>
//                             </div>
//                         )}

//                         {tab === "comments" && (
//                             <div className="bdp-comments-area">
//                                 {displayedComments.map((comment) => (
//                                     <div key={comment.id} className="bdp-comment-card">
//                                         <div className="bdp-comment-card-info">
//                                             <div className="bdp-comment-avatar">
//                                                 <img className="bdp-avatar-small" src={userIcon} alt="user" />
//                                                 <div className="bdp-comment-user">{comment.user}</div>
//                                             </div>
//                                             <span className="bdp-comment-time">{comment.time}</span>
//                                         </div>
//                                         <div className="bdp-comment-card-note">
//                                             <img className="bdp-note-img" src={eggLIcon} style={{'top': '10px', 'left': '10px'}} />
//                                             <span className="bdp-note-text">{comment.note}</span>
//                                             <img className="bdp-note-img" src={eggRIcon} style={{'bottom': '10px', 'right': '10px'}} />
//                                         </div>
//                                         <div className="bdp-comment-body">{comment.body}</div>
//                                     </div>
//                                 ))}
                                
//                                 {hasMoreComments && (
//                                     <div className="bdp-load-more-container">
//                                         <button className="bdp-load-more-btn" onClick={loadMoreComments}>
//                                             Xem thêm
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         )}

//                         {tab === "reviews" && (
//                             <div className="bdp-comments-area">
//                                 <div className="bdp-comment-card">
//                                     <div className="bdp-comment-card-info">
//                                         <div className="bdp-comment-avatar">
//                                             <img className="bdp-avatar-small" src={userIcon} alt="user" />
//                                             <div className="bdp-comment-user">Username</div>
//                                         </div>
//                                         <span className="bdp-comment-time">11:22 PM</span>
//                                     </div>
//                                     <div className="bdp-comment-body">AMAZING!!!</div>
//                                 </div>

//                                 <form className="bdp-comment-form" onSubmit={(e) => e.preventDefault()}>
//                                     <textarea placeholder="Viết bình luận..." />
//                                     <div className="bdp-comment-form-row">
//                                         <div className="bdp-checkbox-group">
//                                             <input
//                                                 id="agreeTerms"
//                                                 type="checkbox"
//                                                 checked={formData.agreeToTerms}
//                                                 onChange={handleCheckboxChange}
//                                             />
//                                             <label htmlFor="agreeTerms" className="bdp-checkbox-label">
//                                                 <span className="agree-text-vi">Tôi đồng ý với </span>
//                                                 <span className="bdp-link-text" onClick={() => window.alert("Điều khoản")}>Điều khoản</span>
//                                                 <span className="agree-text-vi"> và </span>
//                                                 <span className="bdp-link-text" onClick={() => window.alert("Chính sách")}>Chính sách bảo mật</span>
//                                                 <span className="separator"> / </span>
//                                                 <span className="agree-text-en">I agree to the </span>
//                                                 <span className="bdp-link-text" onClick={() => window.alert("Terms")}>Terms</span>
//                                                 <span className="agree-text-en"> and </span>
//                                                 <span className="bdp-link-text" onClick={() => window.alert("Privacy")}>Privacy policy</span>
//                                             </label>
//                                         </div>
//                                         <button className="bdp-btn primary" disabled={!formData.agreeToTerms}>Gửi bình luận</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         )}
//                     </section>
//                 </main>

//                 {/* Recommendation shelf */}
//                 <section className="bdp-recommend">
//                     <h3>Có thể bạn thích</h3>
//                     <div className="bdp-shelf-container">
//                         <img src={shelf1} alt="Bookshelf" className="bdp-shelf-bg" />
//                         <div className="bdp-shelf">
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 1" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 2" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bdp-shelf-container">
//                         <img src={shelf2} alt="Bookshelf" className="bdp-shelf-bg" />
//                         <div className="bdp-shelf" style={{'padding-bottom': '20px'}}>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 1" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 2" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                             <div className="bdp-shelf-item">
//                                 <img src={bookImg} alt="Book 3" />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>  
//             <Footer />
//         </div>
//     );
// }

// export default BookDetailPage;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, API } from "../../api";
import "./BookDetailPage.css";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import "../Layout/Footer.css";
import shelf1 from "../../assets/shelf1.png";
import shelf2 from "../../assets/shelf2.png";
import userIcon from "../../assets/icons/user.png";
import eggLIcon from "../../assets/icons/eggL.png";
import eggRIcon from "../../assets/icons/eggR.png";
import headerBg from '../../assets/bg_header.png';
import { 
    FaRegBookmark, FaRegHeart, FaShareAlt, FaChevronLeft, 
    FaChevronRight, FaPlay, FaPause, FaForward, FaBackward,
    FaRandom, FaHeadphonesAlt
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { MdMotionPhotosPaused } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { HiOutlineClipboardList } from "react-icons/hi";
import { PiBookOpenTextLight } from "react-icons/pi";

function BookDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const audioRef = useRef(null); // 🟢 THÊM REF CHO AUDIO

    // 🔹 State chính
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState("chapters");
    const [isScrolled, setIsScrolled] = useState(false);

    // 🔹 Các state phụ trợ
    const [showFullSummary, setShowFullSummary] = useState(false);
    const [currentChapterPage, setCurrentChapterPage] = useState(1);
    const chaptersPerPage = 7;
    const [visibleComments, setVisibleComments] = useState(4);
    const commentsPerLoad = 4;
    
    // 🎧 Audio States
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);
    const [currentChapter, setCurrentChapter] = useState(null); // Chương đang được phát
    const [volume, setVolume] = useState(70);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    // 🔗 Dữ liệu liên quan đến Audio
    const getAudioUrl = (chapter) => {
        if (!book || !chapter || !book.chaptersDetail) return null;
        
        // Tìm chi tiết chương (trong chaptersDetail) dựa trên title của chapter trong mục lục
        const detail = book.chaptersDetail.find(d => d.title === chapter.title);

        // Trả về đường dẫn hoàn chỉnh nếu audioUrl tồn tại
        return detail?.audioUrl ? `http://localhost:5000${detail.audioUrl}` : null;
    };
    
    // Lấy tiêu đề và URL audio hiện tại cho Audio Player
    const audioTitle = currentChapter ? currentChapter.title : book?.title || "Audio mẫu";
    const currentAudioUrl = getAudioUrl(currentChapter); 

    // 🧭 Cuộn header (Giữ nguyên)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 📦 Lấy dữ liệu sách theo ID (Giữ nguyên)
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await getBookById(id);
                setBook(res.data);
            } catch (error) {
                console.error("❌ Lỗi khi tải sách:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    // 📚 Lấy sách gợi ý (Giữ nguyên)
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    useEffect(() => {
        const fetchRecommended = async () => {
            try {
                const res = await API.get("/books/recommended");
                setRecommendedBooks(res.data);
            } catch (error) {
                console.error("❌ Lỗi khi tải sách gợi ý:", error);
            }
        };
        fetchRecommended();
    }, []);

    // 🎧 Logic Audio Control (CẬP NHẬT CHÍNH)
    const handleListenBook = (chapter = null) => {
        
        // 1. XÁC ĐỊNH CHƯƠNG MỤC TIÊU
        // Ưu tiên: chương truyền vào -> chương hiện tại -> chương đầu tiên
        let targetChapter = chapter || currentChapter || book?.chapters?.[0];

        if (!targetChapter) {
            alert("Không tìm thấy chương để phát.");
            return;
        }
        
        const urlToPlay = getAudioUrl(targetChapter);

        if (!urlToPlay) {
            alert(`Chương ${targetChapter.title} chưa có audio.`);
            return;
        }

        // 2. XỬ LÝ PLAY/PAUSE
        const isCurrentChapterPlaying = isAudioPlaying && currentChapter?.title === targetChapter.title;

        if (isCurrentChapterPlaying) {
            // Đang phát cùng một chương -> Dừng
            audioRef.current?.pause();
            // State sẽ được cập nhật bởi 'pause' event listener
        } else {
            // Dừng file cũ (nếu có)
            audioRef.current?.pause();

            // Thiết lập và phát file mới
            setCurrentChapter(targetChapter); // Cập nhật chương đang phát - useEffect sẽ tự động cập nhật src
            setShowAudioPlayer(true);
            
            // Đợi một chút để src được cập nhật bởi useEffect
            setTimeout(() => {
                if (!audioRef.current) return;
                
                // Áp dụng âm lượng
                audioRef.current.volume = volume / 100;
                
                const playAudio = () => {
                    if (!audioRef.current) return;
                    audioRef.current.play().catch(error => {
                        console.error("Lỗi khi phát audio:", error);
                        alert("Không thể phát audio. Vui lòng kiểm tra file audio và đường dẫn.");
                        setIsAudioPlaying(false);
                        setShowAudioPlayer(false);
                    });
                };
                
                if (audioRef.current.readyState >= 2) {
                    // readyState >= 2 nghĩa là đã có metadata
                    playAudio();
                } else {
                    // Nếu chưa có metadata, đợi loadedmetadata event
                    const playAfterLoad = () => {
                        playAudio();
                        audioRef.current?.removeEventListener('loadedmetadata', playAfterLoad);
                    };
                    audioRef.current.addEventListener('loadedmetadata', playAfterLoad);
                }
            }, 150);
        }
    };

    const toggleMute = () => {
        const newVolume = volume === 0 ? 70 : 0;
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume / 100;
    };
    
    const getVolumeIcon = () => (volume === 0 ? <HiOutlineSpeakerXMark /> : <HiOutlineSpeakerWave />);
    
    const handleVolumeChange = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newVolume = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume / 100;
    };
    
    // Định dạng thời gian mm:ss
    const formatTime = useCallback((sec) => {
        if (!isFinite(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }, []);

    // Sự kiện trên audio element
    const onLoadedMetadata = useCallback(() => {
        if (audioRef.current && isFinite(audioRef.current.duration) && audioRef.current.duration > 0) {
            setDuration(audioRef.current.duration);
        }
    }, []);

    const onCanPlay = useCallback(() => {
        if (audioRef.current && isFinite(audioRef.current.duration) && audioRef.current.duration > 0) {
            setDuration(audioRef.current.duration);
        }
    }, []);

    const onDurationChange = useCallback(() => {
        if (audioRef.current && isFinite(audioRef.current.duration) && audioRef.current.duration > 0) {
            setDuration(audioRef.current.duration);
        }
    }, []);

    const onTimeUpdate = useCallback(() => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            // Cập nhật duration nếu chưa có hoặc nếu thay đổi
            if (isFinite(audioRef.current.duration) && audioRef.current.duration > 0) {
                setDuration(audioRef.current.duration);
            }
        }
    }, []);

    const onPlay = useCallback(() => {
        setIsAudioPlaying(true);
    }, []);

    const onPause = useCallback(() => {
        setIsAudioPlaying(false);
    }, []);

    const onEnded = useCallback(() => {
        setIsAudioPlaying(false);
    }, []);

    // Gắn listener cho audio element - luôn chạy khi component mount
    useEffect(() => {
        const el = audioRef.current;
        if (!el) return;
        
        el.addEventListener('loadedmetadata', onLoadedMetadata);
        el.addEventListener('timeupdate', onTimeUpdate);
        el.addEventListener('canplay', onCanPlay);
        el.addEventListener('durationchange', onDurationChange);
        el.addEventListener('play', onPlay);
        el.addEventListener('pause', onPause);
        el.addEventListener('ended', onEnded);
        
        return () => {
            el.removeEventListener('loadedmetadata', onLoadedMetadata);
            el.removeEventListener('timeupdate', onTimeUpdate);
            el.removeEventListener('canplay', onCanPlay);
            el.removeEventListener('durationchange', onDurationChange);
            el.removeEventListener('play', onPlay);
            el.removeEventListener('pause', onPause);
            el.removeEventListener('ended', onEnded);
        };
    }, [onLoadedMetadata, onTimeUpdate, onCanPlay, onDurationChange, onPlay, onPause, onEnded]);

    // Cập nhật audio khi currentAudioUrl thay đổi
    useEffect(() => {
        if (!audioRef.current) return;
        
        if (!currentAudioUrl) {
            // Reset nếu không có URL
            setDuration(0);
            setCurrentTime(0);
            return;
        }
        
        // Reset duration và currentTime khi chuyển chương mới
        setDuration(0);
        setCurrentTime(0);
        
        // Đảm bảo crossOrigin và preload được set
        audioRef.current.crossOrigin = 'anonymous';
        audioRef.current.preload = 'metadata';
        
        // Load audio mới
        try {
            audioRef.current.load();
        } catch (error) {
            console.error("Lỗi khi load audio:", error);
        }
        
        // Đảm bảo duration được cập nhật khi metadata load xong
        const audioEl = audioRef.current;
        const updateDuration = () => {
            if (audioEl && isFinite(audioEl.duration) && audioEl.duration > 0) {
                setDuration(audioEl.duration);
            }
        };
        
        audioEl.addEventListener('loadedmetadata', updateDuration);
        audioEl.addEventListener('durationchange', updateDuration);
        
        return () => {
            audioEl?.removeEventListener('loadedmetadata', updateDuration);
            audioEl?.removeEventListener('durationchange', updateDuration);
        };
    }, [currentAudioUrl]);

    // Điều khiển tua
    const seekBy = (delta) => {
        if (!audioRef.current) return;
        // Sử dụng duration từ audio element trực tiếp, fallback về state nếu chưa có
        const audioDuration = audioRef.current.duration || duration || 0;
        const currentAudioTime = audioRef.current.currentTime || 0;
        const next = Math.max(0, Math.min(audioDuration, currentAudioTime + delta));
        audioRef.current.currentTime = next;
        setCurrentTime(next);
    };

    // Click trên thanh tiến độ để nhảy đến vị trí
    const handleProgressClick = (e) => {
        if (!audioRef.current) return;
        // Sử dụng duration từ audio element trực tiếp, fallback về state nếu chưa có
        const audioDuration = audioRef.current.duration || duration || 0;
        if (!audioDuration || audioDuration <= 0) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, offsetX / rect.width));
        const next = ratio * audioDuration;
        audioRef.current.currentTime = next;
        setCurrentTime(next);
    };
    
    const closeAudioPlayer = () => {
        audioRef.current?.pause();
        setIsAudioPlaying(false);
        setShowAudioPlayer(false);
        setCurrentChapter(null);
    };


    // 🌀 Khi đang tải
    if (loading) return <div className="loading">Đang tải dữ liệu...</div>;
    if (!book) return <div className="error">Không tìm thấy sách</div>;

    // 📖 Tính toán dữ liệu phân trang chương
    const totalChapterPages = Math.ceil((book.chapters?.length || 0) / chaptersPerPage);
    const startChapterIndex = (currentChapterPage - 1) * chaptersPerPage;
    const endChapterIndex = startChapterIndex + chaptersPerPage;
    const displayedChapters = book.chapters?.slice(startChapterIndex, endChapterIndex) || [];

    // 💬 Bình luận
    const displayedComments = book.comments?.slice(0, visibleComments) || [];
    const hasMoreComments = visibleComments < (book.comments?.length || 0);
    const loadMoreComments = () => setVisibleComments(prev => prev + commentsPerLoad);

    return (
        <div className="bdp-root">
            <Header />
            <div className="bdp-body">

                {/* 🎵 Audio Player */}
                {showAudioPlayer && currentAudioUrl && (
                    <div className="bdp-audio-player" style={{ '--header-bg': `url(${headerBg})` }}>
                        <div className="bdp-audio-content">
                            <div className="bdp-audio-info">
                                <img 
                                    src={`http://localhost:5000${book.cover}`} 
                                    alt={book.title} 
                                    className="bdp-audio-book-img" 
                                />
                                <div className="bdp-audio-text">
                                    <div className="bdp-audio-title">
                                        {book.title} - {audioTitle}
                                    </div>
                                    <div className="bdp-audio-author">{book.author}</div>
                                </div>
                            </div>
                            <div className="bdp-audio-listen">
                                <div className="bdp-audio-controls">
                                    <button className="bdp-audio-control-btn"><GoHeart /></button>
                                    <button className="bdp-audio-control-btn"><TbAdjustmentsHorizontal /></button>
                                    <button className="bdp-audio-control-btn" onClick={() => seekBy(-15)}><FaBackward /></button>
                                    <button className="bdp-audio-play-btn" onClick={() => handleListenBook()}>
                                        {isAudioPlaying ? <FaPause /> : <FaPlay />}
                                    </button>
                                    <button className="bdp-audio-control-btn" onClick={() => seekBy(15)}><FaForward /></button>
                                    <button className="bdp-audio-control-btn"><FaRandom /></button>
                                    <button className="bdp-audio-control-btn"><FaRegClock /></button>
                                </div>

                                <div className="bdp-audio-progress">
                                    <div className="bdp-audio-time">{formatTime(currentTime)}</div>
                                    <div className="bdp-audio-progress-bar" onClick={handleProgressClick}>
                                        <div className="bdp-audio-progress-filled" style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}></div>
                                    </div>
                                    <div className="bdp-audio-time">{formatTime(duration)}</div>
                                </div>
                            </div>

                            <div className="bdp-audio-vol">
                                <button className="bdp-audio-vol-btn"><HiOutlineClipboardList /></button>
                                <div className="bdp-volume-control">
                                    <button className="bdp-audio-vol-btn" onClick={toggleMute}>
                                        {getVolumeIcon()}
                                    </button>
                                    <div className="bdp-volume-slider" onClick={handleVolumeChange}>
                                        <div className="bdp-volume-filled" style={{ width: `${volume}%` }}></div>
                                    </div>
                                </div>
                            </div>

                            <button className="bdp-audio-close" onClick={closeAudioPlayer}>×</button>
                        </div>
                    </div>
                )}
                <audio 
                    ref={audioRef} 
                    className="bdp-hidden-audio" 
                    crossOrigin="anonymous" 
                    preload="metadata"
                    src={currentAudioUrl || undefined}
                /> {/* 🟢 Thẻ Audio */}


                {/* 📖 Nội dung chính */}
                <main className="bdp-main">
                    <section className={`bdp-sticky-sidebar ${isScrolled ? 'scrolled' : ''}`}>
                        <div className="bdp-breadcrumb">Trang chủ &gt; {book.title}</div>
                        <div className="bdp-left">
                            <img 
                                src={`http://localhost:5000${book.cover}`} 
                                alt={book.title} 
                                className="bdp-book-img" 
                            />
                        </div>
                    </section>

                    <section className="bdp-right">
                        <h1 className="bdp-book-title">{book.title}</h1>

                        <div className="bdp-meta-row">
                            <div className="bdp-stars">
                                <span className="bdp-star-title">{book.rating}</span>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={i < Math.round(book.rating) ? "bdp-star on" : "bdp-star"}>★</span>
                                ))}
                            </div>
                            <span className="bdp-rating-count">• {book.reviews || 0} đánh giá</span>
                        </div>

                        <div className="bdp-info-row">
                            <div><strong>Tác giả</strong><div className="bdp-muted">{book.author}</div></div>
                            <div><strong>Thể loại</strong><div className="bdp-muted">{book.genre}</div></div>
                            <div><strong>Nhà xuất bản</strong><div className="bdp-muted">{book.publisher}</div></div>
                            <div><strong>Tình trạng</strong><div className="bdp-muted">{book.progress}</div></div>
                        </div>

                        <div className="bdp-cta-row">
                            <button className="bdp-btn primary" onClick={() => navigate(`/bookreader/${book.id}`)}>
                                <PiBookOpenTextLight className="bdp-btn-img" style={{ fontSize: '30px' }} />
                                Đọc sách
                            </button>
                            {/* NÚT CHÍNH: KHÔNG TRUYỀN THAM SỐ -> PHÁT CHƯƠNG 1 */}
                            <button 
                                className={`bdp-btn outline ${isAudioPlaying && currentChapter ? 'active' : ''}`} 
                                onClick={() => handleListenBook()} 
                            >
                                {isAudioPlaying ? (
                                    <MdMotionPhotosPaused className="bdp-btn-img" style={{ fontSize: '30px' }} />
                                ) : (
                                    <FaHeadphonesAlt className="bdp-btn-img" />
                                )}
                                {isAudioPlaying ? "Dừng ngay" : "Nghe sách"}
                            </button>
                            <FaRegBookmark className="bdp-icon-small" />
                            <FaRegHeart className="bdp-icon-small" />
                            <FaShareAlt className="bdp-icon-small" />
                        </div>

                        <div className={`bdp-summary ${!showFullSummary ? 'bdp-summary-collapsed' : ''}`}>
                            {book.summary}
                            {!showFullSummary && (
                                <button className="bdp-show-more-btn" onClick={() => setShowFullSummary(true)}>
                                    ...Xem thêm
                                </button>
                            )}
                        </div>

                        <div className="bdp-tabs">
                            <button className={tab === "chapters" ? "bdp-tab active" : "bdp-tab"} onClick={() => setTab("chapters")}>
                                Danh sách chương ({book.chapters?.length || 0})
                            </button>
                            <button className={tab === "comments" ? "bdp-tab active" : "bdp-tab"} onClick={() => setTab("comments")}>
                                Bình luận ({book.comments?.length || 0})
                            </button>
                        </div>

                        {tab === "chapters" && (
                            <div className="bdp-chapters-list">
                                {displayedChapters.map((ch, idx) => (
                                    <div key={idx} className="bdp-chapter-item">
                                        <div>
                                            <div className="bdp-ch-title">{ch.title}</div>
                                            <div className="bdp-ch-date">{ch.date}</div>
                                        </div>
                                        <div className="bdp-ch-actions">
                                            {ch.free && <span className="bdp-tag-free">Miễn phí</span>}
                                            <button 
                                                className="bdp-small-btn primary"
                                                onClick={() => navigate(`/bookreader/${book.id}`)}
                                            >
                                                Đọc ngay
                                            </button>
                                            {/* NÚT TỪNG CHƯƠNG: TRUYỀN ĐỐI TƯỢNG CHƯƠNG */}
                                            <button 
                                                className={`bdp-small-btn outline ${currentChapter?.title === ch.title && isAudioPlaying ? 'active-playing' : ''}`} 
                                                onClick={() => handleListenBook(ch)}
                                            >
                                                {currentChapter?.title === ch.title && isAudioPlaying ? 'Dừng' : 'Nghe ngay'}
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="bdp-pagination">
                                    <button className="bdp-pg" onClick={() => setCurrentChapterPage(currentChapterPage - 1)} disabled={currentChapterPage === 1}>
                                        <FaChevronLeft className="bdp-pg-img" />
                                    </button>
                                    {Array.from({ length: totalChapterPages }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            className={`bdp-pg ${currentChapterPage === page ? 'bdp-pg-active' : ''}`}
                                            onClick={() => setCurrentChapterPage(page)}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button className="bdp-pg" onClick={() => setCurrentChapterPage(currentChapterPage + 1)} disabled={currentChapterPage === totalChapterPages}>
                                        <FaChevronRight className="bdp-pg-img" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {tab === "comments" && (
                            <div className="bdp-comments-area">
                                {displayedComments.map((comment, idx) => (
                                    <div key={idx} className="bdp-comment-card">
                                        <div className="bdp-comment-card-info">
                                            <div className="bdp-comment-avatar">
                                                <img className="bdp-avatar-small" src={userIcon} alt="user" />
                                                <div className="bdp-comment-user">{comment.user}</div>
                                            </div>
                                            <span className="bdp-comment-time">{comment.time}</span>
                                        </div>
                                        <div className="bdp-comment-card-note">
                                            <img className="bdp-note-img" src={eggLIcon} alt="" />
                                            <span className="bdp-note-text">{comment.note}</span>
                                            <img className="bdp-note-img" src={eggRIcon} alt="" />
                                        </div>
                                        <div className="bdp-comment-body">{comment.body}</div>
                                    </div>
                                ))}
                                {hasMoreComments && (
                                    <div className="bdp-load-more-container">
                                        <button className="bdp-load-more-btn" onClick={loadMoreComments}>Xem thêm</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </section>
                </main>

                {/* 📚 Gợi ý */}
                <section className="bdp-recommend">
                    <h3>Có thể bạn thích</h3>
                    <div className="bdp-shelf-container">
                        <img src={shelf1} alt="Bookshelf" className="bdp-shelf-bg" />
                        <div className="bdp-shelf">
                            {recommendedBooks.slice(0, 6).map((b) => (
                                <div 
                                    key={b._id} 
                                    className="bdp-shelf-item" 
                                    onClick={() => navigate(`/book/${b._id}`)}
                                >
                                    <img 
                                    src={`http://localhost:5000${b.cover}`} 
                                    alt={b.title} 
                                    title={b.title} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bdp-shelf-container">
                        <img src={shelf2} alt="Bookshelf" className="bdp-shelf-bg" />
                        <div className="bdp-shelf" style={{ paddingBottom: '20px' }}>
                            {recommendedBooks.map((b) => (
                                <div 
                                    key={b._id} 
                                    className="bdp-shelf-item" 
                                    onClick={() => navigate(`/book/${b._id}`)}
                                >
                                    <img 
                                    src={`http://localhost:5000${b.cover}`} 
                                    alt={b.title} 
                                    title={b.title} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default BookDetailPage;