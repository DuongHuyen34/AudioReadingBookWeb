// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import PdfFlipBook from './PdfFlipBook'; // <-- Component lật sách PDF
// import './StoryDetailPage.css'; // <-- CSS cho trang chi tiết
// import purpleBookFrame from '../../assets/child-open.png'; // Ảnh nền sách mở (Màu vàng/cam của bạn)
// import backIcon from '../../assets/logo.png'; // Icon nút quay lại

// // Imports cho các Icon thanh công cụ dưới
// import { FaPlay, FaExpand, FaArrowLeft, FaHeart } from 'react-icons/fa';

// const StoryDetailPage = () => {
    
//     const location = useLocation();
//     const navigate = useNavigate();
    
//     // Lấy dữ liệu truyện và đường dẫn PDF
//     const storyData = location.state?.storyData;

//     // Kích thước cố định cho vùng hiển thị nội dung bên trong khung sách
//     const BOOK_CONTENT_WIDTH = 750;
//     const BOOK_CONTENT_HEIGHT = 500;

//     // --- LOGIC XỬ LÝ ĐIỀU HƯỚNG BỊ ĐIỀU KIỆN HÓA ---
//     useEffect(() => {
//         console.log('Story Data:', storyData);
//         if (storyData) {
//             console.log('PDF URL:', storyData.pdfUrl);
//             console.log('PDF URL type:', typeof storyData.pdfUrl);
//         }
//     }, [storyData]);

//     // Nếu dữ liệu vẫn chưa có, hiển thị trạng thái đang tải hoặc null
//     if (!storyData || !storyData.pdfUrl) {
//         return null; // Hoặc một spinner/loading state
//     }
    
//     // Hàm quay lại trang lưới truyện
//     const handleBack = () => {
//         navigate('/');
//     };
    
//     return (
//         <div className="story-detail-page">
            
//             {/* 1. KHUNG SÁCH NỀN */}
//             <div className="book-frame-wrapper">
//                 <img src={purpleBookFrame} alt="Khung sách mở" className="purple-book-frame" />
//             </div>

//             {/* 2. NỘI DUNG VÀ CÁC CHỨC NĂNG BÊN TRONG */}
//             <div className="story-content-area">
                
//                 {/* 3. VÙNG HIỂN THỊ TRUYỆN DẠNG LẬT SÁCH PDF */}
//                 <PdfFlipBook 
//                     pdfUrl={storyData.pdfUrl} 
//                     width={BOOK_CONTENT_WIDTH}
//                     height={BOOK_CONTENT_HEIGHT}
//                 />
                
//                 {/* Góc trên bên phải - Nút "Chọn truyện khác" */}
//                 <div className="top-right-controls">
//                     <button className="change-story-btn" onClick={handleBack}>
//                         Chọn truyện khác
//                     </button>
//                     <img src={backIcon} alt="Back" className="top-right-icon" /> 
//                 </div>

//             </div>

//             {/* 4. THANH ĐIỀU KHIỂN DƯỚI */}
//             <div className="bottom-toolbar">
//                 <div className="stats">
//                     <FaHeart className="icon-heart" /> 285975 Lượt xem | 455 Yêu thích
//                 </div>
//                 <div className="actions">
//                     <button className="action-btn hatde">
//                         <span className="hatde-count">Cách kiếm hạt dẻ</span> 
//                     </button>
//                     {/* Các nút điều khiển truyện/Audio */}
//                     <button className="action-btn"><FaArrowLeft /></button>
//                     <button className="action-btn"><FaPlay /></button>
//                     <button className="action-btn"><FaExpand /></button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StoryDetailPage;

import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageFlipBook from './ImageFlipBook';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import './StoryDetailPage.css';
import open_book from '../../assets/child-open.png';
import backIcon from '../../assets/logo.png';

import { FaPlay, FaExpand, FaArrowLeft, FaArrowRight, FaHeart } from 'react-icons/fa';
import { PiEyesFill } from "react-icons/pi";

