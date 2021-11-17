import React from 'react'

import { ProgressBtn, PocketMoneyBtn, MoreInfoBtn } from '../../components/NavFooter/index'

export default function NavFooter({noShow}) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", margin: "1rem"}}>
            <ProgressBtn></ProgressBtn>
            { noShow ? <PocketMoneyBtn></PocketMoneyBtn> : ""}
            <MoreInfoBtn></MoreInfoBtn>
        </div>
    )
}


