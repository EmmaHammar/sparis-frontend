
import styles from './ActivateGoalComplete.module.scss'
export default function ActivateGoalComplete({ showChild,setIsFinish, balance}) {

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