import React from 'react'
import styles from './ShowProgress.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ShowProgress({setToggle}) {

    const percentage = 66;
    return (
        <div className={styles.wrapper}>
            
            <div className={styles.content}>
                

           
                <button onClick={() => setToggle(false)}>X</button>
                
                <i>Kvar till sparmål</i>
                <br/><br/>
                <div style={{ width: 200, height: 200}}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>

            </div>
        </div>
    )
}
