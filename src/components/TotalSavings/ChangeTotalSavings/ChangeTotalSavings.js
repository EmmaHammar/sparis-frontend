import React from 'react'
import { useState } from "react";
import styles from './ChangeTotalSavings.module.scss'

export default function ChangeTotalSavings({decreaseBtn, increaseBtn, inputAmount, setInputAmount}) {

    return (
        <div className={styles.wrapper}>
            <i>ChangeTotalSavings</i>
            <br/>
            <button className={styles.button} onClick={decreaseBtn}>-</button>

            <input className={styles.inputAmount} type="number" placeholder="ändra summa här" value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}/>

            <button className={styles.button} onClick={increaseBtn}>+</button>
        </div>
    )
}
