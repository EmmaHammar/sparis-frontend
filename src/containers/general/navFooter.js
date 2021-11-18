import React from 'react'
import { ProgressBtn, PocketMoneyBtn, MoreInfoBtn } from '../../components/NavFooter/index'


export default function NavFooter({noShow, balance, showChild}) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <ProgressBtn balance={balance} showChild={showChild}/>
            { noShow ? <PocketMoneyBtn></PocketMoneyBtn> : ""}
            <MoreInfoBtn/>
        </div>
    )
}


