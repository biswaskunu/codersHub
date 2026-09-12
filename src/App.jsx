import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import LearningPathsPage from './pages/LearningPathsPage';
import SnippetsPage from './pages/SnippetsPage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/learning-paths" element={<LearningPathsPage />} />
        <Route path="/snippets" element={<SnippetsPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
