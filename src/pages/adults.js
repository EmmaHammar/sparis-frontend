import React, { useEffect, useState } from 'react';
import NavFooter from '../containers/general/navFooter';
import Settings from '../containers/general/settings';
import TotalSavings from '../containers/general/totalSavings';
import SavingGoal from '../containers/general/savingGoal';
import { useLocation } from "react-router-dom";

export default function Adults() {

    const [showChild, setShowChild] = useState({});
    const [showChildProfile, setShowChildProfile] = useState(false)
    const [savingGoalExists, setSavingGoalExists] = useState(false);
    const [balance, setBalance] = useState(Number);
    const [parent, setParent] = useState("");
    const [dbChildren, setChildren] = useState([]);

    const location = useLocation();

    useEffect(() => {

        //Data from Db
        const dbData = location.state;

        setParent(dbData.parent[0]);
        setChildren(dbData.children);

    }, [])

    const handleClick = (evt) => {

        setShowChildProfile(true);

        //Save clickedChildInfo:
        const isChildId = (child) => {
            return child.childId == evt.target.id;
        };

        setShowChild(dbChildren.find(isChildId));

        //sets clickedChildObj's balance to state (needed in TotalSavingsAdults):
        setBalance(dbChildren.find(isChildId).balance);
        
        if (dbChildren.find(isChildId).goalAmount !== "") {
            setSavingGoalExists(true);
        } else {
            setSavingGoalExists(false);
        };
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
                    <h2>{showChild.userName}</h2>
                    <SavingGoal showChild={showChild} setShowChild={setShowChild} savingGoalExists={savingGoalExists} setSavingGoalExists={setSavingGoalExists} />
                    <TotalSavings showChild={showChild} balance={balance} setBalance={setBalance} />
                </>
                : ""}

            <NavFooter /> 

        </div>
    )
};