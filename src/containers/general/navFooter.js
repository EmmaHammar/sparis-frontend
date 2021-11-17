import React from 'react'

import { ProgressBtn, PocketMoneyBtn, MoreInfoBtn } from '../../components/NavFooter/index'
import styles from '../general/navFooter.module.scss';

export default function NavFooter({noShow, balance, showChild}) {
    return (
        <div className={styles.wrapper} style={{ display: "flex", justifyContent: "space-between"}}>
            <ProgressBtn balance={balance} showChild={showChild}/>
            { noShow ? <PocketMoneyBtn></PocketMoneyBtn> : ""}
            <MoreInfoBtn/>
        </div>
    )
}


