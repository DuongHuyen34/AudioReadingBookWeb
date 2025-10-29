// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookReaderPage.css";
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
// import { 
//   FaHeadphones, FaClipboardList, FaRegBookmark, FaRegThumbsUp, 
//   FaRegFlag, FaRegCommentAlt, FaBookmark, FaHeart, 
//   FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight,
//   FaPause, FaPlay, FaBackward, FaForward, FaRandom, FaTimes,
//   FaPlus, FaMinus
// } from "react-icons/fa";
// import { FaRegClock } from "react-icons/fa6";
// import { FiSettings } from "react-icons/fi";
// import { BsBookmarkPlus, BsBookmarkDashFill } from "react-icons/bs";
// import { GoHeart } from "react-icons/go";
// import { TbAdjustmentsHorizontal } from "react-icons/tb";
// import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
// import bookImg from "../../assets/101book.jpg";
// import headerBg from '../../assets/bg_header.png';

// function BookReaderPage() {
//   const navigate = useNavigate();
  
//   // State cho audio player
//   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [showAudioPlayer, setShowAudioPlayer] = useState(false);
//   const [volume, setVolume] = useState(70); // 0-100

//   // State cho sidebar mục lục
//   const [showTocSidebar, setShowTocSidebar] = useState(false);

//   // State cho sidebar cài đặt
//   const [showSettingsSidebar, setShowSettingsSidebar] = useState(false);

//   // Dữ liệu mục lục
//   const tableOfContents = [
//     { id: 1, title: "Chương 1: Anh cho em uống thuốc", progress: "Đang đọc" },
//     { id: 2, title: "Chương 2: Chẳng lẽ, em chờ anh", progress: "Chưa đọc" },
//     { id: 3, title: "Chương 3: Đừng uống thuốc", progress: "Chưa đọc" },
//     { id: 4, title: "Chương 4: Anh biết rõ kích cỡ của em hoàn mỹ", progress: "Chưa đọc" },
//     { id: 5, title: "Chương 5: Chẳng người mẹ nào lại vô duyên vô cớ từ bỏ con mình", progress: "Chưa đọc" },
//     { id: 6, title: "Chương 6: Một người đàn ông cao to chọc trời lại đi trang điểm", progress: "Chưa đọc" },
//     { id: 7, title: "Chương 7: Đã là để mình thích rồi thì tại sao phải nhường cho người khác?", progress: "Chưa đọc" },
//     { id: 8, title: "Chương 8: Nếu đứa bé ấy khoẻ mạnh thì anh có muốn sinh nó ra không?", progress: "Chưa đọc" },
//   ];

//   // Dữ liệu bookmark
//   const bookmarks = [
//     // { chapter: "Chương 1: Anh cho em uống thuốc", note: "Thấy em tay tê liệt động, có xửa" },
//     // { chapter: "Chương 1: Anh cho em uống thuốc", note: "Tổng Cạnh đây tay mệt thật, tay tê liệt động, có xửa" },
//     // { chapter: "Chương 1: Anh cho em uống thuốc", note: "Sau bữa tố xem show hàm qua." },
//   ];

//   // State cho tab active
//   const [activeTab, setActiveTab] = useState('muc-luc');

//   // State cho bookmark
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   // State cho cài đặt
//   const [backgroundColor, setBackgroundColor] = useState('#EFE3C8');
//   const [fontFamily, setFontFamily] = useState('Quicksand');
//   const [fontSize, setFontSize] = useState(18);
//   const [scrollType, setScrollType] = useState('vertical');

