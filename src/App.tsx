import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import Header from './components/Header';
import AuthModal from './components/AuthModal';
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            <AuthModal />
          </div>
        </ModalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
