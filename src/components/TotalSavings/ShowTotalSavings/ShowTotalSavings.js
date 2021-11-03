import React from 'react'

export default function ShowTotalSavings({balance}) {
    console.log("balance in ShowTotalSavings:", balance);
    return (
        <div>
            <i>ShowTotalSavings</i>
            <p>Theo har sparat: {balance} kr</p>
        </div>
    )
}
