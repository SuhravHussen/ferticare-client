import React from 'react';
import './FertilityDetails.css'
import FertilityWorld from './FertilityWorld/FertilityWorld';
import HowWeWork from './HowWeWork/HowWeWork';

const FertilityDetails = () => {
    return (
        <div className="ferticare-world-works-container">
            <FertilityWorld/>
            <HowWeWork/>
        </div>
    );
};

export default FertilityDetails;