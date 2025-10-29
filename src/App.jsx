

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import { LanguageProvider } from './contexts/LanguageContext';
// // import BookReaderPage from './pages/BookReaderPage';
// // import BookDetailPage from './pages/BookDetailPage';
// import './App.css';

// function App() {
//   return (
//     <LanguageProvider>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             {/* <Route path="/bookreader" element={<BookReaderPage />} />
//             <Route path="/bookdetail" element={<BookDetailPage />} /> */}
//           </Routes>
//         </div>
//       </Router>
//     </LanguageProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import "./App.css";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import SigninPage from "./pages/Auth/SigninPage";
import ForgotPass from "./pages/Auth/ForgotPass";
import Verify from "./pages/Auth/Verify";
import CreateNewPass from "./pages/Auth/CreateNewPass";
import BookDetailPage from './pages/Books/BookDetailPage';
import BookReaderPage from './pages/Books/BookReaderPage';
import HomePage from './pages/Home/HomePage';
import SupportPage from './pages/Support/SupportPage';
import AuthorsPage from './pages/Authors/AuthorsPage';
import AuthorDetailPage from './pages/Authors/AuthorDetailPage';
import RankingsPage from './pages/Rankings/RankingsPage';
import BooksPage from './pages/Books/BooksPage';
import KidsBookPage from "./pages/Books/KidsBookPage";
import StoryDetailPage from "./pages/Books/StoryDetailPage";


function App() {
  return (
    <LanguageProvider>  
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/createnewpass" element={<CreateNewPass />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/bookspage" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/bookreader/:id" element={<BookReaderPage />} />
          <Route path="/author/:id" element={<AuthorDetailPage />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/kidsbook" element={<KidsBookPage />} />
          <Route path="/story" element={<StoryDetailPage />} />

        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;