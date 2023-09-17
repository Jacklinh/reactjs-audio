import React from 'react'
import styles from './RangeTime.module.css';
const RangeTime = ({min= 0, max}:{min: number, max: number}) => {
  return (
    <div className={styles.range_wrap}>
        <input id={styles.rangeInput} type="range" min={min} max={max} step="any" />
        <p className={styles.start_time}></p>
        <p className={styles.start_end}></p>
    </div>
  )
}

export default RangeTime