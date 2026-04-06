import React from 'react';
import { 
  BrowserRouter, 
  HashRouter, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Project from './pages/Project';
import Info from './pages/Info';
import Sitemap from './pages/Sitemap';

/**
 * Utility to detect if the application is running in a cloud preview environment.
 */
const checkPreviewEnvironment = (): boolean => {
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];
  
  const hostname = window.location.hostname;
  const href = window.location.href;
  
  return indicators.some(indicator => 
    hostname.includes(indicator) || href.includes(indicator)
  );
};

export default function App() {
  const isPreview = checkPreviewEnvironment();
  
  // Select Router based on environment
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* Redirect logic for root path in preview environment */}
        <Route 
          path="/" 
          element={
            isPreview ? (
              <Navigate to="/sitemap" replace />
            ) : (
              <Layout>
                <Home />
              </Layout>
            )
          } 
        />

        {/* Sitemap route */}
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Main Routes wrapped in Layout */}
        <Route 
          path="/home" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        
        <Route 
          path="/project/:id" 
          element={
            <Layout>
              <Project />
            </Layout>
          } 
        />
        
        <Route 
          path="/info" 
          element={
            <Layout>
              <Info />
            </Layout>
          } 
        />

        {/* Fallback for production root if needed, though handled in "/" route */}
        {isPreview && (
          <Route 
            path="/preview-home" 
            element={
              <Layout>
                <Home />
              </Layout>
            } 
          />
        )}
      </Routes>
    </Router>
  );
}
