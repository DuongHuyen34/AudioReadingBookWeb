// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import './KidsBookPage.css';
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
// import bookBackground from '../../assets/child.png'; 
// import bg_music from '../../assets/baby-music.mp3';
// import sfxHover from '../../assets/child/hover.mp3';    
// import sfxStoryClick from '../../assets/child/ting.mp3'; 
// import sfxTabClick from '../../assets/child/tab.mp3';

// import b1 from '../../assets/child/viet-tiep-cau-chuyen-hoa-binh.png';
// import b2 from '../../assets/child/tam-cam-1.jpg';
// import b3 from '../../assets/child/su-tich-dua-hau-1.jpg';
// import b4 from '../../assets/child/an-khe-tra-vang-1.jpg';
// import b5 from '../../assets/child/cau-chuyen-bo-dua.jpg';
// import b6 from '../../assets/child/chu-tho-tinh-khon.png';
// import b7 from '../../assets/child/ga-de-trung-vang-1.jpg';
// import b8 from '../../assets/child/qua-bau-tien.jpg';
// import b9 from '../../assets/child/vit-con-cau-tha-1.jpg';

// import pdfFile from '../../assets/qua-va-cong.pdf';

// const storyData = [
//     { id: 1, title: "Sinh nhật của Anna", image: b1, pdfUrl: pdfFile },
//     { id: 2, title: "Cô Bé Lọ Lem", image: b2, pdfUrl: pdfFile },
//     { id: 3, title: "Ông Trăng", image: b3, pdfUrl: pdfFile },
//     { id: 4, title: "Quả Nhân Sâm...", image: b4, pdfUrl: pdfFile },
//     { id: 5, title: "Hạc Trả Ơn (phần 3)", image: b5, pdfUrl: pdfFile },
//     { id: 6, title: "Hạc Trả Ơn (phần 2)", image: b6, pdfUrl: pdfFile },
//     { id: 7, title: "Hạc Trả Ơn (phần 1)", image: b7, pdfUrl: pdfFile },
//     { id: 8, title: "Táo Ngọc Tàng Linh Chi", image: b8, pdfUrl: pdfFile },
//     { id: 9, title: "Công chúa Thủy Cung", image: b9, pdfUrl: pdfFile },
// ];

// const Tabs = ["Tất cả", "Cổ tích", "Hiện đại", "Thơ"];

// const KidsBookPage = () => {
//     const navigate = useNavigate();

//     const [activeTab, setActiveTab] = useState("Tất cả");

//     // State theo dõi trạng thái kích hoạt âm thanh
//     const [isAudioEnabled, setIsAudioEnabled] = useState(false); 
    
//     const audioRef = useRef(null);
//     const storyHoverAudioRef = useRef(null);
//     const storyClickAudioRef = useRef(null);
//     const tabClickAudioRef = useRef(null);

//     // Xóa logic Autoplay trong useEffect
//     useEffect(() => {
//         // Không cố gắng gọi audio.play() ở đây nữa.
//         // Dọn dẹp vẫn giữ nguyên.
//         return () => {
//             if (audioRef.current) {
//                 audioRef.current.pause();
//             }
//         };
//     }, []); 

//     const enableAudioPlayback = () => {
//         // 1. Đảm bảo audio ref tồn tại và nhạc chưa được kích hoạt
//         if (!isAudioEnabled && audioRef.current) {
            
//             // 2. Đặt âm lượng (có thể điều chỉnh tùy ý)
//             audioRef.current.volume = 0.4; 
            
//             // 3. Cố gắng phát nhạc
//             audioRef.current.play().then(() => {
//                 // Thành công: Đánh dấu đã kích hoạt
//                 setIsAudioEnabled(true); 
//                 console.log("🎶 Nhạc nền đã được kích hoạt thành công.");
//             }).catch(error => {
//                 // Thất bại: Ghi nhận lỗi nếu trình duyệt chặn
//                 console.error("❌ Lỗi phát audio: Trình duyệt vẫn chặn Autoplay.", error);
//                 // Không thay đổi isAudioEnabled, để lần click tiếp theo vẫn cố gắng phát lại
//             });
//         }
//     };


//     // Helper function để reset và play bất kỳ SFX nào
//     const playSFX = (ref) => {
//         if (ref.current) {
//             ref.current.currentTime = 0; // Đảm bảo âm thanh phát lại từ đầu (Quan trọng cho SFX)
//             ref.current.play();
//         }
//     };

