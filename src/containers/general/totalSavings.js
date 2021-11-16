import React from 'react'

import { ShowTotalSavings, ChangeTotalSavings} from '../../components/TotalSavings'

export default function TotalSavings({balance, setBalance, showChild,isChild}) {

    return (
        <div style={{ backgroundColor: "white", padding: "20px"}} id="totalSavingsAdultsContainer">
            <ShowTotalSavings balance={balance}></ShowTotalSavings>
            {(!isChild)? 
            <ChangeTotalSavings showChild={showChild} balance={balance} setBalance={setBalance}/>: null}
        </div>
    )
}
