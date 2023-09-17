import React, { useState, useRef } from 'react';
import { audios } from './data/audios';
import Controls from './components/Controls';
import './App.css'
import PlayLists from './components/PlayLists';
import Avatar from './components/Avatar';
import RangeTime from './components/RangeTime';

function App() {
    const audioRef = useRef<any>();
    const maxAudioIndex = audios.length;
    
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const [audioIndex, setAudioIndex] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const srcAudio = maxAudioIndex > 0 ? (audios[audioIndex].src) : '';
    // handle controls
    const hanleControls = (action: string) => {
        switch(action) {
            case 'play': 
                audioRef.current.play();
                setIsPlay(true);
            break;
            case 'pause':
                audioRef.current.pause();
                setIsPlay(false);
            break;
            case 'prev':
                setAudioIndex(prev => {
                    if(audioIndex === 0) {
                        return 0;
                    }else {
                        return prev - 1;
                    }
                })
            break;
            case 'next':
                setAudioIndex(next => {
                    if(audioIndex === maxAudioIndex - 1) {
                        return maxAudioIndex - 1;
                    }else {
                        return next + 1;
                    }
                })
            break;
            default: 
        }
        console.log(audioRef.current.duration)
    }
    return (
        <>
            <main>
                <div className="container">
                    <div className="layout_wrapper">
                        <div className="layout_left">
                            <h2 className="audios__list_title">
                                TOP 10 Songs
                            </h2>
                            <PlayLists callBack={(audioIndex: number) => {setAudioIndex(audioIndex);setIsPlay(true);}} isPlay={isPlay} audioIndex={audioIndex} />
                        </div>
                        <div className="layout_right">
                            <h2 className="playing_title">Now Playing</h2>
                            <div className="playing_box">
                                <div className="playing_now">
                                    <Avatar isPlay={isPlay} audioIndex={audioIndex} />
                                    <RangeTime min={duration} max={audioRef.current.ontimeupdate } />
                                    <audio ref={audioRef} onLoadedData={() => {if(isPlay) audioRef.current.play()}} src={srcAudio} />
                                </div>
                                
                                <Controls isPlay={isPlay} callBack={hanleControls} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
