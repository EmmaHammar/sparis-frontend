import React from 'react'
import styles from './PocketMoneyPopUp.module.scss'

//Popup for adding Pocket Money
function PocketMoneyPopUp(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <button className={styles.popupCloseBtn} onClick={() => props.setTrigger(false)}>x</button>
                <h3>Ställ in veckopeng med en automatisk överföring varje vecka.</h3>
                <form className={styles.popUpForm}>
                   
                        <input/>
                        <label> kr</label>
                    <br/><br/>
                    <button disabled className={styles.popUpFormBtn}>Lägg till veckopeng</button>
                </form>
                { props.children }
            </div>         
        </div>
    ) : "";
}

export default PocketMoneyPopUp
