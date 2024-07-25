import React from 'react'
import styles from './Display.module.css';
export default function Display({data}) {
  return (
    <div>
        <input type="text" className={styles.display} value={data} ></input>
    </div>
  )
}
