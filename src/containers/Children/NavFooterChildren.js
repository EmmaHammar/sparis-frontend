
import React from 'react'

import { ProgressBtn, ShowProgress, MoreInfoBtn, ShowMoreInfo } from '../../components/NavFooter/index'

export default function NavFooterChildren() {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>NavFooter</h3>
            <ProgressBtn></ProgressBtn>
            <ShowProgress></ShowProgress>
            <MoreInfoBtn></MoreInfoBtn>
            <ShowMoreInfo></ShowMoreInfo>
        </div>
    )
}