//     // A. Xử lý SFX khi Hover vào ảnh truyện
//     const handleStoryHover = () => {
//         // Gợi ý: Sound này nên RẤT NGẮN (dưới 0.3s) và tinh tế
//         playSFX(storyHoverAudioRef);
//     };

//     // B. Xử lý SFX khi Nhấn vào ảnh truyện (click)
//     const handleStoryItemClick = (story) => {
//         console.log('PDF URL:', story.pdfUrl);
//         console.log('PDF file exists:', typeof story.pdfUrl);
//         console.log('PDF loaded successfully with X pages');

//         // Kiểm tra PDF URL
//         if (!story.pdfUrl) {
//             console.error('PDF URL không tồn tại:', story);
//             alert('Truyện này chưa có nội dung PDF');
//             return;
//         }
        
//         // Kiểm tra xem file có tồn tại không (cho file cục bộ)
//         if (typeof story.pdfUrl === 'string' && !story.pdfUrl.startsWith('http')) {
//             console.log('PDF file path:', story.pdfUrl);
//         }
//         playSFX(storyClickAudioRef);
        
//         // Dùng useNavigate để CHUYỂN TRANG và TRUYỀN DỮ LIỆU
//         navigate('/story', { 
//             state: { 
//                 storyData: story // Truyền toàn bộ đối tượng truyện
//             } 
//         });
//     };

//     // C. Xử lý SFX khi Nhấn vào Tab
//     const handleTabClick = (tabName) => {
//         // Cập nhật tab active (logic cũ)
//         setActiveTab(tabName);
        
//         // Phát SFX cho tab
//         playSFX(tabClickAudioRef);
        
//         // *Đảm bảo BG Music được kích hoạt nếu đây là lần tương tác đầu tiên*
//         // enableAudioPlayback(); 
//     };

//     return (
//         <div className='kbp-page'>
//             {/* 3. Thêm phần tử <audio> vào giao diện (ẩn) */}
//             <audio ref={audioRef} src={bg_music} loop />
//             {/* SFX khi Hover Truyện */}
//             <audio ref={storyHoverAudioRef} src={sfxHover} preload="auto" /> 
            
//             {/* SFX khi Click Truyện */}
//             <audio ref={storyClickAudioRef} src={sfxStoryClick} preload="auto" />
            
//             {/* SFX khi Click Tab */}
//             <audio ref={tabClickAudioRef} src={sfxTabClick} preload="auto" />

//             <Header />

//             // Hiển thị trang lưới truyện (KidsBookPage ban đầu)
//             <div 
//                 className="kids-page-container"
//                 onClick={enableAudioPlayback}
//             >
//                 <div className="book-bg-wrapper">
//                     <img src={bookBackground} alt="Book Background" className="book-bg" />
//                 </div>
            
//                 <button className="page-nav-absolute left-btn-absolute">
//                     <FaChevronLeft /> 
//                 </button>
//                 <button className="page-nav-absolute right-btn-absolute">
//                     <FaChevronRight />
//                 </button>

//                 <div className="book-content-frame">
//                     {/* 1. THANH TÌM KIẾM TUYỆT ĐỐI (Nằm trên nền sách) */}
//                     <div className="book-search-absolute">
//                         <input type="text" placeholder="Tìm kiếm..." />
//                         <FaSearch className="search-icon-absolute" />
//                     </div>
                

//                     <div className="tabs-container">
//                         {Tabs.map((tab) => (
//                             <button
//                                 key={tab}
//                                 className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
//                                 onClick={() => handleTabClick(tab)}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     <div className="stories-grid">
//                         {storyData.map((story) => (
//                             <div 
//                                 key={story.id} 
//                                 className="story-item"
//                                 onMouseEnter={handleStoryHover} 
//                                 onClick={() => handleStoryItemClick(story)}
//                             >
//                                 <img src={story.image} alt={story.title} className="story-image" />
//                             </div>
//                         ))}
//                     </div>
                    
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default KidsBookPage;

// KidsBookPage.jsx - Sửa phần debug PDF
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './KidsBookPage.css';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import bookBackground from '../../assets/child.png'; 
import bg_music from '../../assets/baby-music.mp3';
import sfxHover from '../../assets/child/hover.mp3';    
import sfxStoryClick from '../../assets/child/ting.mp3'; 
import sfxTabClick from '../../assets/child/tab.mp3';

