import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import HomePage from './pages/HomePage';
import BGMIPage from './pages/BGMIPage';

function App() {
  // Initialize Lenis smooth scroll + GSAP ScrollTrigger sync
  useSmoothScroll();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bgmi" element={<BGMIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
