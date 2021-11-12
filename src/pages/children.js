import {useState, useEffect} from 'react';
import NavFooter from '../containers/general/navFooter';
import SavingGoal from '../containers/general/savingGoal';
import Settings from '../containers/general/settings';
import TotalSavings from '../containers/general/totalSavings';
import { useLocation } from "react-router-dom";

export default function Children() {

    const [showChild, setShowChild] = useState({});
    const [savingGoalExists, setSavingGoalExists] = useState(false);
    const location = useLocation();
    const [balance, setBalance] = useState(Number);

    useEffect(() => {
        //Data from Db
        const dbData = location.state;
        setShowChild(dbData.child);
   
       

    }, []);
    useEffect(() => {
     // reset savingGoalExists:
        if (savingGoalExists === true) {
            setSavingGoalExists(false);
        };
        if (savingGoalExists === false) {
            setSavingGoalExists(true);
        };
        //check if savingGoalExists:
        if (showChild.goalAmount !== 0) {
            setSavingGoalExists(true);
        } else {
            setSavingGoalExists(false);
        };
        //set balance state
        setBalance(showChild.balance)
          console.log(showChild.balance);
           console.log(balance);
         }, [showChild]);  
    return (
        <div>
          
            <Settings />
            <SavingGoal showChild={showChild} savingGoalExists={savingGoalExists} />
            <TotalSavings showChild={showChild} balance={balance} setBalance={setBalance} />
            <NavFooter />
        </div>
    )
};