import b1 from '../../assets/child/rua_va_tho.jpg';
import b2 from '../../assets/child/Bac-nong-dan-va-con-quy-1.jpg';
import b3 from '../../assets/child/su-tich-banh-chung-banh-day-1.jpg';
import b4 from '../../assets/child/an-khe-tra-vang-1.jpg';
import b5 from '../../assets/child/cau-chuyen-bo-dua.jpg';
import b6 from '../../assets/child/chu-tho-tinh-khon.png';
import b7 from '../../assets/child/ga-de-trung-vang-1.jpg';
import b8 from '../../assets/child/qua-bau-tien.jpg';
import b9 from '../../assets/child/vit-con-cau-tha-1.jpg';
import b10 from '../../assets/child/ba-chiec-riu-1.jpg';
import b11 from '../../assets/child/viet-tiep-cau-chuyen-hoa-binh.png';
import b12 from '../../assets/child/su-tich-dua-hau-1.jpg';
import b13 from '../../assets/child/tam-cam-1.jpg';
import b14 from '../../assets/child/vi-sao-tho-cut-duoi-1.jpg';
import b15 from '../../assets/child/doi-tai-xau-xi.jpg';
import b16 from '../../assets/child/giac-mo-ki-dieu-cua-be-na.jpg';
import b17 from '../../assets/child/cong-va-qua-1.jpg';
import b18 from '../../assets/child/canh-tay-phai-va-canh-tay-trai-1.jpg';
import b19 from '../../assets/child/de-con-nghe-loi-me-1.png';
import b20 from '../../assets/hien_dai/ca-linh-di-hoc.jpg';
import b21 from '../../assets/hien_dai/chien-binh-ty-hon.jpg';
import b22 from '../../assets/hien_dai/co-tich-cua-ba.webp';
import b23 from '../../assets/hien_dai/den-gio-bay-len.jpg';
import b24 from '../../assets/hien_dai/goc-san.png';
import b25 from '../../assets/hien_dai/hai-au-di-tim-cha.jpg';
import b26 from '../../assets/hien_dai/nhung-doi-mat-khoang-troi.webp';
import b27 from '../../assets/hien_dai/toi-se-bay.jpg';
import b28 from '../../assets/hien_dai/vua-nham-mat-vua-mo-cua-so.jpg';
import b29 from '../../assets/hien_dai/xom-doi-rom.jpg';
import b30 from '../../assets/tho/Hoi_la_hoi_hoa.webp';
import b31 from '../../assets/tho/len-troi-hai-sao.jpg';
import b32 from '../../assets/tho/phu-thuy-so-ma.jpg';
import b33 from '../../assets/tho/tho-tn.jpg';
import b34 from '../../assets/tho/tho-tn1.jpg';
import b35 from '../../assets/tho/tho-tn2.jpg';

import pdfFile from '../../assets/ba-chiec-riu.pdf';

