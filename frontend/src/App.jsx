import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Statistics />
        </div>
    );
};

export default App;