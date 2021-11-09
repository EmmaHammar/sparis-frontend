import React, { useState, useEffect } from 'react'

import { ShowTotalSavings, ChangeTotalSavings, MinusTotalSavings, PlusTotalSavings } from '../../components/TotalSavings'

export default function TotalSavingsAdults(props) {


    return (
        <div style={{ border: "1px solid red", backgroundColor: "white", padding: "20px"}} id="totalSavingsAdultsContainer">
            <ShowTotalSavings balance={props.balance}></ShowTotalSavings>
            <ChangeTotalSavings balance={props.balance}/>
            <MinusTotalSavings></MinusTotalSavings>
            <PlusTotalSavings></PlusTotalSavings>
        </div>
    )
}
