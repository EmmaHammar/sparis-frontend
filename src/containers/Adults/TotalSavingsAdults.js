import React, { useState } from 'react'

import { ShowTotalSavings, ChangeTotalSavings, MinusTotalSavings, PlusTotalSavings } from '../../components/TotalSavings'

export default function TotalSavingsAdults({clickedChildObj}) {

    const [balance, setBalance] = useState(clickedChildObj.balance);
    const [newBalance, setNewBalance] = useState(balance);


    return (
        <div style={{ border: "1px solid red" }} id="totalSavingsAdultsContainer">
            <h3>TotalSavings</h3>
            <ShowTotalSavings balance={balance}></ShowTotalSavings>
            <ChangeTotalSavings balance={balance}></ChangeTotalSavings>
            <MinusTotalSavings></MinusTotalSavings>
            <PlusTotalSavings></PlusTotalSavings>
        </div>
    )
}
