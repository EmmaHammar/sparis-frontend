import React, { useState } from 'react'
import NavFooterAdults from '../containers/Adults/NavFooterAdults'
import SettingsAdults from '../containers/Adults/SettingsAdults'
import TotalSavingsAdults from '../containers/Adults/TotalSavingsAdults'
import SavingGoalAdults from '../containers/Adults/SavingGoalAdults'

export default function Adults({dbAccount, dbParent, dbChildren,user,setUser}) {
console.log('accoutIdState from adult page',user.accountId);
    //NOTE expect accountId from login ok? Get from localStorage?
    const [loginAccountId, setLoginAccountId] = useState(user.accountId); 
    const [clickedChildObj, setClickedChildObj] = useState({});
    const [showChildProfile, setShowChildProfile] = useState(false);
    const [savingGoalExists, setSavingGoalExists] = useState(false);

    const handleClick = (evt) => {
        // reset savingGoalExists:
        if (savingGoalExists === true) {
            setSavingGoalExists(false);
        }
        if (savingGoalExists === false) {
            setSavingGoalExists(true);
        } 

        setShowChildProfile(true);

        //Save clickedChildInfo:
        const isChildId = (child) => {
            return child.childId == evt.target.id;
        };
        setClickedChildObj(dbChildren.children.find(isChildId));

        if (dbChildren.children.find(isChildId).goalAmount !== 0) {
            setSavingGoalExists(true);
        } else {
            setSavingGoalExists(false);
        }
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
                <SavingGoalAdults clickedChildObj={clickedChildObj} savingGoalExists={savingGoalExists}/>
                <TotalSavingsAdults clickedChildObj={clickedChildObj}/>
               </>
            : ""}
           
            <NavFooterAdults />
        </div>
    )
}
