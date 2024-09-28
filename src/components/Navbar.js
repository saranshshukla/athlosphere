import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import athletesData from '../data/athletes.json'; // Athletes data with name, sport, image, etc.
import sportsData from '../data/sports.json';
import academiesData from '../data/academies.json'; // Academies data

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sportsDropdownOpen, setSportsDropdownOpen] = useState(false);
  const [academiesDropdownOpen, setAcademiesDropdownOpen] = useState(false);
  const [athletes, setAthletes] = useState([]);
  const [sports, setSports] = useState([]);
  const [academies, setAcademies] = useState([]);

  useEffect(() => {
    setAthletes(athletesData);
    setSports(sportsData);
    setAcademies(academiesData);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSportsDropdownToggle = () => {
    setSportsDropdownOpen(!sportsDropdownOpen);
  };

  const handleAcademiesDropdownToggle = () => {
    setAcademiesDropdownOpen(!academiesDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    setSportsDropdownOpen(false);
    setAcademiesDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-75 text-white py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-white"> {/* Change to Link and add text-white */}
        Athlosphere
      </Link>

      {/* Navbar Links for Desktop */}
      <ul className="hidden md:flex space-x-8 text-lg font-semibold">
        {/* Athletes Dropdown */}
        <li className="relative cursor-pointer">
          <span onClick={handleDropdownToggle} className="hover:text-cyan-500">Athletes</span>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 w-64 bg-black bg-opacity-90 rounded shadow-lg z-50">
              {athletes.slice(0, 5).map((athlete, index) => (
                <li key={index} className="hover:text-cyan-500 cursor-pointer p-2 flex flex-col items-start" onClick={closeDropdown}>
                  <Link to={`/athletes/${athlete.name.replace(/\s+/g, '-').toLowerCase()}`} className="flex items-center">
                    <img src={athlete.image} alt={athlete.name} className="w-10 h-10 rounded-full mr-3" />
                    <span>{athlete.name}</span>
                  </Link>
                  <span className="text-sm text-gray-400 ml-14">{athlete.sport}</span>
                </li>
              ))}
              {athletes.length > 5 && (
                <li className="hover:text-cyan-500 cursor-pointer p-2" onClick={closeDropdown}>
                  <Link to="/athletes" className="text-cyan-500">View more</Link>
                </li>
              )}
            </ul>
          )}
        </li>

        {/* Sports Dropdown */}
        <li className="relative cursor-pointer">
          <span onClick={handleSportsDropdownToggle} className="hover:text-cyan-500">Sports</span>
          {sportsDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-black bg-opacity-90 rounded shadow-lg z-50">
              {sports.slice(0, 5).map((sport, index) => (
                <li key={index} className="hover:text-cyan-500 cursor-pointer p-2" onClick={closeDropdown}>
                  <Link to={`/sports/${sport.name.replace(/\s+/g, '-').toLowerCase()}`}>{sport.name}</Link>
                </li>
              ))}
              {sports.length > 5 && (
                <li className="hover:text-cyan-500 cursor-pointer p-2" onClick={closeDropdown}>
                  <Link to="/sports" className="text-cyan-500">View more</Link>
                </li>
              )}
            </ul>
          )}
        </li>

        {/* Academies Dropdown */}
        <li className="relative cursor-pointer">
          <span onClick={handleAcademiesDropdownToggle} className="hover:text-cyan-500">Academies</span>
          {academiesDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-64 bg-black bg-opacity-90 rounded shadow-lg z-50">
              {academies.slice(0, 5).map((academy, index) => (
                <li key={index} className="hover:text-cyan-500 cursor-pointer p-2 flex flex-col items-start" onClick={closeDropdown}>
                  <a href={academy.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
                    {academy.name}
                  </a>
                  <small className="block text-gray-400">{academy.place}</small>
                </li>
              ))}
              {academies.length > 5 && (
                <li className="hover:text-cyan-500 cursor-pointer p-2" onClick={closeDropdown}>
                  <Link to="/academies" className="text-cyan-500">View more</Link>
                </li>
              )}
            </ul>
          )}
        </li>

        <li className="hover:text-cyan-500 cursor-pointer">Coaches</li>
        <li className="hover:text-cyan-500 cursor-pointer">Roadmap</li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} id="mobile-menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-cyan-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-center py-4 space-y-4 md:hidden">
          <li className="hover:text-cyan-500 cursor-pointer">Athletes</li>
          <li className="hover:text-cyan-500 cursor-pointer">Sports</li>
          <li className="hover:text-cyan-500 cursor-pointer">Academies</li>
          <li className="hover:text-cyan-500 cursor-pointer">Coaches</li>
          <li className="hover:text-cyan-500 cursor-pointer">Roadmap</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;