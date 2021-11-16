import {useState, useEffect} from 'react';
import NavFooter from '../containers/general/navFooter';
import SavingGoal from '../containers/general/savingGoal';
import Settings from '../containers/general/settings';
import TotalSavings from '../containers/general/totalSavings';
import { useLocation } from "react-router-dom";
export default function Children({changePage,setChangePage}) {

    const [showChild, setShowChild] = useState("");
    const [savingGoalExists, setSavingGoalExists] = useState(false);
    const location = useLocation();
    const [balance, setBalance] = useState(Number);
    const [isChild,setIschild]=useState(true);
    useEffect(() => {
        //Data from Db
        const dbData = location.state; 
         setShowChild(dbData.child);
        
    }, []);
    
   
    //set balance state
    useEffect(() => {
        if (showChild.goalAmount !== "") {
            setSavingGoalExists(true);
        } else {
            setSavingGoalExists(false);
        };
        setBalance(showChild.balance)
        console.log(showChild.balance);
        console.log(balance);
   }, [showChild]); 

 
    return (
       
        <div>
            <h3>Välkomen {showChild.userName}</h3>
            <Settings />
            <SavingGoal showChild={showChild} setShowChild={setShowChild} savingGoalExists={savingGoalExists} setSavingGoalExists={setSavingGoalExists}  balance={balance}/>
            <TotalSavings showChild={showChild} balance={balance} setBalance={setBalance} isChild={isChild}/>
            <NavFooter />
        </div>
    )
};