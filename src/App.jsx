import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import ProjectDetail from './pages/ProjectDetail';
import CertificateDetail from './pages/CertificateDetail';
import ExperienceDetail from './pages/ExperienceDetail';
import ProjectsList from './pages/ProjectsList';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="projects" element={<ProjectsList />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="certificates" element={<CertificateDetail />} />
          <Route path="experience" element={<ExperienceDetail />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
