import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({ duration, onComplete, isPaused }) => {
    const [timeLeft, setTimeLeft] = useState(duration * 60);
    const intervalRef = useRef(null);

    useEffect(() => {
        const updateTimer = () => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(intervalRef.current);
                    onComplete();
                    return 0;
                }
                return prevTime - 1;
            });
        };

        if (!isPaused) {
            intervalRef.current = setInterval(updateTimer, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isPaused, onComplete]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="countdown-timer">
            {formatTime(timeLeft)}
        </div>
    );
};

export default CountdownTimer;
