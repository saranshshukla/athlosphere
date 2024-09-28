import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import HeroSection from './components/HeroSection';
import AcademiesSection from './components/AcademiesSection';
import CoachesSection from './components/CoachesSection';
import MissionSection from './components/MissionSection';

import AthleteDetails from './pages/AthleteDetails'; 
import SportsDetails from './pages/SportsDetails'; 
import Academies from './pages/Academies'; 
import Coaches from './pages/Coaches'; 
import Roadmap from './pages/Roadmap'; 
import Athletes from './pages/Athletes'; // Import Athletes page

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/athletes" element={<Athletes />} /> {/* Add this route */}
                <Route path="/athletes/:id" element={<AthleteDetails />} />
                <Route path="/sports/:name" element={<SportsDetails />} />
                <Route path="/academies" element={<Academies />} />
                <Route path="/coaches" element={<Coaches />} />
                <Route path="/roadmap" element={<Roadmap />} />
            </Routes>

            <HeroSection />
            <AcademiesSection />
            <CoachesSection />
            <MissionSection />
            
            <Footer />
        </Router>
    );
}

export default App;
