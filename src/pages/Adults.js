import React, { useEffect, useState } from 'react'
import NavFooterAdults from '../containers/Adults/NavFooterAdults'
import SettingsAdults from '../containers/Adults/SettingsAdults'
import TotalSavingsAdults from '../containers/Adults/TotalSavingsAdults'
import SavingGoalAdults from '../containers/Adults/SavingGoalAdults'
import { useLocation } from "react-router-dom";

export default function Adults({dbAccount, dbParent, dbChildren, user,setUser}) {

    //NOTE expect accountId from login ok? Get from localStorage?
    const [loginAccountId, setLoginAccountId] = useState(user.accountId); 
    const [clickedChildObj, setClickedChildObj] = useState({});
    const [showChildProfile, setShowChildProfile] = useState(false);
    const [savingGoalExists, setSavingGoalExists] = useState(false);
    const [balance, setBalance] = useState(Number);
    const [parent, setParent] = useState("");
    const [children, setChildren] = useState("");

    const location = useLocation();

    useEffect(() => {

        //Data from Db
        const dbData = location.state.params;
        setParent(dbData.parent[0])
        setChildren(dbData.children)

    }, [])

    
    console.log(parent, children)


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

        //sets clickedChildObj's balance to state (needed in TotalSavingsAdults):
        setBalance(dbChildren.children.find(isChildId).balance);

        //set newBalance here?
    
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
                <TotalSavingsAdults clickedChildObj={clickedChildObj} balance={balance} setBalance={setBalance} />
               </>
            : ""}
           
            <NavFooterAdults />
        </div>
    )
}