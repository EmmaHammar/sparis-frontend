import React, { useState, useEffect } from 'react'

import { ShowTotalSavings, ChangeTotalSavings, MinusTotalSavings, PlusTotalSavings } from '../../components/TotalSavings'

export default function TotalSavingsAdults(props) {

    const [balance, setBalance] = useState(props.balance); 
    const [inputAmount, setInputAmount] = useState("");

    // const decreaseBtn = (e) => {
    //     e.preventDefault();
    //      setBalance(copyBalance => copyBalance - Number (inputAmount))
    // }

    // const increaseBtn = (e) => {
    //     e.preventDefault();
    //      setBalance(copyBalance => copyBalance + Number(inputAmount))      
    //  }

    return (
        <div style={{ border: "1px solid red", backgroundColor: "white", padding: "20px"}} id="totalSavingsAdultsContainer">
            <ShowTotalSavings balance={props.balance}></ShowTotalSavings>
            <ChangeTotalSavings balance={props.balance}/>
            {/* <ChangeTotalSavings balance={props.balance} decreaseBtn={decreaseBtn} increaseBtn={increaseBtn} inputAmount={inputAmount} setInputAmount={setInputAmount} ></ChangeTotalSavings> */}
            <MinusTotalSavings></MinusTotalSavings>
            <PlusTotalSavings></PlusTotalSavings>
        </div>
    )
}
