
import React from 'react'

import { ShowTotalSavingsChild } from '../../components/TotalSavings'

export default function TotalSavingsChildren({child,setChild}) {
    return (
        <div style={{ border: "1px solid red" }}>
           
            <ShowTotalSavingsChild child={child} setChild={setChild}></ShowTotalSavingsChild>
        </div>
    )
}
