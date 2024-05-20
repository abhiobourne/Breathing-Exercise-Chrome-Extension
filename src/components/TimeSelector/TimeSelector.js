import React from 'react';
import './TimeSelector.css';

const TimerSelector = ({ selectedTime, setSelectedTime }) => {
    const times = [5, 10, 15, 20]; // predefined times in minutes

    return (
        <div className="timer-selector">
            <h2>Select a Timer</h2>
            <div className="buttons">
                {times.map((time) => (
                    <button
                        key={time}
                        className={`timer-button ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                    >
                        {time} mins
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimerSelector;
