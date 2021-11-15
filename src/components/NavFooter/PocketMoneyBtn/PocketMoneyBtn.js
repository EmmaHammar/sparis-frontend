import React from 'react';
import { useState } from 'react';
import styles from './PocketMoneyBtn.module.scss';
import PocketMoneyPopUp from '../PocketMoneyPopUp';

export default function PocketMoneyBtn() {
    const [btnPopup, setBtnPopup] = useState(false);
    
    return (
        <div className={styles.wrapper}>
            <button className={styles.navBtn} onClick={() => setBtnPopup(true)}>Veckopeng</button>
            <PocketMoneyPopUp trigger={btnPopup} setTrigger={setBtnPopup}>                
            </PocketMoneyPopUp>
        </div>
    )
}
