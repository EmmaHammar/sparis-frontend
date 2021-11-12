import React from 'react'

import { ShowTotalSavings, ChangeTotalSavings} from '../../components/TotalSavings'

export default function TotalSavings({balance, setBalance}) {

    return (
        <div style={{ border: "1px solid red", backgroundColor: "white", padding: "20px"}} id="totalSavingsAdultsContainer">
            <ShowTotalSavings balance={balance}></ShowTotalSavings>
            <ChangeTotalSavings balance={balance} setBalance={setBalance}/>
        </div>
    )
}
