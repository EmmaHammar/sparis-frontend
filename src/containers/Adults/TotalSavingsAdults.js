import React from 'react'

import { ShowTotalSavings, ChangeTotalSavings, MinusTotalSavings, PlusTotalSavings } from '../../components/TotalSavings'

export default function TotalSavingsAdults({balance}) {
    console.log("balance in TotalSavingsAdults", balance);
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>TotalSavings</h3>
            <ShowTotalSavings balance={balance}></ShowTotalSavings>
            <ChangeTotalSavings></ChangeTotalSavings>
            <MinusTotalSavings></MinusTotalSavings>
            <PlusTotalSavings></PlusTotalSavings>
        </div>
    )
}
