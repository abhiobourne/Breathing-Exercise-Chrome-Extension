import React, { useState, useEffect, useRef } from 'react';
import './BreathingAnimation.css';

const BreathingAnimation = ({ duration, onComplete, onStop, onPause, isPaused }) => {
    const [breathingText, setBreathingText] = useState('Inhale');
    const [startTime, setStartTime] = useState(Date.now());
    const intervalRef = useRef(null);
    const textIntervalRef = useRef(null);
    const elapsedTimeRef = useRef(0);

    useEffect(() => {
        const intervals = [
            { time: 0, text: 'Inhale' },
            { time: 5, text: 'Hold' },
            { time: 10, text: 'Exhale' },
            { time: 15, text: 'Hold' },
        ];
        let currentInterval = 0;

        const updateText = () => {
            setBreathingText(intervals[currentInterval].text);
            currentInterval = (currentInterval + 1) % intervals.length;
        };

        textIntervalRef.current = setInterval(() => {
            if (!isPaused) {
                updateText();
            }
        }, 5000); // Change every 5 seconds

        const updateElapsedTime = () => {
            if (!isPaused) {
                const elapsedTime = Date.now() - startTime + elapsedTimeRef.current;
                if (elapsedTime >= duration * 60 * 1000) {
                    clearInterval(intervalRef.current);
                    clearInterval(textIntervalRef.current);
                    onComplete();
                }
            }
        };

        intervalRef.current = setInterval(updateElapsedTime, 1000);

        // Initial call to set the first text state properly
        updateText();

        return () => {
            clearInterval(intervalRef.current);
            clearInterval(textIntervalRef.current);
        };
    }, [isPaused, duration, onComplete, startTime]);

    const handlePause = () => {
        if (!isPaused) {
            elapsedTimeRef.current += Date.now() - startTime;
        } else {
            setStartTime(Date.now());
        }
        onPause();
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        clearInterval(textIntervalRef.current);
        onStop();
    };

    return (
        <div className="animation-container">
            <div className="square">
                <div className={`circle ${isPaused ? 'paused' : ''}`}></div>
            </div>
            <div className="breathing-text">{breathingText}</div>
            <div className="controls">
                <button onClick={handlePause}>{isPaused ? 'Continue' : 'Pause'}</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
};

export default BreathingAnimation;
