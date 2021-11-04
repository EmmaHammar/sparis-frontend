import React from 'react'
import styles from './NoSavingGoal.module.scss'

export default function NoSavingGoal() {
    return (
        <div className={styles.wrapper} id="noSavingGoalContainer">
            <i>NoSavingGoal</i>
            <h3>Du har inga sparmål.</h3>
            <p>Visa tom bild/kamera</p>
            <p>Pris: ? kr</p>
        </div>
    )
}
