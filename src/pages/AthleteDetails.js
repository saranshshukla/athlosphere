import React from 'react';
import { useParams } from 'react-router-dom';
import athletesData from '../data/athletes.json';

const AthleteDetails = () => {
  const { id } = useParams();
  const athlete = athletesData.find((a) => a.name.replace(/\s+/g, '-').toLowerCase() === id);

  if (!athlete) {
    return <div className="text-center mt-20 text-xl font-semibold">Athlete not found!</div>;
  }

  return (
    <div className="container mx-auto my-10 px-4 py-12">
      <div className="flex flex-col items-center">
        <img src={athlete.image} alt={athlete.name} className="w-48 h-48 rounded-full shadow-lg mb-4" />
        <h1 className="text-4xl font-bold text-cyan-500">{athlete.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{athlete.sport}</p>
      </div>

      <div className="mt-8 px-4 py-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <p><strong>State:</strong> {athlete.state}</p>
        <p><strong>Gender:</strong> {athlete.gender}</p>
        <p className="mt-4 text-lg"><strong>Bio:</strong></p>
        <p>{athlete.info}</p>
      </div>
    </div>
  );
};

export default AthleteDetails;