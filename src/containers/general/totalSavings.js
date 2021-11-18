import React from 'react'

import { ShowTotalSavings, ChangeTotalSavings} from '../../components/TotalSavings'
import styles from './totalSavings.module.scss';

export default function TotalSavings({balance, setBalance, showChild,isChild}) {

    return (
        <div className={styles.wrapper} id="totalSavingsAdultsContainer">

            <ShowTotalSavings balance={balance}></ShowTotalSavings>
            {(!isChild)? 
            <ChangeTotalSavings showChild={showChild} balance={balance} setBalance={setBalance}/>: null}
        </div>
    )
};