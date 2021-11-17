import { useState } from 'react'
import styles from './ChangeTotalSavings.module.scss'
import { changeBalanceInDB } from '../../../server/server';

export default function ChangeTotalSavings({balance, setBalance, showChild}) {

    const [inputAmount, setInputAmount] = useState(Number);
    // console.log("showChild", showChild);

    const decreaseBtn = (e) => {
        e.preventDefault();

        let changeNewBalance = {...showChild}
        let newBalance = balance - inputAmount
        changeNewBalance.balance = newBalance
        setBalance(newBalance);
        changeBalanceInDB(changeNewBalance);
    }

    //Add newBalance to DB

    const increaseBtn = (e) => {
        e.preventDefault();

        let changeNewBalance = {...showChild}
        let newBalance = balance + Number(inputAmount);
        changeNewBalance.balance = newBalance
        setBalance(newBalance);
       
       
       
        changeBalanceInDB(changeNewBalance);

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