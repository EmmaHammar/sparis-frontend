import React , {useState} from 'react';

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, DeleteSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index';

    export default function SavingGoal({ savingGoalExists, showChild, setSavingGoalExists, setShowChild, newShowChildInfo
    ,setChangePage ,balance}) {
        const[isFinish,setIsFinish]=useState(false)

    //cb savingGoalExists true
    const changeSavingGoalExists = (newGoal) => {

        // rerender and show newGoal: 
        setSavingGoalExists(true); 

        // add newGoal to showChild state
        let updatedShowChild = {...showChild};
        updatedShowChild = newGoal;
        setShowChild(updatedShowChild); 
    };

    return (
        <div id="savingGoalContainer">
            {savingGoalExists ? 
                <>
                    <ShowSavingGoal showChild={showChild}></ShowSavingGoal>
                    
                    <ActivateGoalComplete showChild={showChild} isFinish={isFinish} setIsFinish={setIsFinish} balance={balance} ></ActivateGoalComplete>
                    <GoalComplete isFinish={isFinish} setIsFinish={setIsFinish} ></GoalComplete>
                </> : 
                <>
                    <NoSavingGoal></NoSavingGoal> 
                    <AddSavingGoal showChild={showChild} changeSavingGoalExists={changeSavingGoalExists}setChangePage={setChangePage}  ></AddSavingGoal> 
                </>
            }


        </div>
    )
};