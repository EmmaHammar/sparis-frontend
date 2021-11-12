import React from 'react'
import styles from './ShowSavingGoal.module.scss'

export default function ShowSavingGoal({user}) {

    return (
        <div className={styles.wrapper} id="showSavingGoalContainer">
             <i>ShowSavingGoal</i> 

            {/*Fix  error */}
            <h3>{user.goalTitle}</h3>
            <img src={user.goalPic} alt={user.goalTitle} id="goalPic"></img>
            <p>Pris: {user.goalAmount} kr</p>
            <button id="goalCompleteBtn">Klar</button>
        </div>

    )
}
