import React from 'react'
import { FiPlay,FiPause,FiSkipBack,FiSkipForward } from "react-icons/fi";

import styles from './Controls.module.css';

const Controls = ({isPlay = false,callBack}: {isPlay: boolean, callBack: any} ) => {
    const hanleClick = (actionName: string) => {
        if(callBack) {
            callBack(actionName);
        }
    }
    return (
        <div className={styles.playing_controls}>
            <div className={styles.controls_pre} onClick={() => hanleClick('prev')}><FiSkipBack /></div>
            {
               isPlay ? (
                <div  className={styles.controls_playpause} onClick={() => hanleClick('pause')}>
                    <FiPause />
                </div>
               ) : (
                <div  className={styles.controls_playpause} onClick={() => hanleClick('play')}>
                    <FiPlay />
                </div>
               )
            }
            <div className={styles.controls_next} onClick={() => hanleClick('next')}><FiSkipForward /></div>
        </div>
    )
}

export default React.memo(Controls)