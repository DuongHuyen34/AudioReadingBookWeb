// 📦 src/api.js
import axios from "axios";

// 🔗 Cấu hình base URL backend
export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true, // Cho phép gửi cookie/token nếu cần
});

// ========================
// 🔐 AUTH ROUTES
// ========================
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const verifyEmail = (data) => API.post("/auth/verify-email", data);
export const forgotPassword = (data) => API.post("/auth/forgot-password", data);
export const resetPassword = (data) => API.post("/auth/reset-password", data);

// ========================
// 📚 BOOK ROUTES
// ========================

// trong api.js
export const getBooks = (params) => API.get("/books", { params });

// Lấy toàn bộ danh sách sách
export const getAllBooks = () => API.get("/books");

// Lấy chi tiết 1 cuốn sách theo ID
export const getBookById = (id) => API.get(`/books/${id}`);

// Tìm kiếm sách theo từ khóa (ví dụ: ?q=romance)
export const searchBooks = (query) => API.get(`/books/search?q=${query}`);

// Lọc sách theo thể loại (genre)
export const getBooksByGenre = (genre) => API.get(`/books/genre/${genre}`);

// 📚 API cho Authors
export const getAuthors = (params = {}) => API.get("/authors", { params });
export const getAuthorById = (id) => API.get(`/authors/${id}`);

export const getRecommendedBooks = () => API.get("/books/recommended");

export const getBookReaderData = (id) => API.get(`/books/${id}/reader`);

export const getFeaturedAuthors = () => API.get("/authors", { params: { featured: true } });
// ========================
// 📄 PDF ROUTES (tuỳ chọn sau này)
// ========================

// Gửi file để chuyển sang PDF (nếu bạn có module PDF converter)
export const convertToPDF = (data) => API.post("/pdf/convert", data);