//   // ✅ Nội dung chia thành từng trang với 2 cột
  // const pages = [
  //   {
  //     left: [
  //       "Chung Thu Yếu muốn đình chỉnh với cậu ta, nhưng mấp máy môi mãi lại không biết nói gì, đành giả vờ như không nghe thấy.",
  //       "Tống Cạnh Hàm nhắm mắt lại nhưng không hề ngủ, khóe môi hơi cong lên, trên mặt lộ vẻ thỏa mãn.",
  //       "Cậu ta mệt thật, lúc đầu chỉ muốn đùa vào, nhưng cứ đùa như vậy rồi ngủ thiếp đi.",
  //       "Chung Thu Yếu giữ nguyên tư thế, cả người không thoải mái, vai cũng hơi mỏi vì bị cậu ta đè.",
  //       "Nhưng nghe thấy tiếng thở đều đều của cậu ta, biết cậu ta đã ngủ, cô ta chịu đựng không cử động."
  //     ],
  //     right: [
  //       "Xe dừng ở ngoài khu chung cư của Chung Thu Yểu, cô ta lay vai Tống Cạnh Hàm gọi: 'Tống Cạnh Hàm.'",
  //       "Tống Cạnh Hàm nheo mắt lại rồi mở mắt ra, ngồi thẳng người nhìn ra bên ngoài: 'Tới nhanh vậy sao?'",
  //       "Toàn bộ cánh tay của Chung Thu Yểu tê dại, cô ta cử động vài cái, lẩm bẩm: 'Nặng chết đi được.'",
  //       "Tống Cạnh Hàm thấy cô ta ôm cánh tay, biết mình đè làm cánh tay cô ta tê: 'Sao không đánh thức em?'",
  //       "Thấy em mệt mỏi nên không gọi. Cánh tay tê liệt của Chung Thu Yếu có thể cử động, cô xách túi chuẩn bị xuống xe."
  //     ]
  //   },
  //   {
  //     left: [
  //       "Tống Cạnh Hàm bật cười. Nếu là trước đây tay mà tê, Chung Thu Yếu nhất định sẽ tất cả cho tan hoặc đẩy đầu cậu ta ra, nào có thể quan tâm cậu ta có mệt hay không?",
  //       "Thái độ của cô ta đối với cậu ta đang dần thay đổi, đây là một dấu hiệu tốt.",
  //       "Sau bữa tối, Tân Huy Nguyệt bật tivi xem show mà Lâm Thành ghi hình ngày hôm qua.",
  //       "Xem xong vẫn còn sớm, cô ta xem thêm hai tập phim truyền hình, sau đó thấy thời gian cũng khá muộn nên cô ta tắt tivi định lên lầu.",
  //       "Lúc đi đến đầu cầu thang, cô ta cảm thấy hơi khát nước nên quay người đi về phía máy lọc nước.",
  //     ],
  //     right: [
  //       "Khi đang uống nước thì cửa phòng khách mở ra, Lâm Thành từ bên ngoài đi vào.",
  //       "Máy lọc nước đặt ở trong góc, Lâm Thành không nhìn thấy cô ta nên tiện tay đóng cửa đi về phía sofa.",
  //       "Anh ta có vẻ rất mệt mỏi, đi tới ngồi phịch xuống sofa, khẽ nhắm mắt lại, một tay day mi tâm.",
  //       "Tân Huy Nguyệt đứng ở góc nhìn anh ta một lúc, trong lòng hơi do dự không biết có nên đi ra hay không.",
  //       "Cuối cùng cô ta quyết định lặng lẽ quay về phía cầu thang, không muốn làm phiền anh ta.",
  //     ]
  //   },
  //   {
  //     left: [
  //       "Nhưng vừa mới bước đi thì chân vô tình chạm vào chiếc ghế nhỏ ở góc phòng.",
  //       "Tiếng động khẽ vang lên, Lâm Thành lập tức mở mắt ra: 'Ai đó?'",
  //       "Tân Huy Nguyệt đứng im, hơi căng thẳng: 'Là em... Huy Nguyệt.'",
  //       "Lâm Thành thở phào nhẹ nhõm: 'Em còn chưa ngủ à?'",
  //       "Dạo này anh có vẻ mệt mỏi quá, có cần em pha cho anh tách trà không?"
  //     ],
  //     right: [
  //       "Tiếng động khẽ vang lên, Lâm Thành lập tức mở mắt ra: 'Ai đó?'",
  //       "Tân Huy Nguyệt đứng im, hơi căng thẳng: 'Là em... Huy Nguyệt.'",
  //       "Lâm Thành thở phào nhẹ nhõm: 'Em còn chưa ngủ à?'",
  //       "Dạo này anh có vẻ mệt mỏi quá, có cần em pha cho anh tách trà không?"
  //     ]
  //   }
  // ];

//   const [currentPage, setCurrentPage] = useState(0);
//   const totalPages = pages.length;

//   const nextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Hàm xử lý nghe sách
//   const handleListenBook = () => {
//     if (showAudioPlayer && isAudioPlaying) {
//       // Nếu đang phát thì dừng
//       setIsAudioPlaying(false);
//     } else {
//       // Nếu không phát thì bắt đầu phát và hiện player
//       setIsAudioPlaying(true);
//       setShowAudioPlayer(true);
//     }
//   };

//   // Hàm mở/đóng sidebar mục lục
//   const toggleTocSidebar = () => {
//     setShowTocSidebar(!showTocSidebar);
//   };

//   // Hàm xử lý toggle bookmark
//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
    
//     // Nếu bạn muốn thêm/xóa bookmark thực sự, có thể thêm logic ở đây
//     if (!isBookmarked) {
//       // Thêm bookmark mới
//       console.log("Đã thêm bookmark");
//     } else {
//       // Xóa bookmark
//       console.log("Đã xóa bookmark");
//     }
//   };

//   // Hàm mở/đóng sidebar cài đặt
//   const toggleSettingsSidebar = () => {
//     setShowSettingsSidebar(!showSettingsSidebar);
//   };

 

//   // Hàm đóng audio player
//   const closeAudioPlayer = () => {
//     setIsAudioPlaying(false);
//     setShowAudioPlayer(false);
//   };

//   // Hàm xử lý thay đổi volume
//   const handleVolumeChange = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left;
//     const newVolume = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
//     setVolume(newVolume);
//   };

//   // Hàm mute/unmute
//   const toggleMute = () => {
//     setVolume(volume === 0 ? 70 : 0);
//   };

//   // Lấy icon volume phù hợp
//   const getVolumeIcon = () => {
//     if (volume === 0) return <HiOutlineSpeakerXMark />;
//     if (volume < 50) return <HiOutlineSpeakerWave />;
//     return <HiOutlineSpeakerWave />;
//   };

//   // Hàm tăng cỡ chữ
//   const increaseFontSize = () => {
//     if (fontSize < 30) { // Giới hạn tối đa 30px
//       setFontSize(fontSize + 1);
//     }
//   };

//   // Hàm giảm cỡ chữ
//   const decreaseFontSize = () => {
//     if (fontSize > 12) { // Giới hạn tối thiểu 12px
//       setFontSize(fontSize - 1);
//     }
//   };

//   // Thêm useEffect để áp dụng font family
//   useEffect(() => {
//     const contentElement = document.querySelector('.br-reader-content');
//     const columnElements = document.querySelectorAll('.br-column');
    
//     if (contentElement) {
//       contentElement.style.fontFamily = fontFamily;
//     }
    
//     columnElements.forEach(column => {
//       column.style.fontFamily = fontFamily;
//     });
//   }, [fontFamily]);

//   // Gọi applyFontSize mỗi khi fontSize thay đổi
//   useEffect(() => {
//   // Áp dụng cỡ chữ vào nội dung sách
//     const contentElement = document.querySelector('.br-reader-content');
//     if (contentElement) {
//       contentElement.style.fontSize = `${fontSize}px`;
//     }
//   }, [fontSize]);

//   // Hàm reset về cài đặt mặc định
//   const resetToDefault = () => {
//     setBackgroundColor('#EFE3C8');
//     setFontFamily('Quicksand');
//     setFontSize(18);
//     setScrollType('vertical');
//     alert('Đã reset về cài đặt mặc định');
//   };

