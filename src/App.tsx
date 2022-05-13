import React from 'react';
import './App.css';
import LoginPage from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedinPage from './pages/LoggedinPage';
import CreateNewUser from './pages/CreateNewUser';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/loggedinpage" element={<LoggedinPage />} />
      <Route path="/createnewuser" element={<CreateNewUser />} />
      <Route path="/errorpage" element={<ErrorPage />} />
    </Routes>
    </Router>
  );
}

export default App;