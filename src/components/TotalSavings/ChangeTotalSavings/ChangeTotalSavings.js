import { useState } from 'react'
import styles from './ChangeTotalSavings.module.scss'

export default function ChangeTotalSavings({balance, setBalance}) {

    const [inputAmount, setInputAmount] = useState(Number);

    const decreaseBtn = (e) => {
        e.preventDefault();

        let newBalance = balance - inputAmount;
        console.log("newBalance", newBalance);
        setBalance(newBalance);
    }

    //Add newBalance to DB

    const increaseBtn = (e) => {
        e.preventDefault();

        let newBalance = balance + Number(inputAmount);
        console.log("newBalance", newBalance);
        setBalance(newBalance);

    }

    //Add newBalance to DB
        
    return (
        <div className={styles.wrapper}>
            <br/>
            <button className={styles.button} onClick={decreaseBtn}>-</button>

            <input className={styles.inputAmount} type="number" placeholder="ändra summa här" value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}/>

            <button className={styles.button} onClick={increaseBtn}>+</button>
        </div>
    )
}