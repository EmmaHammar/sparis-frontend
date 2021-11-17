import React, { useEffect, useState } from 'react';
import NavFooter from '../containers/general/navFooter';
import Settings from '../containers/general/settings';
import TotalSavings from '../containers/general/totalSavings';
import SavingGoal from '../containers/general/savingGoal';
import { TabHeader, ShowChild } from '../components/tabHeader'
import { useLocation } from "react-router-dom";

export default function Adults() {

    const [showChild, setShowChild] = useState({});
    const [savingGoalExists, setSavingGoalExists] = useState(false);
    const [balance, setBalance] = useState(0);
    // const [parent, setParent] = useState("");
    const [dbChildren, setChildren] = useState([]);

    const location = useLocation();


    useEffect(() => {

        //Data from Db
        const dbData = location.state;
       
        // setParent(dbData.parent[0]);
        setChildren(dbData.children);

    }, [location])

    useEffect(() => {

        updateBalance()
    
    }, [balance])


    const updateBalance = () => {
       
        const updateDb = [...dbChildren]
        const index = updateDb.findIndex( (element) => element._id === showChild._id);

        if(typeof index !== 'undifined' && index >= 0 ){

            updateDb[index].balance = balance

            setChildren(updateDb)
        }
    }


    const handleClick = (evt) => {

    
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
        }
    };



    return (
        <div id="adultsContainer">

            <Settings />

            {/* prints childBtns: */}

            <TabHeader>
                {dbChildren.map((child, index) =>
                    <ShowChild
                        id={child.childId}
                        key={index}
                        value={child.userName}
                        onClick={handleClick}
                    >

                        {child.userName}

                    </ShowChild>
                )}

            </TabHeader>


            <>
                <h2>{showChild.userName}</h2>
                <SavingGoal showChild={showChild} setShowChild={setShowChild} savingGoalExists={savingGoalExists} setSavingGoalExists={setSavingGoalExists} balance={balance} />

                <TotalSavings showChild={showChild} balance={balance} setBalance={setBalance} />
            </>


            <NavFooter />

        </div>
    )
};