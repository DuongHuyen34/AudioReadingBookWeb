import React, { useState, useCallback, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
// Giữ lại import CSS để liên kết với file PdfFlipBook.css
import './PdfFlipBook.css'; 

// --- Component Trang Đơn (Single Page) ---
const SingleImagePage = React.forwardRef(({ imgUrl, pageNum }, ref) => {
    const isOdd = pageNum % 2 !== 0;

    return (
        <div className={`page ${isOdd ? 'odd' : 'even'}`} ref={ref}>
            <div className="page-content">
                <img 
                    src={imgUrl} 
                    alt={`Trang ${pageNum}`} 
                    className="page-image"
                    onError={(e) => {
                        // Fallback: Placeholder khi ảnh lỗi
                        e.target.src = `https://placehold.co/400x525/ede8ff/f00?text=Lỗi+Trang+${pageNum}`;
                    }}
                />
                    <div className="page-number absolute">
                        {pageNum}
                    </div>
            </div>
        </div>
    );
});


// --- Component FlipBook Chính ---
const ImageFlipBook = React.forwardRef(({ pageUrls, width = 650, height = 600, onPageChange, onTotalPagesChange }, ref) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const bookRef = useRef(null);

    // CHO PHÉP COMPONENT CHA GỌI bookRef.current.pageFlip()
    React.useImperativeHandle(ref, () => ({
        pageFlip: () => bookRef.current?.pageFlip()
    }));
    
    const numPages = pageUrls ? pageUrls.length : 0;

    useEffect(() => {
        if (numPages > 0) {
             setTotalPages(numPages);
            if (onTotalPagesChange) {
                onTotalPagesChange(numPages); // GỌI CALLBACK
            }
         } 
    }, [numPages, pageUrls, onTotalPagesChange]);

    // --- Hàm Điều khiển Sách ---
    
    const onFlip = useCallback((e) => {
        // Cập nhật trang hiện tại sau khi lật xong
        setCurrentPage(e.data);
        if (onPageChange) {
            onPageChange(e.data); // GỌI CALLBACK
        }
    }, [onPageChange]); // THÊM onPageChange vào dependency

    const nextPage = () => bookRef.current?.pageFlip().flipNext();
    const prevPage = () => bookRef.current?.pageFlip().flipPrev();
    
    // const goToPage = (pageNumber) => {
    //     const page = parseInt(pageNumber);
    //     if (bookRef.current && page >= 1 && page <= totalPages) {
    //         bookRef.current.pageFlip().turnToPage(page);
    //     }
    // };
    
    // Hàm Zoom (Giữ là placeholder vì react-pageflip không có zoom tích hợp)
    // const zoomIn = () => console.log('Zoom-in clicked');
    // const zoomOut = () => console.log('Zoom-out clicked');
    // const resetZoom = () => console.log('Reset zoom clicked');
    
    // --- Hàm render các cặp trang ---
    const renderPages = useCallback(() => {
        const pages = [];
        
        // Tạo các trang
        for (let i = 1; i <= numPages; i += 1) { 
            const url = pageUrls[i - 1];

            pages.push(
                <SingleImagePage 
                    key={i}
                    imgUrl={url} 
                    pageNum={i} 
                    numPages={numPages}
                    isCover={false} // Trang đầu và trang cuối là bìa/lưng
                />
            );
        }
        
        // Nếu số trang là chẵn, thêm một trang trống (back cover) để kết thúc sách ở trang bên trái
        // if (numPages > 0 && numPages % 2 === 0) {
        //     pages.push(
        //         <div key={numPages + 1} className="page page-final-back">
        //             <div className="page-content">
        //                 <p style={{ color: '#666' }}>Hết truyện</p>
        //             </div>
        //         </div>
        //     );
        // }

        return pages;
    }, [numPages, pageUrls]);
    
    // --- RENDER STATES ---
    if (numPages === 0) {
         return (
            <div className="pdf-viewer-content">
                <div className="pfb-flipbook-error">
                    <div className="pfb-error-icon">📚</div>
                    <div className="pfb-error-title">Chưa có nội dung truyện</div>
                    <div className="pfb-error-message">Vui lòng chọn truyện có sẵn ảnh trang (ví dụ: "Sinh nhật của Anna")</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flipbook-container">
            
            {/* 1. FLIPBOOK CONTROLS (Thanh điều khiển trên desktop) */}
            {/* <div className="flipbook-controls">
                <div className="navigation-controls">
                    <button 
                        className="control-btn" 
                        onClick={prevPage}
                        disabled={currentPage <= 1}
                        title="Trang trước"
                    >
                        {'<'}
                    </button>
                    
                    <div className="page-info">
                        <span className="current-page">{currentPage}</span>
                        <span className="page-separator">/</span>
                        <span className="total-pages">{totalPages}</span>
                    </div>
                    
                    <button 
                        className="control-btn" 
                        onClick={nextPage}
                        disabled={currentPage >= totalPages}
                        title="Trang sau"
                    >
                        {'>'}
                    </button>
                </div>

                <div className="zoom-controls">
                    <button className="control-btn" onClick={zoomOut} title="Thu nhỏ">
                        
                        {'−'}
                    </button>
                    <button className="control-btn" onClick={resetZoom} title="Kích thước mặc định">
                        
                        {'○'}
                    </button>
                    <button className="control-btn" onClick={zoomIn} title="Phóng to">
                        
                        {'+'}
                    </button>
                </div>

                <div className="page-jump">
                    <span className="jump-label">Tới trang:</span>
                    <input 
                        type="number" 
                        min="1" 
                        max={totalPages}
                        // Kiểm soát input value bằng state để tránh lỗi khi gõ
                        value={currentPage}
                        onChange={(e) => setCurrentPage(parseInt(e.target.value) || 1)}
                        onBlur={(e) => goToPage(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                goToPage(e.target.value);
                                e.target.blur();
                            }
                        }}
                        className="page-input"
                    />
                </div>
            </div> */}

            {/* 2. FLIPBOOK RENDERER */}
            <div className="flipbook-wrapper" style={{ width: `${width}px`, height: `${height}px` }}>
                <HTMLFlipBook 
                    ref={bookRef}
                    width={width / 2} // Chiều rộng của 1 trang đơn
                    height={height} 
                    size="stretch" 
                    minWidth={200}
                    maxWidth={700}
                    minHeight={300}
                    maxHeight={600}
                    maxShadowOpacity={0.5}
                    showCover={false}
                    mobileScroll={true}
                    className="flipbook"
                    onFlip={onFlip}
                >
                    {renderPages()}
                </HTMLFlipBook>
            </div>
            
            {/* 3. MOBILE CONTROLS (Thanh điều khiển dưới mobile) */}
            <div className="mobile-controls">
                <button 
                    className="mobile-btn" 
                    onClick={prevPage}
                    disabled={currentPage <= 1}
                >
                    {'<'} Trước
                </button>
                <span className="mobile-page-info">{currentPage}/{totalPages}</span>
                <button 
                    className="mobile-btn" 
                    onClick={nextPage}
                    disabled={currentPage >= totalPages}
                >
                    Sau {'>'}
                </button>
            </div>

            {/* <div className="page-indicator">
                Trang {currentPage} của {totalPages}
            </div> */}

        </div>
    );
});

export default ImageFlipBook;


