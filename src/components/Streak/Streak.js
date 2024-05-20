import React, { useState, useEffect } from 'react';
import './streak.css';

const Streak = () => {
    const [currentStreak, setCurrentStreak] = useState(0);
    const [highestStreak, setHighestStreak] = useState(0);

    useEffect(() => {
        const streakData = JSON.parse(localStorage.getItem('streakData')) || {
            currentStreak: 0,
            highestStreak: 0,
            lastUsed: null,
        };

        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        if (streakData.lastUsed === today) {
            // User has already used the app today
            setCurrentStreak(streakData.currentStreak);
            setHighestStreak(streakData.highestStreak);
        } else {
            // Check if the user used the app yesterday
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

            if (streakData.lastUsed === yesterday) {
                // Increment current streak
                const newCurrentStreak = streakData.currentStreak + 1;
                setCurrentStreak(newCurrentStreak);
                setHighestStreak(Math.max(newCurrentStreak, streakData.highestStreak));

                // Update localStorage
                localStorage.setItem(
                    'streakData',
                    JSON.stringify({
                        currentStreak: newCurrentStreak,
                        highestStreak: Math.max(newCurrentStreak, streakData.highestStreak),
                        lastUsed: today,
                    })
                );
            } else {
                // Reset current streak
                setCurrentStreak(1);
                setHighestStreak(streakData.highestStreak);

                // Update localStorage
                localStorage.setItem(
                    'streakData',
                    JSON.stringify({
                        currentStreak: 1,
                        highestStreak: streakData.highestStreak,
                        lastUsed: today,
                    })
                );
            }
        }
    }, []);

    return (
        <div className="streak-container">
            <h3>Current Streak: {currentStreak} days</h3>
            <h3>Highest Streak: {highestStreak} days</h3>
        </div>
    );
};

export default Streak;
