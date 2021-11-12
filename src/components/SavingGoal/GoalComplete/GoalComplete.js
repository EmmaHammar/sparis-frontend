import React from 'react'
import { useState } from 'react';
import styles from './GoalComplete.module.scss'
import Confetti from './index';

export default function GoalComplete({isFinish}) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [streamAnimation, toggleStreamAnimation] = useState(true);

  return (
    <div className={styles.wrapper}>
      <h3>GoalComplete</h3>
     {( isFinish==false)? 
           <button className={styles.celebrateBtn} onClick={() => setShowConfetti(!showConfetti)} disabled={true}>KLar</button>

     :
           <button className={styles.celebrateBtn} onClick={() => setShowConfetti(!showConfetti)} >KLar</button>

     }

      {showConfetti && (
        <div style={{ display: "flex", "justifyContent": "space-between" }}>
            
          <div style={{ width: "100%", height: "100%"}}>
             <Confetti
              options={{ count: 50, timeout: 5000 }}
              streamAnimation={streamAnimation}
            />
            <button className={styles.startBtn} onClick={() => toggleStreamAnimation(true)}>start</button>
            <button className={styles.stopBtn} onClick={() => toggleStreamAnimation(false)}>stop</button>
          </div>
        </div>
      )}
    </div>
  );
}
