import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import athletesData from '../data/athletes.json'; // Import JSON file

const Athletes = () => {
    const [athletes, setAthletes] = useState([]);

    useEffect(() => {
        setAthletes(athletesData); // Load athletes data from the JSON file
    }, []);

    return (
        <div className="container mx-auto my-20">
            <h2 className="text-4xl font-bold text-center text-white mb-10">Our Athletes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {athletes.map((athlete, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <img src={athlete.image} alt={athlete.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-white">{athlete.name}</h3>
                        <p className="text-gray-400">{athlete.sport}</p>
                        <Link to={`/athletes/${athlete.name.replace(/\s+/g, '-').toLowerCase()}`}>
                            <button className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all">
                                View
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Athletes;