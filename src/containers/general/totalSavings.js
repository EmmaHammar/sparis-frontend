import React from 'react'

import { ShowTotalSavings, ChangeTotalSavings} from '../../components/TotalSavings'

export default function TotalSavings({balance, setBalance, showChild}) {

    return (
        <div style={{ backgroundColor: "white", padding: "20px"}} id="totalSavingsAdultsContainer">
            <ShowTotalSavings balance={balance}></ShowTotalSavings>
            <ChangeTotalSavings showChild={showChild} balance={balance} setBalance={setBalance}/>
        </div>
    )
}
