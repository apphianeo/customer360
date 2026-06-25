import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/layout/TopBar.jsx';
import OverviewPage from './pages/OverviewPage.jsx';
import AllPoliciesPage from './pages/AllPoliciesPage.jsx';
import AllClaimsPage from './pages/AllClaimsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import PolicyDetailPage from './pages/PolicyDetailPage.jsx';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.search]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/policies" element={<AllPoliciesPage />} />
        <Route path="/claims" element={<AllClaimsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/policy/:id" element={<PolicyDetailPage />} />
      </Routes>
    </>
  );
}
