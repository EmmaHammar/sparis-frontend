import React from 'react'
import styles from './AddSavingGoal.module.scss'

export default function AddSavingGoal() {
    return (
        <div className={styles.wrapper} id="addSavingGoalContainer">
            {/* <i>AddSavingGoal</i> */}
            <button id="addSavingGoalBtn">Lägg till sparmål</button>
        </div>
    )
}
