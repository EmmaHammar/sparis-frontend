import React from 'react'

import { ProgressBtn, ShowProgress, PocketMoneyBtn, AddPocketMoney, MoreInfoBtn, ShowMoreInfo } from '../../components/NavFooter/index'

export default function NavFooter() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
            <ProgressBtn></ProgressBtn>
            {/* <ShowProgress></ShowProgress> */}
            <PocketMoneyBtn></PocketMoneyBtn>
            {/* <AddPocketMoney></AddPocketMoney> */}
            <MoreInfoBtn></MoreInfoBtn>
            {/* <ShowMoreInfo></ShowMoreInfo> */}
        </div>
    )
}


