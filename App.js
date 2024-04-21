
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RepositoryList from './RepositoryList';
import RepositoryDetail from './RepositoryDetail';
import ErrorBoundary from './ErrorBoundary';
import TestErrorPage from './TestErrorPage';
import NotFound from './NotFound';
import './App.css'; // Import CSS file


function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">404 Test Page</Link>
            </li>
          </ul>
        </nav>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/repository/:name" element={<RepositoryDetail />} />
          <Route path="/test-error" element={<TestErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
