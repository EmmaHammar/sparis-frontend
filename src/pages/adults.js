import React, { useEffect, useState } from 'react'
import NavFooter from '../containers/general/navFooter'
import Settings from '../containers/general/settings'
import TotalSavingsAdults from '../containers/general/totalSavings'
import SavingGoalAdults from '../containers/general/savingGoal'
import { useLocation } from "react-router-dom";

export default function Adults() {

    //NOTE expect accountId from login ok? Get from localStorage?
    const [clickedChildObj, setClickedChildObj] = useState({});
    const [showChildProfile, setShowChildProfile] = useState(false);
    const [savingGoalExists, setSavingGoalExists] = useState(false);
    const [balance, setBalance] = useState(Number);
    const [parent, setParent] = useState("");
    const [dbChildren, setChildren] = useState([]);

    const location = useLocation();

    useEffect(() => {

        //Data from Db
        const dbData = location.state;

        setParent(dbData.parent[0])
        setChildren(dbData.children)


    }, [])

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
        setClickedChildObj(dbChildren.find(isChildId));

        //sets clickedChildObj's balance to state (needed in TotalSavingsAdults):
        setBalance(dbChildren.find(isChildId).balance);

        //set newBalance here?

        if (dbChildren.find(isChildId).goalAmount !== 0) {
            setSavingGoalExists(true);
        } else {
            setSavingGoalExists(false);
        }
    };


    return (
        <div id="adultsContainer">

             <Settings />

                {/* prints childBtns: */}
            {dbChildren.map((child, index) =>
                <button
                    id={child.childId}
                    key={index}
                    value={child.userName}
                    onClick={handleClick}
                >

                    {child.userName}

                </button>
            )}

            {showChildProfile ?
                <>
                    <h2>{clickedChildObj.userName}</h2>
                    <SavingGoalAdults clickedChildObj={clickedChildObj} savingGoalExists={savingGoalExists} />
                    <TotalSavingsAdults clickedChildObj={clickedChildObj} balance={balance} setBalance={setBalance} />
                </>
                : ""}

            <NavFooter /> 

        </div>
    )
}



