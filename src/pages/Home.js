import React, { useState } from 'react';
import Header from '../components/Header/Header';
import TimerSelector from '../components/TimeSelector/TimeSelector';
import CustomTimer from '../components/CustomTimer/CustomTimer';
import StartButton from '../components/StartButton/StartButton';
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import BreathingAnimation from '../components/BreathingAnimation/BreathingAnimation';
import Streak from '../components/Streak/Streak';
import Footer from '../components/Footer/Footer';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import './Home.css';

function Home() {
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
            <Navbar />
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
                        <Card>
                            <TimerSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                            <StartButton onStart={handleStart} />
                        </Card>
                            <Streak />
                    </>
                    
                )}

            </div>
            <Card>
                {/* <MusicPlayer /> */}
            </Card>
            <Footer />
        </div>
    );
}

export default Home;

