import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [endTime, setEndTime] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            setEndTime(Date.now() + timeLeft * 1000);
            intervalRef.current = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(intervalRef.current);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleRestart = () => {
        setIsRunning(false);
        setTimeLeft(3600);
        setEndTime(null);
    };

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const formatEndTime = () => {
        if (!endTime) {
            return "--:--:--";
        }
        const date = new Date(endTime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="stopwatch-container">
            <div className="stopwatch-header">Next break in</div>
            <div className="stopwatch-timer">{formatTime(timeLeft)}</div>
            <div className="stopwatch-end-time">
                <span role="img" aria-label="bell">🔔</span> {formatEndTime()}
            </div>
            <div className="stopwatch-buttons">
                <button onClick={handleStart} disabled={isRunning}>Start</button>
                <button onClick={handlePause} disabled={!isRunning}>Pause</button>
                <button onClick={handleRestart}>Restart</button>
            </div>
        </div>
    );
};

export default Stopwatch;
