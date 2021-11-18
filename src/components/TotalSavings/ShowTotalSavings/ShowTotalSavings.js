import React from 'react'
import styles from './ShowTotalSavings.module.scss'
import piggy from '../../../images/piggy3.png'

export default function ShowTotalSavings({balance}) {

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.showBalance}>{balance} kr</h3>
            <img src={piggy} className={styles.piggy} alt="logo" />
        </div>
    )
}
