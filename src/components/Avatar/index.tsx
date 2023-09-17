import React from 'react'
import { FiSpeaker } from "react-icons/fi";
import { audios } from '../../data/audios';
import styles from './Avatar.module.css';
const Avatar = ({ isPlay = false, audioIndex = 0 }: { isPlay: boolean, audioIndex: number }) => {
    const activeClass = isPlay ? `${styles.playing_cover} ${styles.rotate}` : styles.playing_cover;
    return (
        <>
            <div className={styles.playing_cover_wrapper} >
                <div className={activeClass} style={{ backgroundImage: `url(${audios[audioIndex].image})` }}>
                </div>
                <span className={styles.playing_cover_disc}><FiSpeaker /></span>
            </div>
            <div className={styles.playing_info}>
                <h3 className={styles.playing_info_singname}>{audios[audioIndex].name}</h3>
                <p>{audios[audioIndex].artist}</p>
            </div>

        </>
    )
}

export default React.memo(Avatar)