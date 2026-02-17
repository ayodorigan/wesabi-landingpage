import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import PolicyPage from './pages/PolicyPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
