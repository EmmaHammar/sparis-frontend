import React from 'react'
import styles from './ShowTotalSavings.module.scss'

export default function ShowTotalSavings({balance}) {
    // console.log("balance in ShowTotalSavings:", balance);s
    return (
        <div className={styles.wrapper}>
            <i>ShowTotalSavings</i>
            <p>{balance} kr</p>
            <p>bild sparis</p>
        </div>
    )
}