const storyData = [
    { 
        id: 1, 
        title: "Rùa và Thỏ", 
        image: b1, 
        category: "Cổ tích",
        page: [
            new URL('../../assets/rua_va_tho/rt1.png', import.meta.url).href,
            new URL('../../assets/rua_va_tho/rt2.png', import.meta.url).href,
            new URL('../../assets/rua_va_tho/rt3.png', import.meta.url).href,
            new URL('../../assets/rua_va_tho/rt4.png', import.meta.url).href,
            new URL('../../assets/rua_va_tho/rt5.png', import.meta.url).href
        ]
    },
    { 
        id: 2, 
        title: "Bác nông dân và con quỷ", 
        image: b2, 
        category: "Cổ tích",
        page: [
            new URL('../../assets/bac_nd_va_quy/nd1.png', import.meta.url).href,
            new URL('../../assets/bac_nd_va_quy/nd2.png', import.meta.url).href,
            new URL('../../assets/bac_nd_va_quy/nd3.png', import.meta.url).href,
            new URL('../../assets/bac_nd_va_quy/nd4.png', import.meta.url).href,
            new URL('../../assets/bac_nd_va_quy/nd5.png', import.meta.url).href,
            new URL('../../assets/bac_nd_va_quy/nd6.png', import.meta.url).href,
            new URL('../../assets/bac_nd_va_quy/nd7.png', import.meta.url).href
        ]
    },
    { 
        id: 3, 
        title: "Sự tích bánh chưng bánh dầy", 
        image: b3,
        category: "Cổ tích", 
        page: [
            new URL('../../assets/bchung_bday/bcbd1.png', import.meta.url).href,
            new URL('../../assets/bchung_bday/bcbd2.png', import.meta.url).href,
            new URL('../../assets/bchung_bday/bcbd3.png', import.meta.url).href,
            new URL('../../assets/bchung_bday/bcbd4.png', import.meta.url).href,
            new URL('../../assets/bchung_bday/bcbd5.png', import.meta.url).href,
            new URL('../../assets/bchung_bday/bcbd6.png', import.meta.url).href,
            new URL('../../assets/bchung_bday/bcbd7.png', import.meta.url).href
        ]
    },
    { 
        id: 4, 
        title: "Ăn khế trả vàng", 
        image: b4, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 5, 
        title: "Câu chuyện bó đũa", 
        image: b5,
        category: "Cổ tích", 
        pdfUrl: pdfFile 
    },
    { 
        id: 6, 
        title: "Chú thỏ tinh khôn", 
        image: b6, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 7, 
        title: "Gà đẻ trứng vàng", 
        image: b7, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 8, 
        title: "Quả bầu tiên", 
        image: b8, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 9, 
        title: "Vịt con cẩu thả", 
        image: b9, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 10, 
        title: "Ba chiếc rìu", 
        image: b10, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 11, 
        title: "Viết tiếp câu chuyện hòa bình", 
        image: b11, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 12, 
        title: "Sự tích dưa hấu", 
        image: b12, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 13, 
        title: "Tấm cám", 
        image: b13, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 14, 
        title: "Vì sao thỏ cụt đuôi", 
        image: b14, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 15, 
        title: "Đôi tai xấu xí", 
        image: b15, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 16, 
        title: "Giấc mơ kì diệu của bé Na", 
        image: b16, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 17, 
        title: "Công và Quạ", 
        image: b17, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 18, 
        title: "Cánh tay phải và cánh tay trái", 
        image: b18, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 19, 
        title: "Để con nghe lời mẹ", 
        image: b19, 
        category: "Cổ tích",
        pdfUrl: pdfFile 
    },
    { 
        id: 20, 
        title: "Cá Linh đi học", 
        image: b20, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 21, 
        title: "Chiến binh tý hon trong thế giới côn trùng", 
        image: b21, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 22, 
        title: "Cổ tích của bà", 
        image: b22, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 23, 
        title: "Đèn gió bay lên", 
        image: b23, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 24, 
        title: "Góc sân và Khoảng trời", 
        image: b24, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 25, 
        title: "Hải âu đi tìm cha", 
        image: b25, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 26, 
        title: "Những đôi mắt khoảng trời", 
        image: b26, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 27, 
        title: "Tôi sẽ bay", 
        image: b27, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 28, 
        title: "Vừa nhắm mắt vừa mở cửa sổ", 
        image: b28, 
        category: "Hiện đại",
        pdfUrl: pdfFile 
    },
    { 
        id: 29, 
        title: "Chuyện của bắp ăn mơ và xóm đồi rơm", 
        image: b29, 
        category: "Thơ",
        pdfUrl: pdfFile 
    },
    { 
        id: 30, 
        title: "Hỏi lá hỏi hoa", 
        image: b30, 
        category: "Thơ",
        pdfUrl: pdfFile 
    },
    { 
        id: 31, 
        title: "Lên trời hái sao", 
        image: b31, 
        category: "Thơ",
        pdfUrl: pdfFile 
    },
    { 
        id: 32, 
        title: "Phù thủy sợ ma", 
        image: b32, 
        category: "Thơ",
        pdfUrl: pdfFile 
    },
    { 
        id: 33, 
        title: "Thơ thiếu nhi", 
        image: b33, 
        category: "Thơ",
        pdfUrl: pdfFile 
    },
    { 
        id: 34, 
        title: "Gửi gió về cho nội", 
        image: b34, 
        category: "Thơ",
        pdfUrl: pdfFile 
    },
    { 
        id: 35, 
        title: "Thơ cho thiếu nhi", 
        image: b35, 
        category: "Thơ",
        pdfUrl: pdfFile 
    },

];

const Tabs = ["Tất cả", "Cổ tích", "Hiện đại", "Thơ"];

const KidsBookPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Tất cả");
    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // ← THÊM STATE TRANG HIỆN TẠI
    const [storiesPerPage] = useState(9); // ← SỐ TRUYỆN MỖI TRANG 
    
    const audioRef = useRef(null);
    const storyHoverAudioRef = useRef(null);
    const storyClickAudioRef = useRef(null);
    const tabClickAudioRef = useRef(null);

    // Hàm lọc truyện theo tab
    const getFilteredStories = () => {
        if (activeTab === "Tất cả") {
            return storyData;
        }
        return storyData.filter(story => story.category === activeTab);
    };

    // Logic phân trang
    const filteredStories = getFilteredStories();
    const totalPages = Math.ceil(filteredStories.length / storiesPerPage);
    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

    // Hàm chuyển trang bằng nút
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            playSFX(tabClickAudioRef);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            playSFX(tabClickAudioRef);
        }
    };

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []); 

    const enableAudioPlayback = () => {
        if (!isAudioEnabled && audioRef.current) {
            audioRef.current.volume = 0.4; 
            audioRef.current.play().then(() => {
                setIsAudioEnabled(true); 
                console.log("🎶 Nhạc nền đã được kích hoạt thành công.");
            }).catch(error => {
                console.error("❌ Lỗi phát audio:", error);
            });
        }
    };

    const playSFX = (ref) => {
        if (ref.current) {
            ref.current.currentTime = 0;
            ref.current.play();
        }
    };

    const handleStoryHover = () => {
        playSFX(storyHoverAudioRef);
    };

    // QUAN TRỌNG: Sửa phần xử lý PDF
    const handleStoryItemClick = (story) => {
        console.log('📖 Story clicked:', story.title);
        console.log('📄 Page array:', story.page);
        console.log('📄 PDF URL:', story.pdfUrl);
        
        // KIỂM TRA CẢ PAGE ARRAY VÀ PDF URL
        if (!story.page && !story.pdfUrl) {
            console.error('❌ No content provided for this story');
            alert('Truyện này chưa có nội dung');
            return;
        }

        // Thêm class animation trước khi navigate
        document.body.classList.add('page-transition');
        
        // Phát SFX khi click
        playSFX(storyClickAudioRef);
        
        // Delay một chút để CSS transition hoạt động
        setTimeout(() => {
            navigate('/story', { 
                state: { 
                    storyData: story
                } 
            });
        }, 300);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setCurrentPage(1); // ← RESET VỀ TRANG 1 KHI ĐỔI TAB
        playSFX(tabClickAudioRef);
    };

    return (
        <div className='kbp-page'>
            <audio ref={audioRef} src={bg_music} loop />
            <audio ref={storyHoverAudioRef} src={sfxHover} preload="auto" /> 
            <audio ref={storyClickAudioRef} src={sfxStoryClick} preload="auto" />
            <audio ref={tabClickAudioRef} src={sfxTabClick} preload="auto" />

            <Header />

            <div 
                className="kids-page-container"
                onClick={enableAudioPlayback}
            >
                <div className="book-bg-wrapper">
                    <img src={bookBackground} alt="Book Background" className="book-bg" />
                </div>
            
                {/* NÚT CHUYỂN TRANG TRÁI - THÊM onClick VÀ disabled */}
                <button 
                    className="page-nav-absolute left-btn-absolute"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft /> 
                </button>
                
                {/* NÚT CHUYỂN TRANG PHẢI - THÊM onClick VÀ disabled */}
                <button 
                    className="page-nav-absolute right-btn-absolute"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <FaChevronRight />
                </button>

                <div className="book-content-frame">
                    <div className="book-search-absolute">
                        <input type="text" placeholder="Tìm kiếm..." />
                        <FaSearch className="search-icon-absolute" />
                    </div>

                    <div className="tabs-container">
                        {Tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* <div className="stories-grid">
                        {storyData.map((story) => (
                            <div 
                                key={story.id} 
                                className="story-item"
                                onMouseEnter={handleStoryHover} 
                                onClick={() => handleStoryItemClick(story)}
                            >
                                <img src={story.image} alt={story.title} className="story-image" />
                            </div>
                        ))}
                    </div> */}
                    <div className="stories-grid">
                        {currentStories.map((story) => ( // ← DÙNG currentStories THAY VÌ filteredStories
                            <div 
                                key={story.id} 
                                className="story-item"
                                onMouseEnter={handleStoryHover} 
                                onClick={() => handleStoryItemClick(story)}
                            >
                                <img src={story.image} alt={story.title} className="story-image" />
                                <div className="story-title">{story.title}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default KidsBookPage;