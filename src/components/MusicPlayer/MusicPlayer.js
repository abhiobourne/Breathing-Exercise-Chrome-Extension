import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPause, faPlay, faForward, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import './MusicPlayer.css';

const songs = [
    { id: 1, title: "Empty Mind", src: "src/assets/audio/empty-mind-118973.mp3" },
    { id: 2, title: "In the room when the rain pouring", src: "src/assets/audio/in-the-room-when-the-rain-pouring-117209.mp3" },
    { id: 3, title: "Lofi rain", src: "/assets/audio/lofi-rain-198277.mp3" },
    { id: 4, title: "Lofi study", src: "/assets/audio/lofi-study-112191.mp3" }
];

function MusicPlayer() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVolumeVisible, setIsVolumeVisible] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextIndex);
        audioRef.current.load();
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    const handlePrev = () => {
        const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        setCurrentSongIndex(prevIndex);
        audioRef.current.load();
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value;
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src={songs[currentSongIndex].src} />
            <div className="music-info">
                <span>{songs[currentSongIndex].title}</span>
            </div>
            <div className="controls">
                <button onClick={handlePrev}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button onClick={handlePlayPause}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button onClick={handleNext}>
                    <FontAwesomeIcon icon={faForward} />
                </button>
                <div
                    className="volume-control"
                    onMouseEnter={() => setIsVolumeVisible(true)}
                    onMouseLeave={() => setIsVolumeVisible(false)}
                >
                    <button>
                        <FontAwesomeIcon icon={audioRef.current && audioRef.current.muted ? faVolumeMute : faVolumeUp} />
                    </button>
                    {isVolumeVisible && (
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            onChange={handleVolumeChange}
                            className="volume-slider"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
