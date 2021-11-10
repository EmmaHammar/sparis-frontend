
import React from 'react'
import styles from './ShowTotalSavings.module.scss'
import piggy from '../../../images/piggy-color.png'

export default function ShowTotalSavings({child}) {

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.showBalance}>{child.balance} kr</h3>
            <img src={piggy} className={styles.piggy} alt="logo" />
        </div>
    )
}