//   // Hàm áp dụng các cài đặt đã chọn
//   const applySettings = () => {
//     // Ở đây bạn có thể thêm logic áp dụng các cài đặt
//     // Ví dụ: lưu vào localStorage, áp dụng vào component, etc.
//     alert('Đã áp dụng cài đặt');
    
//     // Ví dụ: áp dụng font family và size vào nội dung sách
//     document.querySelector('.br-reader-content').style.fontFamily = fontFamily;
//     document.querySelector('.br-reader-content').style.fontSize = `${fontSize}px`;
    
//     // Đóng sidebar sau khi áp dụng (tùy chọn)
//     // setShowSettingsSidebar(false);
//   };

//   return (
//     <div className="br-reader-container">
//       <div className="br-body">
//         <Header />

//         {/* Audio Player Slide-up */}
//         {showAudioPlayer && (
//           <div className="br-audio-player" style={{ '--header-bg': `url(${headerBg})` }}>
//             <div className="br-audio-content">
//               <div className="br-audio-info">
//                 <img src={bookImg} alt={"book"} className="br-audio-book-img" />
//                 <div className="br-audio-text">
//                   <div className="br-audio-title">
//                     101 cách cua đổ đại lão hàng xóm - Chương 1
//                   </div>
//                   <div className="br-audio-author">Đồng Vũ</div>
//                 </div>
//               </div>
              
//               <div className="br-audio-listen">
//                 <div className="br-audio-controls">
//                   <button className="br-audio-control-btn">
//                     <GoHeart />
//                   </button>
//                   <button className="br-audio-control-btn">
//                     <TbAdjustmentsHorizontal />
//                   </button>
//                   <button className="br-audio-control-btn">
//                     <FaBackward />
//                   </button>
//                   <button 
//                     className="br-audio-play-btn"
//                     onClick={handleListenBook}
//                   >
//                     {isAudioPlaying ? <FaPause /> : <FaPlay />}
//                   </button>
//                   <button className="br-audio-control-btn">
//                     <FaForward />
//                   </button>
//                   <button className="br-audio-control-btn">
//                     <FaRandom />
//                   </button>
//                   <button className="br-audio-control-btn">
//                     <FaRegClock />
//                   </button>
//                 </div>

//                 <div className="br-audio-progress">
//                   <div className="br-audio-time">0:25</div>
//                   <div className="br-audio-progress-bar">
//                     <div className="br-audio-progress-filled"></div>
//                   </div>
//                   <div className="br-audio-time">1:34</div>
//                 </div>
//               </div>
              
//               <div className="br-audio-vol">
//                 <button className="br-audio-vol-btn">
//                   <FaClipboardList />
//                 </button>
//                 <div className="br-volume-control">
//                   <button className="br-audio-vol-btn" onClick={toggleMute}>
//                     {getVolumeIcon()}
//                   </button>
//                   <div 
//                     className="br-volume-slider" 
//                     onClick={handleVolumeChange}
//                   >
//                     <div 
//                       className="br-volume-filled" 
//                       style={{ width: `${volume}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//               <button className="br-audio-close" onClick={closeAudioPlayer}>
//                 ×
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Sidebar Mục lục */}
//         {showTocSidebar && (
//           <div className="br-toc-sidebar">
//             <div className="br-toc-header">
//               <h2>Danh sách</h2>
//               <button className="br-toc-close" onClick={toggleTocSidebar}>
//                 <FaTimes />
//               </button>
//             </div>
            
//             <div className="br-toc-tabs">
//               <button 
//                 className={`br-toc-tab ${activeTab === 'muc-luc' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('muc-luc')}
//               >
//                 Mục lục
//               </button>
//               <button 
//                 className={`br-toc-tab ${activeTab === 'dau-trang' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('dau-trang')}
//               >
//                 Dấu trang
//               </button>
//             </div>

//             <div className="br-toc-content">
//               {activeTab === 'muc-luc' && (
//                 <div className="br-toc-section">
//                   <div className="br-chapters-list">
//                     {tableOfContents.map((chapter) => (
//                       <div key={chapter.id} className="br-chapter-item">
//                         <div className="br-toc-chapter-title">{chapter.title}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'dau-trang' && (
//                 <div className="br-toc-section">
//                   {bookmarks.length > 0 ? (
//                     <div className="br-bookmarks-list">
//                       {bookmarks.map((bookmark, index) => (
//                         <div key={index} className="br-bookmark-item">
//                           <div className="br-bookmark-text">{bookmark.note}</div>
//                           <div className="br-bookmark-chapter">{bookmark.chapter}</div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="br-empty-state">
//                       <div className="br-empty-icon">
//                         <BsBookmarkPlus />
//                       </div>
//                       <div className="br-empty-title">Bạn chưa có dấu trang nào</div>
//                       <div className="br-empty-description">
//                         Các trang bạn đánh dấu sẽ hiện tại đây. Vui lòng nhấn nút dấu trang để lưu
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Overlay khi sidebar mở */}
//         {showTocSidebar && (
//           <div className="br-toc-overlay" onClick={toggleTocSidebar}></div>
//         )}

//         {/* Sidebar Cài đặt */}
//         {showSettingsSidebar && (
//           <div className="br-settings-sidebar">
//             <div className="br-settings-header">
//               <h2>Cài đặt</h2>
//               <button className="br-settings-close" onClick={toggleSettingsSidebar}>
//                 <FaTimes />
//               </button>
//             </div>
            
