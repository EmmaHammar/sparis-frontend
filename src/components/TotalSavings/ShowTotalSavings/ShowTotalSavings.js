import React from 'react'
import styles from './ShowTotalSavings.module.scss'

export default function ShowTotalSavings({balance}) {
    // console.log("balance in ShowTotalSavings:", balance);s
    return (
        <div className={styles.wrapper}>
            <i>ShowTotalSavings</i>
            <h3 className={styles.showBalance}>{balance} kr</h3>
            <p>bild sparis</p>
        </div>
    )
}
