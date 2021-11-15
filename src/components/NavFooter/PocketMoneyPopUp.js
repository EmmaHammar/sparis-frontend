import React from 'react'
import './PocketMoneyPopUp.scss'

//Popup for adding Pocket Money
function PocketMoneyPopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="popupCloseBtn" onClick={() => props.setTrigger(false)}>Stäng</button>
                <h2>Ställ in veckopeng med en automatisk överföring varje vecka.</h2>
                <form className="popUpForm">
                <label>
                    <input />
                    kr.
                </label>
                <br/><br/>
                    <button className="popUpFormBtn">Lägg till veckopeng</button>
                </form>
                { props.children }
            </div>         
        </div>
    ) : "";
}

export default PocketMoneyPopUp
