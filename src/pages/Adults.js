import React, { useState } from 'react'
import NavFooterAdults from '../containers/Adults/NavFooterAdults'
import SettingsAdults from '../containers/Adults/SettingsAdults'
import TotalSavingsAdults from '../containers/Adults/TotalSavingsAdults'
import SavingGoalAdults from '../containers/Adults/SavingGoalAdults'

export default function Adults({dbAccount, dbParent, dbChildren}) {

    //NOTE expect accountId from login ok? 
    const [loginAccountId, setLoginAccountId] = useState(1);

    const [clickedChildObj, setClickedChildObj] = useState({});

    const [showChildProfile, setShowChildProfile] = useState(false);


    const handleClick = (evt) => {
        // setClickedChildId(evt.target.id);
        // setClickedChildUserName(evt.target.value);
        setShowChildProfile(true);


        //Save clickedChildInfo:
        //NOTE if === => not working :( 
        const isChildId = (child) => {
            return child.childId == evt.target.id;
        };
        setClickedChildObj(dbChildren.children.find(isChildId));

        console.log("klick child");
    };
    
    return (
        <div id="adultsContainer">
            <SettingsAdults />

            {/* prints childBtns: */}
            {
                dbChildren.children.map( (child, index) => child.accountId === loginAccountId ? 
                <button id={child.childId} key={index} value={child.userName}onClick={handleClick}>{child.userName}</button>
                : "")
            }   

            {showChildProfile ? 
               <>
                <h2>{clickedChildObj.userName}</h2>
                <SavingGoalAdults clickedChildObj={clickedChildObj}/>
                <TotalSavingsAdults clickedChildObj={clickedChildObj}/>
               </>
            : ""}



           
            <NavFooterAdults />
        </div>
    )
}
