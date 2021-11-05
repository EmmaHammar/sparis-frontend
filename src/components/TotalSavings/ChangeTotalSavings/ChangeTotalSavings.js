import React from 'react'
import { useState } from "react";
import styles from './ChangeTotalSavings.module.scss'

export default function ChangeTotalSavings({balance}) {

    const [inputAmount, setInputAmount] = useState("");
    const [newBalance, setNewBalance] = useState(balance);

    // console.log("new balance", newBalance);
    // console.log(inputAmount);

    const decreaseBtn = (e) => {
        e.preventDefault();
         setNewBalance(newBalance => newBalance - Number (inputAmount))
         console.log(newBalance);
    }

    const increaseBtn = (e) => {
        e.preventDefault();
         setNewBalance(newBalance => newBalance + Number(inputAmount))
         console.log(newBalance);
     }

    return (
        <div className={styles.wrapper}>
            <i>ChangeTotalSavings</i>
            <br/>
            <button className={styles.button} onClick={decreaseBtn}>-</button>

            <input className={styles.inputAmount} type="number" placeholder="ändra summa här" value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}/>

            <button className={styles.button} onClick={increaseBtn}>+</button>

            <h3>{newBalance}</h3>
    
        </div>
    )
}
