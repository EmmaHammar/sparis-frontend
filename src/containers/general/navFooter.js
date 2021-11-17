import React from 'react'
import { ProgressBtn, ShowProgress, PocketMoneyBtn, AddPocketMoney, MoreInfoBtn, ShowMoreInfo } from '../../components/NavFooter/index'
import styles from '../general/navFooter.module.scss';

export default function NavFooter() {
    return (
        <div className={styles.wrapper} style={{ display: "flex", justifyContent: "space-between"}}>
            <ProgressBtn></ProgressBtn>
            {/* <ShowProgress></ShowProgress> */}
            <PocketMoneyBtn></PocketMoneyBtn>
            {/* <AddPocketMoney></AddPocketMoney> */}
            <MoreInfoBtn></MoreInfoBtn>
            {/* <ShowMoreInfo></ShowMoreInfo> */}
        </div>
    )
}


