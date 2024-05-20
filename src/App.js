import React, { useState } from 'react';
import Header from './components/Header/Header';
import TimerSelector from './components/TimeSelector/TimeSelector';
import CustomTimer from './components/CustomTimer/CustomTimer';
import StartButton from './components/StartButton/StartButton';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import BreathingAnimation from './components/BreathingAnimation/BreathingAnimation';
import Streak from './components/Streak/Streak';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    const [selectedTime, setSelectedTime] = useState(null);
    const [isBreathing, setIsBreathing] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const handleStart = () => {
        if (selectedTime) {
            setIsBreathing(true);
        } else {
            alert('Please select or enter a time.');
        }
    };

    const handleComplete = () => {
        setIsBreathing(false);
        alert('Breathing exercise completed!');
    };

    const handleStop = () => {
        setIsBreathing(false);
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="App">
            <Header />
            <div className="content">
                {isBreathing ? (
                    <>
                        <CountdownTimer duration={selectedTime} onComplete={handleComplete} isPaused={isPaused} />
                        <BreathingAnimation
                            duration={selectedTime}
                            onComplete={handleComplete}
                            onStop={handleStop}
                            onPause={handlePause}
                            isPaused={isPaused}
                        />
                    </>
                ) : (
                    <>
                        <Streak />
                        <TimerSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                        <CustomTimer setSelectedTime={setSelectedTime} />
                        <StartButton onStart={handleStart} />
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;