const StoryDetailPage = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const flipBookRef = useRef(null); // THÊM useRef CHO FLIPBOOK
    const [currentPage, setCurrentPage] = useState(1); // THÊM STATE TRANG HIỆN TẠI
    const [totalPages, setTotalPages] = useState(0); // THÊM STATE TỔNG TRANG

    const storyData = location.state?.storyData;

    useEffect(() => {
        if (storyData) {
            setTotalPages(storyData.page.length);
            console.log('📖 Story data received:', storyData);
            console.log('🖼️ Page images:', storyData?.page);
            console.log('📄 PDF URL:', storyData?.pdfUrl);
        }
    }, [storyData]);

    // HÀM CẬP NHẬT TRANG KHI LẬT
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // HÀM CHUYỂN TRANG
    const handlePrevPage = () => {
        if (flipBookRef.current && currentPage > 1) {
            flipBookRef.current.pageFlip().flipPrev();
        }
    };

    const handleNextPage = () => {
        if (flipBookRef.current && currentPage < totalPages) {
            flipBookRef.current.pageFlip().flipNext();
        }
    };

    // KIỂM TRA DỮ LIỆU TỐT HƠN
    if (!storyData) {
        return (
            <div className="story-detail-page">
                <div className="error-state">
                    <div className="error-container">
                        <div className="error-icon">📚</div>
                        <h2>Không tìm thấy truyện</h2>
                        <p>Vui lòng chọn truyện từ trang chủ</p>
                        <button className="back-button" onClick={() => navigate('/')}>
                            Quay lại trang chủ
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const hasImages = storyData.page && storyData.page.length > 0;
    const hasPdf = storyData.pdfUrl;

    if (!hasImages && !hasPdf) {
        return (
            <div className="story-detail-page">
                <div className="error-state">
                    <div className="error-container">
                        <div className="error-icon">⚠️</div>
                        <h2>Truyện chưa có nội dung</h2>
                        <p>Xin lỗi, truyện này đang được cập nhật</p>
                        <button className="back-button" onClick={() => navigate('/')}>
                            Chọn truyện khác
                        </button>
                    </div>
                </div>
    
            </div>
        );
    }
    const handleBack = () => {
        navigate('/kidsbook');
    };
    
    return (
        <div className='sdp-page'>
            <Header />

            <div className="story-detail-page">
            
                {/* 1. KHUNG SÁCH NỀN */}
                <div className="sdp-book-frame-wrapper">
                    <img src={open_book} alt="Khung sách mở" className="sdp-book-frame" />
                </div>

                {/* 2. NỘI DUNG VÀ CÁC CHỨC NĂNG BÊN TRONG */}
                <div className="story-content-area">
                    
                    {/* 3. VÙNG HIỂN THỊ TRUYỆN DẠNG LẬT SÁCH ẢNH */}
                    <ImageFlipBook 
                        // Truyền mảng pages. Nếu là pdfUrl (object), nó sẽ bị bỏ qua vì component chỉ chấp nhận mảng URL ảnh.
                        ref={flipBookRef}
                        pageUrls={storyData.page} 
                        width={590}
                        height={380}
                        onPageChange={handlePageChange} // THÊM CALLBACK
                        onTotalPagesChange={setTotalPages} // THÊM CALLBACK
                    />

                </div>
                {/* Góc trên bên phải - Nút "Chọn truyện khác" */}
                <div className="sdp-top-right-controls">
                    <button className="sdp-change-story-btn" onClick={handleBack}>
                        Chọn truyện khác
                    </button>
                    <img src={backIcon} alt="Back" className="sdp-top-right-icon" onClick={handleBack} /> 
                </div>

                {/* 4. THANH ĐIỀU KHIỂN DƯỚI (Mô phỏng thanh Toolbar của Sóc Nhí) */}
                <div className="sdp-bottom-toolbar">
                    <div className="sdp-stats">
                        <PiEyesFill className="sdp-icon-eye" /> 
                        <p className='sdp-stats-text' style={{"color": "#ff6600"}}>285975 lượt xem |</p>
                        <FaHeart className="sdp-icon-heart" /> 
                        <p className='sdp-stats-text' style={{"color": "#ff0000"}}>455 yêu thích</p>
                    </div>
                    <div className="sdp-actions">

                        {/* Các nút điều khiển truyện/Audio */}
                        <button 
                            className="sdp-action-btn" 
                            title="Quay lại trang trước"
                            onClick={handlePrevPage}
                            disabled={currentPage <= 1} // TỰ ĐỘNG DISABLED
                        >
                            <FaArrowLeft />
                        </button>
                        <button 
                            className="sdp-action-btn" 
                            title="Trang sau"
                            onClick={handleNextPage}
                            disabled={currentPage >= totalPages} // TỰ ĐỘNG DISABLED
                        >
                            <FaArrowRight />
                        </button>
                        <button className="sdp-action-btn" title="Phát Audio"><FaPlay /></button>
                        <button className="sdp-action-btn" title="Toàn màn hình"><FaExpand /></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StoryDetailPage;


