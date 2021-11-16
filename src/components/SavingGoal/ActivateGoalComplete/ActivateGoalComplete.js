import React , {useState}from 'react'
import styles from './ActivateGoalComplete.module.scss'
export default function ActivateGoalComplete({ showChild, isFinish,setIsFinish,balance}) {
    {console.log('balance from activate savingGoal',balance)}

    return (
        <div className={styles.wrapper}>
        
         {(balance)>=(showChild.goalAmount)?
         setIsFinish(true)
         :
        setIsFinish(false)
        }
   
        </div>
    )
}