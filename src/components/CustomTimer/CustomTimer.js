import React, { useState } from 'react';
import './CustomTimer.css';

const CustomTimer = ({ setSelectedTime }) => {
    const [customTime, setCustomTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const time = parseInt(customTime, 10);
        if (!isNaN(time) && time > 0) {
            setSelectedTime(time);
        }
    };

    return (
        <div className="custom-timer">
            <h2>Or Enter Custom Time</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={customTime}
                    onChange={(e) => setCustomTime(e.target.value)}
                    placeholder="Minutes"
                    min="1"
                />
                <button type="submit">Set Timer</button>
            </form>
        </div>
    );
};

export default CustomTimer;