//             <div className="br-settings-content">
//               {/* Màu nền */}
//               <div className="br-settings-section">
//                 <div className="br-settings-section-title">Màu nền</div>
//                 <div className="br-color-options">
//                   {[
//                     { color: '#EFE3C8', name: 'Màu vàng nhạt' },
//                     { color: '#FFFFFF', name: 'Màu trắng' },
//                     { color: '#D9D9D9', name: 'Màu xám nhạt' },
//                     { color: '#000000', name: 'Màu tối' }
//                   ].map((bg, index) => (
//                     <div 
//                       key={index}
//                       className={`br-color-option ${backgroundColor === bg.color ? 'active' : ''}`}
//                       onClick={() => setBackgroundColor(bg.color)}
//                     >
//                       <div 
//                         className="br-color-preview" 
//                         style={{ backgroundColor: bg.color }}
//                       ></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="br-settings-divider"></div>

//               {/* Cuộn trang */}
              
//               <div className="br-settings-section">
//                 <div className="br-settings-scroll">
//                   <div className="br-settings-section-title" style={{'margin-bottom': '5px'}}>Cuộn dọc trang</div>
//                   <div className="br-toggle-option">
//                     <label className="br-toggle-label" style={{'margin-bottom': '5px'}}>
//                       <input 
//                         type="checkbox" 
//                         checked={scrollType === 'vertical'}
//                         onChange={(e) => setScrollType(e.target.checked ? 'vertical' : 'horizontal')}
//                       />
//                       <span className="br-toggle-slider"></span>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div className="br-settings-divider"></div>

//               {/* Kiểu chữ */}
//               <div className="br-settings-section">
//                 <h3 className="br-settings-section-title">Kiểu chữ</h3>
//                 <div className="br-font-grid">
//                   {[
//                     { family: 'Quicksand', name: 'Quicksand' },
//                     { family: 'Big Caslon', name: 'Big Caslon' },
//                     { family: 'Roboto', name: 'Roboto' },
//                     { family: 'Times New Roman', name: 'Times New Roman' }
//                   ].map((font) => (
//                     <button
//                       key={font.family}
//                       className={`br-font-btn ${fontFamily === font.family ? 'active' : ''}`}
//                       onClick={() => setFontFamily(font.family)}
//                       style={{ fontFamily: font.family }}
//                     >
//                       {font.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="br-settings-divider"></div>

//               {/* Cỡ chữ */}
//               <div className="br-settings-section">
//                 <h3 className="br-settings-section-title">Cỡ chữ</h3>
//                 <div className="br-font-size-options">
//                   <div className="br-font-size-controls">
//                     <button 
//                       className={`br-font-size-btn ${fontSize <= 12 ? 'disabled' : ''}`}
//                       onClick={decreaseFontSize}
//                       disabled={fontSize <= 12}
//                     >
//                       <FaMinus />
//                     </button>
//                     <span className="br-current-font-size">{fontSize}px</span>
//                     <button 
//                       className={`br-font-size-btn ${fontSize >= 30 ? 'disabled' : ''}`}
//                       onClick={increaseFontSize}
//                       disabled={fontSize >= 30}
//                     >
//                       <FaPlus />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="br-settings-divider"></div>

//               {/* Cài đặt mặc định */}
//               <div className="br-settings-section">
//                 <div className="br-default-buttons">
//                   <button className="br-reset-btn" onClick={resetToDefault}>
//                     Cài đặt mặc định
//                   </button>
//                   <button className="br-apply-btn" onClick={applySettings}>
//                     Áp dụng
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Overlay khi sidebar cài đặt mở */}
//         {showSettingsSidebar && (
//           <div className="br-settings-overlay" onClick={toggleSettingsSidebar}></div>
//         )}

//         <div className="br-reader-main">
//           {/* HEADER */}
//           <header className="br-reader-header">
//             <div className="br-header-left">
//               <FaChevronLeft className="br-icon" onClick={() => navigate("/bookdetail")}/>
//               <span className="br-book-title">101 cách cua đổ đại lão hàng xóm</span>
//             </div>
//             <div className="br-header-right">
//               <FaHeadphones 
//                 className={`br-icon ${isAudioPlaying ? 'active' : ''}`} 
//                 onClick={handleListenBook}
//               />
//               <FaClipboardList
//                 className={`br-icon ${showTocSidebar ? 'active' : ''}`} 
//                 onClick={toggleTocSidebar} 
//               />
//               {isBookmarked ? (
//                 <BsBookmarkDashFill 
//                   className="br-icon active" 
//                   onClick={toggleBookmark}
//                 />
//               ) : (
//                 <BsBookmarkPlus 
//                   className="br-icon" 
//                   onClick={toggleBookmark}
//                 />
//               )}
//               <FiSettings 
//                 className={`br-icon ${showSettingsSidebar ? 'active' : ''}`}
//                 onClick={toggleSettingsSidebar}
//               />
//             </div>
//           </header>

//           {/* NỘI DUNG */}
//           <main className="br-reader-content">
//             <div className="br-chapter-title">Chương 1</div>
//             <div className="br-chapter-subtitle">Anh cho em uống thuốc?</div>

//             <div className="br-text-columns">
//               {/* Icon trái - Ẩn khi ở trang đầu */}
//               <FaChevronLeft 
//                 className={`br-content-icon ${currentPage === 0 ? 'hidden' : ''}`} 
//                 onClick={prevPage} 
//               />

//               {/* Cột trái */}
//               <div className="br-column">
//                 {pages[currentPage].left.map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//               </div>

//               {/* Cột phải */}
//               <div className="br-column">
//                 {pages[currentPage].right.map((para, i) => (
//                   <p key={i}>{para}</p>
//                 ))}
//               </div>

//               {/* Icon phải - Ẩn khi ở trang cuối */}
//               <FaChevronRight 
//                 className={`br-content-icon ${currentPage === totalPages - 1 ? 'hidden' : ''}`} 
//                 onClick={nextPage} 
//               />
//             </div>
//           </main>

//           {/* Thanh điều hướng dưới */}
//           <footer className="br-reader-footer">
//             <div className="br-footer-left">
//               <FaArrowLeft className="br-icon" />
//               <span>Chương trước</span>
//             </div>

