import React from 'react'
import styles from './ShowSavingGoal.module.scss'

export default function ShowSavingGoal({clickedChildObj}) {
    
    return (
        <div className={styles.wrapper} id="showSavingGoalContainer">
            <i>ShowSavingGoal</i>
            <h3>{clickedChildObj.goalTitle}</h3>
            <img src={clickedChildObj.goalPic} alt={clickedChildObj.goalTitle} id="goalPic"></img>
            <p>Pris: {clickedChildObj.goalAmount} kr</p>
            <button id="goalCompleteBtn">Klar</button>
        </div>
    )
}
