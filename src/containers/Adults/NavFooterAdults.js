import React from 'react'

import { ProgressBtn, ShowProgress, PocketMoneyBtn, AddPocketMoney, MoreInfoBtn, ShowMoreInfo } from '../../components/NavFooter/index'

export default function NavFooterAdults() {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>NavFooter</h3>
            <ProgressBtn></ProgressBtn>
            <ShowProgress></ShowProgress>
            <PocketMoneyBtn></PocketMoneyBtn>
            <AddPocketMoney></AddPocketMoney>
            <MoreInfoBtn></MoreInfoBtn>
            <ShowMoreInfo></ShowMoreInfo>
        </div>
    )
}


