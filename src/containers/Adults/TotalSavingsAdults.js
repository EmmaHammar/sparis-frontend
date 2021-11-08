import React, { useState, useEffect } from 'react'

import { ShowTotalSavings, ChangeTotalSavings, MinusTotalSavings, PlusTotalSavings } from '../../components/TotalSavings'

export default function TotalSavingsAdults(props) {

    // const [clickedChildObj, setClickedChildObj] = useState(props.clickedChildObj);

    // const [balance, setBalance] = useState({balance}); //denna blir ej rätt
    const [inputAmount, setInputAmount] = useState("");

    // console.log("balance after click:", clickedChildObj.balance);

    // const decreaseBtn = (e) => {
    //     e.preventDefault();
    //      setBalance(balance => balance - Number (inputAmount))
    // }

    // const increaseBtn = (e) => {
    //     e.preventDefault();
    //      setBalance(balance => balance + Number(inputAmount))      
    //  }

    return (
        <div style={{ border: "1px solid red", backgroundColor: "white", padding: "20px"}} id="totalSavingsAdultsContainer">
            <ShowTotalSavings balance={props.clickedChildObj.balance}></ShowTotalSavings>
            {/* <ChangeTotalSavings balance={clickedChildObj.balance} decreaseBtn={decreaseBtn} increaseBtn={increaseBtn} inputAmount={inputAmount} setInputAmount={setInputAmount} ></ChangeTotalSavings> */}
            <MinusTotalSavings></MinusTotalSavings>
            <PlusTotalSavings></PlusTotalSavings>
        </div>
    )
}
