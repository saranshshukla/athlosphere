import React from 'react';
import academiesData from '../data/academies.json';

const Academies = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Top Sports Academies</h1>
            <ul className="mt-4">
                {academiesData.map((academy, index) => (
                    <li key={index} className="border-b py-2">
                        <h2 className="text-xl">{academy.name}</h2>
                        <small className="text-gray-500">{academy.place}</small>
                        <p className="text-gray-400">{academy.briefInfo}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Academies;