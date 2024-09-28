import React from 'react';
import { useParams } from 'react-router-dom';
import sportsData from '../data/sports.json';

const SportsDetails = () => {
    const { name } = useParams();
    const sport = sportsData.find(sport => sport.name.replace(/\s+/g, '-').toLowerCase() === name);

    if (!sport) {
        return <div>Sport not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">{sport.name}</h1>
            <p><strong>Founded On:</strong> {sport.foundedOn}</p>
            <p><strong>Details:</strong> {sport.details}</p>
            <img src={sport.image} alt={sport.name} className="w-48 h-48 rounded-full" />
        </div>
    );
};

export default SportsDetails;