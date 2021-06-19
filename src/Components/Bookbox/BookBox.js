import React from 'react';
import './Bookbox.scss'
import Inputbox from './Inputbox';
const BookBox = () => {
    return (
        <div className="top-container">
            <h1>Find fertility treatment best suited to you</h1>
            <h3>IUI . IVF . ICSI . Medication</h3>
            <Inputbox/>
            
        </div>
    );
};

export default BookBox;