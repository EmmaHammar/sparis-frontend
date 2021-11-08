import React from 'react'
import { useState } from "react";
import styles from './ChangeTotalSavings.module.scss'

export default function ChangeTotalSavings(props) {
// export default function ChangeTotalSavings({decreaseBtn, increaseBtn, inputAmount, setInputAmount}) {

    const [balance, setBalance] = useState(props.balance); 
    const [inputAmount, setInputAmount] = useState(Number);

    const decreaseBtn = (e) => {
        e.preventDefault();

        let newBalance = balance - inputAmount;
        console.log("newBalance", newBalance);
        setBalance(newBalance);

        //to do: print balance - eller borde balance uppdateras? Borde göra kopia på balance?
    }

    const increaseBtn = (e) => {
        e.preventDefault();

        let newBalance = balance + Number(inputAmount);
        console.log("newBalance", newBalance);
        setBalance(newBalance);

        //print balance
    }
        
    return (
        <div className={styles.wrapper}>
            <br/>
            <button className={styles.button} onClick={decreaseBtn}>-</button>

            <input className={styles.inputAmount} type="number" placeholder="ändra summa här" value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}/>

            <button className={styles.button} onClick={increaseBtn}>+</button>
        </div>
    )
}