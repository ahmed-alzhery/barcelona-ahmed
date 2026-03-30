import React from 'react';
import './Statistics.css';

const Statistics = () => {
    const stats = [
        { title: 'La Liga Titles', value: 26 },
        { title: 'Copa del Rey', value: 31 },
        { title: 'UEFA Champions League', value: 5 },
        { title: 'UEFA Super Cup', value: 5 }
    ];

    return (
        <div className="statistics" id="statistics">
            <h3>Club Achievements</h3>
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <h4>{stat.value}</h4>
                        <p>{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;