import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LanguageProvider } from './contexts/LanguageContext';
// import "./App.css";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import SigninPage from "./pages/SigninPage";
// import ForgotPass from "./pages/ForgotPass";
// import Verify from "./pages/Verify";
// import CreateNewPass from "./pages/CreateNewPass";

// function App() {
//   return (
//     <LanguageProvider>  
//       <Router>
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/signin" element={<SigninPage />} />
//           <Route path="/forgotpass" element={<ForgotPass />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="/createnewpass" element={<CreateNewPass />} />
//         </Routes>
//       </Router>
//     </LanguageProvider>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LanguageProvider } from './contexts/LanguageContext';
// import "./App.css";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import SigninPage from "./pages/SigninPage";
// import ForgotPass from "./pages/ForgotPass";
// import Verify from "./pages/Verify";
// import CreateNewPass from "./pages/CreateNewPass";
// import BookDetailPage from './pages/BookDetailPage';
// import BookReaderPage from './pages/BookReaderPage';

// function App() {
//   return (
//     <LanguageProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//            <Route path="/register" element={<RegisterPage />} />
//            <Route path="/signin" element={<SigninPage />} />
//            <Route path="/forgotpass" element={<ForgotPass />} />
//            <Route path="/verify" element={<Verify />} />
//            <Route path="/createnewpass" element={<CreateNewPass />} />
          //  <Route path="/bookdetail" element={<BookDetailPage />} />
          //  <Route path="/bookreader" element={<BookReaderPage />} />
//         </Routes>
//       </Router>
//     </LanguageProvider>
//   );
// }

// export default App;