//             <div className="br-footer-center">
//               <span>{currentPage + 1}/{totalPages}</span>
//             </div>

//             <div className="br-footer-right">
//               <span>Chương sau</span>
//               <FaArrowRight className="br-icon" />
//             </div>
//           </footer>

//           {/* TƯƠNG TÁC */}
//           <div className="br-reader-actions">
//             <FaRegThumbsUp className="br-action-icon" />
//             <FaRegFlag className="br-action-icon" />
//             <FaRegCommentAlt className="br-action-icon" />
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default BookReaderPage;


import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookReaderData } from "../../api";
import "./BookReaderPage.css";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { 
    FaHeadphones, FaClipboardList, FaRegBookmark, FaRegThumbsUp, 
    FaRegFlag, FaRegCommentAlt, FaBookmark, FaHeart, 
    FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight,
    FaPause, FaPlay, FaBackward, FaForward, FaRandom, FaTimes,
    FaPlus, FaMinus 
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { BsBookmarkPlus, BsBookmarkDashFill } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import bookImg from "../../assets/101book.jpg";
import headerBg from '../../assets/bg_header.png';

// --- XÓA BỎ HÀM paginateContent VÌ DỮ LIỆU ĐÃ PHÂN TRANG SẴN ---
// const paginateContent = (content, maxLines = 5) => { /* ... */ };

function BookReaderPage() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    
    // --- STATE DỮ LIỆU ---
    const [book, setBook] = useState(null);
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [pages, setPages] = useState([]); // Chứa mảng {left: [], right: []}
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- STATE HIỂN THỊ VÀ ĐIỀU KHIỂN ---
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);
    const [showTocSidebar, setShowTocSidebar] = useState(false);
    const [showSettingsSidebar, setShowSettingsSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState('muc-luc');
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);

    // --- STATE CÀI ĐẶT ---
    const [backgroundColor, setBackgroundColor] = useState('#EFE3C8');
    const [fontFamily, setFontFamily] = useState('Quicksand');
    const [fontSize, setFontSize] = useState(18);
    const [scrollType, setScrollType] = useState('vertical');
    const audioRef = useRef(null);

    // --- LOGIC TẢI DỮ LIỆU ---
    useEffect(() => {
        if (!id) {
            setError("Không tìm thấy ID sách.");
            setLoading(false);
            return;
        }

        const fetchReaderData = async () => {
            try {
                const response = await getBookReaderData(id);
                const bookData = response.data;
                setBook(bookData);

                const currentChapter = bookData.chaptersDetail[currentChapterIndex];
                
                // --- THAY ĐỔI LỚN TẠI ĐÂY ---
                if (currentChapter && currentChapter.pages) {
                    // Ánh xạ trực tiếp mảng 'pages' đã được phân trang từ API
                    setPages(currentChapter.pages);
                    setTotalPages(currentChapter.pages.length);
                } else {
                    setPages([]);
                    setTotalPages(0);
                }
                
                setBookmarks([]); // Reset bookmarks
                
            } catch (err) {
                console.error("❌ Error fetching book reader data:", err);
                setError("Lỗi khi tải nội dung sách.");
            } finally {
                setLoading(false);
            }
        };

        fetchReaderData();
    }, [id, currentChapterIndex]); // Chạy lại khi ID hoặc chương thay đổi

    // --- LOGIC CHUYỂN TRANG/CHƯƠNG ---
    const totalChapters = book?.chaptersDetail.length || 0;

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        } else if (currentChapterIndex < totalChapters - 1) {
            // Chuyển sang chương kế tiếp và reset trang về 0
            setCurrentChapterIndex(currentChapterIndex + 1);
            setCurrentPage(0); 
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else if (currentChapterIndex > 0) {
             // Chuyển sang chương trước
             const previousChapter = book?.chaptersDetail[currentChapterIndex - 1];
             if (previousChapter && previousChapter.pages) {
                 // Thiết lập chương trước và chuyển đến trang cuối cùng của chương đó
                 setCurrentChapterIndex(currentChapterIndex - 1);
                 setCurrentPage(previousChapter.pages.length - 1); // ĐIỂM QUAN TRỌNG
             }
        }
    };
    
    // Chuyển sang chương trước
    const goToPrevChapter = () => {
        if (currentChapterIndex > 0) {
            setCurrentChapterIndex(currentChapterIndex - 1);
            setCurrentPage(0); // luôn về trang đầu của chương mới
        }
    };

    // Chuyển sang chương sau
    const goToNextChapter = () => {
        if (currentChapterIndex < totalChapters - 1) {
            setCurrentChapterIndex(currentChapterIndex + 1);
            setCurrentPage(0); // luôn về trang đầu
        }
    };

    // Hàm chuyển chương (Dùng cho Mục Lục)
    const goToChapter = (index) => {
        if (index >= 0 && index < totalChapters) {
            setCurrentChapterIndex(index);
            setCurrentPage(0);
            setShowTocSidebar(false);
        }
    };
    
    // --- LOGIC AUDIO ---
    const currentChapterAudio = book?.chaptersDetail[currentChapterIndex]?.audioUrl;
    // (Các hàm audio player: handleListenBook, closeAudioPlayer, handleVolumeChange, toggleMute, getVolumeIcon GIỮ NGUYÊN)
    const [volume, setVolume] = useState(70);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    
    const handleVolumeChange = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newVolume = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume / 100;
    }, []);

    const toggleMute = () => {
        const newVolume = volume === 0 ? 70 : 0;
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume / 100;
    };

    const getVolumeIcon = () => {
        if (volume === 0) return <HiOutlineSpeakerXMark />;
        return <HiOutlineSpeakerWave />;
    };

    const handleListenBook = () => {
        if (!currentChapterAudio) {
            alert("Chương này chưa có audio.");
            return;
        }
        if (isAudioPlaying) {
            audioRef.current?.pause();
            setIsAudioPlaying(false);
        } else {
            // src đã được React cập nhật tự động qua useEffect và JSX
            // Chỉ cần play
            setTimeout(() => {
                if (audioRef.current && audioRef.current.readyState >= 2) {
                    audioRef.current?.play().catch(e => console.error("Error playing audio:", e));
                } else {
                    const playAfterLoad = () => {
                        audioRef.current?.play().catch(e => console.error("Error playing audio:", e));
                        audioRef.current?.removeEventListener('loadedmetadata', playAfterLoad);
                    };
                    audioRef.current?.addEventListener('loadedmetadata', playAfterLoad);
                }
            }, 100);
            setIsAudioPlaying(true);
            setShowAudioPlayer(true);
        }
    };

    const closeAudioPlayer = () => {
        audioRef.current?.pause();
        setIsAudioPlaying(false);
        setShowAudioPlayer(false);
    };

    // Định dạng thời gian
    const formatTime = useCallback((sec) => {
        if (!isFinite(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }, []);

    // Events
    const onLoadedMetadata = useCallback(() => {
        if (audioRef.current && isFinite(audioRef.current.duration)) {
            setDuration(audioRef.current.duration);
        }
    }, []);

    const onCanPlay = useCallback(() => {
        if (audioRef.current && isFinite(audioRef.current.duration)) {
            setDuration(audioRef.current.duration);
        }
    }, []);

    const onTimeUpdate = useCallback(() => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            if (isFinite(audioRef.current.duration)) setDuration(audioRef.current.duration);
        }
    }, []);

    const onEnded = useCallback(() => {
        setIsAudioPlaying(false);
    }, []);

    useEffect(() => {
        const el = audioRef.current;
        if (!el) return;
        el.addEventListener('loadedmetadata', onLoadedMetadata);
        el.addEventListener('timeupdate', onTimeUpdate);
        el.addEventListener('canplay', onCanPlay);
        el.addEventListener('ended', onEnded);
        return () => {
            el.removeEventListener('loadedmetadata', onLoadedMetadata);
            el.removeEventListener('timeupdate', onTimeUpdate);
            el.removeEventListener('canplay', onCanPlay);
            el.removeEventListener('ended', onEnded);
        };
    }, [onLoadedMetadata, onTimeUpdate, onCanPlay, onEnded]);

    // Cập nhật audio khi currentChapterAudio thay đổi
    useEffect(() => {
        if (!audioRef.current) return;
        
        if (!currentChapterAudio) {
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
        
        // Load metadata (src đã được React cập nhật tự động từ JSX với full URL)
        audioRef.current.load().catch(() => {
            // ignore
        });
    }, [currentChapterAudio]);

    // Seek controls
    const seekBy = (delta) => {
        if (!audioRef.current) return;
        const next = Math.max(0, Math.min((duration || 0), (audioRef.current.currentTime || 0) + delta));
        audioRef.current.currentTime = next;
        setCurrentTime(next);
    };

    const handleProgressClick = (e) => {
        if (!audioRef.current || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, offsetX / rect.width));
        const next = ratio * duration;
        audioRef.current.currentTime = next;
        setCurrentTime(next);
    };

    // --- LOGIC CÀI ĐẶT ---
    const [fontSizes] = useState([12, 14, 16, 18, 20, 24, 28, 30]);

    const increaseFontSize = () => setFontSize(prev => Math.min(fontSizes[fontSizes.length - 1], prev + 2));
    const decreaseFontSize = () => setFontSize(prev => Math.max(fontSizes[0], prev - 2));

    // Apply styles to DOM (Giữ nguyên)
    useEffect(() => {
        const readerMain = document.querySelector('.br-reader-main');
        if (readerMain) {
            readerMain.style.backgroundColor = backgroundColor;
        }
        const paragraphs = document.querySelectorAll('.br-text-columns p');
        paragraphs.forEach(p => {
            p.style.fontFamily = fontFamily;
            p.style.fontSize = `${fontSize}px`;
        });
    }, [backgroundColor, fontFamily, fontSize, currentPage]);

    // --- LOGIC SIDEBAR ---
    const toggleTocSidebar = () => setShowTocSidebar(prev => !prev);
    const toggleSettingsSidebar = () => setShowSettingsSidebar(prev => !prev);
    
    const resetToDefault = () => {
        setBackgroundColor('#EFE3C8');
        setFontFamily('Quicksand');
        setFontSize(18);
        setScrollType('vertical');
    };

    // --- RENDER STATES ---
    if (loading) {
        return (
            <div className="br-reader-container">
                <Header />
                <div className="br-loading-state">
                    <p>Đang tải nội dung sách...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !book) {
        return (
            <div className="br-reader-container">
                <Header />
                <div className="br-error-state">
                    <p>{error || "Không thể tải dữ liệu sách."}</p>
                    <button onClick={() => navigate('/books')}>Quay lại</button>
                </div>
                <Footer />
            </div>
        );
    }
    
    const currentChapter = book.chaptersDetail[currentChapterIndex];

    return (
        <div className="br-reader-container">
            <div className="br-body">
                <Header />

                {/* Audio Player Slide-up */}
                {showAudioPlayer && currentChapterAudio && (
                    <div className="br-audio-player" style={{ '--header-bg': `url(${headerBg})` }}>
                        <div className="br-audio-content">
                            {/* ... (Audio Player Content) ... */}
                             <div className="br-audio-info">
                                <img src={book?.cover || bookImg} alt={book?.title} className="br-audio-book-img" />
                                <div className="br-audio-text">
                                    <div className="br-audio-title">
                                        {book?.title || "Tên sách"} - {currentChapter?.title || "Tên chương"}
                                    </div>
                                    <div className="br-audio-author">{book?.author || "Tác giả"}</div>
                                </div>
                            </div>
                            
                            <div className="br-audio-listen">
                                <div className="br-audio-controls">
                                    <button className="br-audio-control-btn"><GoHeart /></button>
                                    <button className="br-audio-control-btn"><TbAdjustmentsHorizontal /></button>
                                    <button className="br-audio-control-btn" onClick={() => seekBy(-15)}><FaBackward /></button>
                                    <button className="br-audio-play-btn" onClick={handleListenBook}>
                                        {isAudioPlaying ? <FaPause /> : <FaPlay />}
                                    </button>
                                    <button className="br-audio-control-btn" onClick={() => seekBy(15)}><FaForward /></button>
                                    <button className="br-audio-control-btn"><FaRandom /></button>
                                    <button className="br-audio-control-btn"><FaRegClock /></button>
                                </div>
                                <div className="br-audio-progress">
                                    <div className="br-audio-time">{formatTime(currentTime)}</div>
                                    <div className="br-audio-progress-bar" onClick={handleProgressClick}>
                                        <div className="br-audio-progress-filled" style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}></div>
                                    </div>
                                    <div className="br-audio-time">{formatTime(duration)}</div>
                                </div>
                            </div>
                            
                            <div className="br-audio-vol">
                                <button className="br-audio-vol-btn"><FaClipboardList /></button>
                                <div className="br-volume-control">
                                    <button className="br-audio-vol-btn" onClick={toggleMute}>
                                        {getVolumeIcon()}
                                    </button>
                                    <div className="br-volume-slider" onClick={handleVolumeChange}>
                                        <div className="br-volume-filled" style={{ width: `${volume}%` }}></div>
                                    </div>
                                </div>
                            </div>
                            <button className="br-audio-close" onClick={closeAudioPlayer}>
                                ×
                            </button>
                        </div>
                    </div>
                )}

                {/* Sidebar Mục lục */}
                {showTocSidebar && (
                    <div className="br-toc-sidebar">
                        <div className="br-toc-header">
                            <h2>Danh sách</h2>
                            <button className="br-toc-close" onClick={toggleTocSidebar}><FaTimes /></button>
                        </div>
                        
                        <div className="br-toc-tabs">
                            <button className={`br-toc-tab ${activeTab === 'muc-luc' ? 'active' : ''}`} onClick={() => setActiveTab('muc-luc')}>Mục lục</button>
                            <button className={`br-toc-tab ${activeTab === 'dau-trang' ? 'active' : ''}`} onClick={() => setActiveTab('dau-trang')}>Dấu trang</button>
                        </div>

                        <div className="br-toc-content">
                            {activeTab === 'muc-luc' && (
                                <div className="br-toc-section">
                                    <div className="br-chapters-list">
                                        {book.chapters.map((chapter, index) => (
                                            <div 
                                                key={index} 
                                                className={`br-chapter-item ${currentChapterIndex === index ? 'active' : ''}`}
                                                onClick={() => goToChapter(index)}
                                            >
                                                <div className="br-toc-chapter-title">{chapter.title}</div>
                                                <span className="br-toc-chapter-status">
                                                    {chapter.free ? 'Miễn phí' : 'Cần mua'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'dau-trang' && (
                                <div className="br-toc-section">
                                    {bookmarks.length > 0 ? (
                                        <div className="br-bookmarks-list">
                                            {bookmarks.map((bookmark, index) => (
                                                <div key={index} className="br-bookmark-item">
                                                    <div className="br-bookmark-text">{bookmark.note}</div>
                                                    <div className="br-bookmark-chapter">{bookmark.chapter}</div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="br-empty-state">
                                            <div className="br-empty-icon"><BsBookmarkPlus /></div>
                                            <div className="br-empty-title">Bạn chưa có dấu trang nào</div>
                                            <div className="br-empty-description">Các trang bạn đánh dấu sẽ hiện tại đây. Vui lòng nhấn nút dấu trang để lưu</div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Overlay khi sidebar mở */}
                {showTocSidebar && (<div className="br-toc-overlay" onClick={toggleTocSidebar}></div>)}

                {/* Sidebar Cài đặt */}
                {showSettingsSidebar && (
                    <div className="br-settings-sidebar">
                        <div className="br-settings-header">
                            <h2>Cài đặt</h2>
                            <button className="br-settings-close" onClick={toggleSettingsSidebar}><FaTimes /></button>
                        </div>
                        
                        <div className="br-settings-content">
                            {/* Màu nền */}
                            <div className="br-settings-section">
                                <div className="br-settings-section-title">Màu nền</div>
                                <div className="br-color-options">
                                    {[
                                        { color: '#EFE3C8', name: 'Màu vàng nhạt' },
                                        { color: '#FFFFFF', name: 'Màu trắng' },
                                        { color: '#D9D9D9', name: 'Màu xám nhạt' },
                                        { color: '#000000', name: 'Màu tối' }
                                    ].map((bg, index) => (
                                        <div key={index} className={`br-color-option ${backgroundColor === bg.color ? 'active' : ''}`} onClick={() => setBackgroundColor(bg.color)}>
                                            <div className="br-color-preview" style={{ backgroundColor: bg.color }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="br-settings-divider"></div>
                            {/* Cuộn trang */}
                            <div className="br-settings-section">
                                <div className="br-settings-scroll">
                                    <div className="br-settings-section-title" style={{'marginBottom': '5px'}}>Cuộn dọc trang</div>
                                    <div className="br-toggle-option">
                                        <label className="br-toggle-label" style={{'marginBottom': '5px'}}>
                                            <input type="checkbox" checked={scrollType === 'vertical'} onChange={(e) => setScrollType(e.target.checked ? 'vertical' : 'horizontal')}/>
                                            <span className="br-toggle-slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="br-settings-divider"></div>
                            {/* Kiểu chữ */}
                            <div className="br-settings-section">
                                <h3 className="br-settings-section-title">Kiểu chữ</h3>
                                <div className="br-font-grid">
                                    {[
                                        { family: 'Quicksand', name: 'Quicksand' },
                                        { family: 'Big Caslon', name: 'Big Caslon' },
                                        { family: 'Roboto', name: 'Roboto' },
                                        { family: 'Times New Roman', name: 'Times New Roman' }
                                    ].map((font) => (
                                        <button key={font.family} className={`br-font-btn ${fontFamily === font.family ? 'active' : ''}`} onClick={() => setFontFamily(font.family)} style={{ fontFamily: font.family }}>
                                            {font.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="br-settings-divider"></div>
                            {/* Cỡ chữ */}
                            <div className="br-settings-section">
                                <h3 className="br-settings-section-title">Cỡ chữ</h3>
                                <div className="br-font-size-options">
                                    <div className="br-font-size-controls">
                                        <button className={`br-font-size-btn ${fontSize <= 12 ? 'disabled' : ''}`} onClick={decreaseFontSize} disabled={fontSize <= 12}><FaMinus /></button>
                                        <span className="br-current-font-size">{fontSize}px</span>
                                        <button className={`br-font-size-btn ${fontSize >= 30 ? 'disabled' : ''}`} onClick={increaseFontSize} disabled={fontSize >= 30}><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="br-settings-divider"></div>
                            {/* Cài đặt mặc định */}
                            <div className="br-settings-section">
                                <div className="br-default-buttons">
                                    <button className="br-reset-btn" onClick={resetToDefault}>Cài đặt mặc định</button>
                                    <button className="br-apply-btn" onClick={() => setShowSettingsSidebar(false)}>Đóng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Overlay khi sidebar cài đặt mở */}
                {showSettingsSidebar && (<div className="br-settings-overlay" onClick={toggleSettingsSidebar}></div>)}

                <div className="br-reader-main">
                    {/* HEADER */}
                    <header className="br-reader-header">
                        <div className="br-header-left">
                            <FaChevronLeft className="br-icon" onClick={() => navigate(`/book/${book._id}`)}/>
                            <span className="br-book-title">{book?.title || book?.titleVi || "Đang tải..."}</span>
                        </div>
                        <div className="br-header-right">
                            <FaHeadphones className={`br-icon ${currentChapterAudio && isAudioPlaying ? 'active' : ''}`} onClick={handleListenBook}/>
                            <FaClipboardList className={`br-icon ${showTocSidebar ? 'active' : ''}`} onClick={toggleTocSidebar}/>
                            {isBookmarked ? (
                                <BsBookmarkDashFill className="br-icon active" onClick={() => setIsBookmarked(false)}/>
                            ) : (
                                <BsBookmarkPlus className="br-icon" onClick={() => setIsBookmarked(true)}/>
                            )}
                            <FiSettings className={`br-icon ${showSettingsSidebar ? 'active' : ''}`} onClick={toggleSettingsSidebar}/>
                        </div>
                    </header>

                    {/* NỘI DUNG */}
                    <main className="br-reader-content">
                        <div className="br-chapter-title">{currentChapter?.title || `Chương ${currentChapterIndex + 1}`}</div>
                        <div className="br-chapter-subtitle">{book?.chapters[currentChapterIndex]?.date}</div>

                        {pages.length > 0 && (
                            <div className="br-text-columns">
                                {/* Icon trái - Ẩn khi ở trang đầu */}
                                <FaChevronLeft 
                                    className={`br-content-icon ${currentPage === 0 ? 'hidden' : ''}`} 
                                    onClick={prevPage} 
                                />

                                {/* Cột trái */}
                                <div className="br-column">
                                    {pages[currentPage]?.left.map((para, i) => (<p key={i}>{para}</p>))}
                                </div>

                                {/* Cột phải */}
                                <div className="br-column">
                                    {pages[currentPage]?.right.map((para, i) => (<p key={i}>{para}</p>))}
                                </div>

                                {/* Icon phải - Ẩn khi ở chương cuối và trang cuối */}
                                <FaChevronRight 
                                    className={`br-content-icon ${currentPage === totalPages - 1 ? 'hidden' : ''}`} 
                                    onClick={nextPage} 
                                />
                            </div>
                        )}
                        
                        {pages.length === 0 && !loading && (
                            <div className="br-empty-chapter">
                                <p>Nội dung chương này đang được cập nhật.</p>
                            </div>
                        )}
                    </main>

                    {/* Thanh điều hướng dưới */}
                    <footer className="br-reader-footer">
                        <div className="br-footer-left" onClick={goToPrevChapter}>
                            <FaArrowLeft className={`br-icon ${currentPage === 0 && currentChapterIndex === 0 ? 'disabled' : ''}`} />
                            <span className={currentPage === 0 && currentChapterIndex === 0 ? 'disabled' : ''}>Chương trước</span>
                        </div>

                        <div className="br-footer-center">
                            <span>{currentPage + 1}/{totalPages}</span>
                        </div>

                        <div className="br-footer-right" onClick={goToNextChapter}>
                            <span className={currentPage === totalPages - 1 && currentChapterIndex === totalChapters - 1 ? 'disabled' : ''}>Chương sau</span>
                            <FaArrowRight className={`br-icon ${currentPage === totalPages - 1 && currentChapterIndex === totalChapters - 1 ? 'disabled' : ''}`} />
                        </div>
                    </footer>

                    {/* TƯƠNG TÁC */}
                    <div className="br-reader-actions">
                        <FaRegThumbsUp className="br-action-icon" />
                        <FaRegFlag className="br-action-icon" />
                        <FaRegCommentAlt className="br-action-icon" />
                    </div>
                </div>

                <Footer />
            </div>
            {/* Hidden Audio Element */}
            <audio 
                ref={audioRef} 
                className="br-audio-element"
                src={currentChapterAudio ? `http://localhost:5000${currentChapterAudio}` : undefined}
                crossOrigin="anonymous"
                preload="metadata"
            />
        </div>
    );
}

export default BookReaderPage;