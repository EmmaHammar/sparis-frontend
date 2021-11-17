import React from 'react'
import styles from './NoSavingGoal.module.scss'

export default function NoSavingGoal() {
    return (
        <div className={styles.wrapper} id="noSavingGoalContainer">
            <h3>Du har inga sparmål.</h3>
        </div>
    )
}
