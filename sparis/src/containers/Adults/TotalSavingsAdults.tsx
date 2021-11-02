import React from 'react'

import { ShowTotalSavings, ChangeTotalSavings, MinusTotalSavings, PlusTotalSavings } from '../../components/TotalSavings'

export default function TotalSavingsAdults() {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>TotalSavings</h3>
            <ShowTotalSavings></ShowTotalSavings>
            <ChangeTotalSavings></ChangeTotalSavings>
            <MinusTotalSavings></MinusTotalSavings>
            <PlusTotalSavings></PlusTotalSavings>
        </div>
    )
}
