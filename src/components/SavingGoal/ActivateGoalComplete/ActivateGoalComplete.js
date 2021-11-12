import React , {useState}from 'react'
import styles from './ActivateGoalComplete.module.scss'

export default function ActivateGoalComplete({ showChild, isFinish,setIsFinish }) {

    return (
        <div className={styles.wrapper}>
         {(showChild.goalAmount)>=(showChild.pocketMoney)?
         setIsFinish(true)
         :
        setIsFinish(false)
        }
            
        </div>
    )
}
