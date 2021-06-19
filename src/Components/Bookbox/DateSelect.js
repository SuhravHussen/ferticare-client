import React from 'react';
import Select from 'react-select'
const DateSelect = () => {

    const options = [
        { value: '9am to 10am', label: '9am to 10am' },
        { value: '10am to 11am', label: '10am to 11am' },
        { value: '11am to 12pm', label: '11am to 12pm' },
        { value: '12pm to 1pm', label: '12pm to 1pm' },
        { value: '1pm to 2pm', label: '1pm to 2pm' },
        { value: '2pm to 3pm', label: '2pm to 3pm' },
        { value: '3pm to 4pm', label: '3pm to 4pm' },
        { value: '4pm to 5pm', label: '4pm to 5pm' },
        { value: '5pm to 6pm', label: '5pm to 6pm' },
        { value: '6pm to 7pm', label: '6pm to 7pm' },
        { value: '7pm to 8pm', label: '7pm to 8pm' },
        { value: '8pm to 9pm', label: '8pm to 9pm' },
        { value: '9pm to 10pm', label: '9pm to 10pm' },
      ]
    return (
        <div className="single-input">
             <Select
    options={options}

  />
        </div>
    );
};

export default DateSelect;