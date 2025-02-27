// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import './App.css';
import Breaks from './pages/Breaks';
import Sounds from './pages/Sounds';
import Account from './pages/Account';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/breaks" element={<Breaks />} />
                    <Route path="/sounds" element={<Sounds />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
