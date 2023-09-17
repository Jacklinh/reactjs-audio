import React from 'react';
import { audios } from '../../data/audios';
import styles from './PlayLists.module.css';
import { FiBarChart2 } from "react-icons/fi";

const SinglePlayList = ({id,name,image,artist,callBack, isPlay=false} : {id:number,name:string,image: string,artist: string,callBack: () => void, isPlay?: boolean }) => {
    const handleClick = () => {
        callBack()
    }
    const activeAudio = isPlay ? `${styles.audios__item} ${styles.active}` : styles.audios__item;
    return (
        <li className={activeAudio}>
            <span className={styles.audios__item_id}>
                {isPlay ? <FiBarChart2 /> : id}
            </span>
            <span className={styles.audios__item_thumb} onClick={handleClick}>
                <img src={image} height={50} width={50} alt={name}/>
            </span>
            <div className={styles.audios__item_info}>
                <span className={styles.audios__item_name} onClick={handleClick}>
                    {name}
                </span>
                <span className={styles.audios__item_artist}>{artist}</span>
            </div>
        </li>
    )
}
const PlayLists = ({callBack, isPlay=false, audioIndex}:{callBack:(index: number) => void, isPlay: boolean, audioIndex: number}) => {
    return (
        <ul className={styles.audios__list}>
            { 
                audios && audios.length > 0 ? (
                    audios.map((item,index) => <SinglePlayList key={`SinglePlayList_${item.id}`} id={item.id} name={item.name} image={item.image} artist={item.artist} callBack={() => callBack(index)} isPlay ={isPlay && audioIndex === index} />)
                ): (
                    <p>không có bài hát nào!</p>
                )
                
            }
        </ul>
    )
}

export default React.memo(PlayLists)