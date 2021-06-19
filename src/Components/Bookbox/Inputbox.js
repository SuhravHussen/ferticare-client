import { Checkbox } from '@material-ui/core';
import React from 'react';
import Checkboxes from './Checkboxes';
import DateSelect from './DateSelect';
import PhoneNumber from './PhoneNumber';

const Inputbox = () => {
    return (
        <div className="input-container">
            <h1>Start your treatment journey </h1>
            <div className="inputs">
                <div className="single-input">
                    <h4>What treatment are you looking for?</h4>
                    <Checkboxes/>
                </div>
                <DateSelect/>
                <PhoneNumber/>
            </div>
            <button>Book Consultation</button>
        </div>
    );
};

export default Inputbox;