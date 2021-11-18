import React from 'react';
import styles from './ShowSavingGoal.module.scss';

export default function ShowSavingGoal({ showChild }) {
    return (
        <div className={styles.wrapper} id="showSavingGoalContainer">
                <h3>{showChild.goalTitle}, {showChild.goalAmount} kr</h3>
                <img src={showChild.goalPic} alt={showChild.goalTitle} id="goalPic"></img>
        </div>
    )
};