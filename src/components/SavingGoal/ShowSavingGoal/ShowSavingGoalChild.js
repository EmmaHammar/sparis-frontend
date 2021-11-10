import React from 'react'
import styles from './ShowSavingGoal.module.scss'

export default function ShowSavingGoal({child,setChild}) {

    return (
        <div className={styles.wrapper} id="showSavingGoalContainer">
             
            <h3>{child.goalTitle}</h3>
            <img src={child.goalPic} alt={child.goalTitle} id="goalPic"></img>
            <p>Pris: {child.goalAmount} kr</p>
            <button id="goalCompleteBtn">Klar</button>
        </div>

    )
}
