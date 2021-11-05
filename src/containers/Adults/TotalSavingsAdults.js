import React, { useState } from 'react'

import { ShowTotalSavings, ChangeTotalSavings, MinusTotalSavings, PlusTotalSavings } from '../../components/TotalSavings'

export default function TotalSavingsAdults({clickedChildObj}) {

    const [balance, setBalance] = useState(clickedChildObj.balance);
    const [inputAmount, setInputAmount] = useState("");

    const decreaseBtn = (e) => {
        e.preventDefault();
         setBalance(balance => balance - Number (inputAmount))
    }

    const increaseBtn = (e) => {
        e.preventDefault();
         setBalance(balance => balance + Number(inputAmount))      
     }

    return (
        <div style={{ border: "1px solid red", backgroundColor: "white", padding: "20px"}} id="totalSavingsAdultsContainer">
            <ShowTotalSavings balance={balance}></ShowTotalSavings>
            <ChangeTotalSavings balance={balance} decreaseBtn={decreaseBtn} increaseBtn={increaseBtn} inputAmount={inputAmount} setInputAmount={setInputAmount} ></ChangeTotalSavings>
            <MinusTotalSavings></MinusTotalSavings>
            <PlusTotalSavings></PlusTotalSavings>
        </div>
    )
}
