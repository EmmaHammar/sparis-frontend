
import React, { useState } from 'react';

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, DeleteSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index';

export default function SavingGoal(props) {
    const [savingGoalExists, setSavingGoalExists] = useState(props.savingGoalExists)
    const [showChild, setShowChild] = useState(props.showChild);
        const[isFinish,setIsFinish]=useState(false)


    //cb savingGoalExists true
    const changeSavingGoalExists = (newGoal) => {
        setSavingGoalExists(true);

        //add newGoal to showChild state
        let updatedShowChild = {...showChild};
        updatedShowChild = newGoal;
        setShowChild(updatedShowChild);
    }


    return (
        <div style={{ border: "1px solid red" }} id="savingGoalContainer">
            {savingGoalExists ? 
                <>
                    <ShowSavingGoal showChild={showChild}></ShowSavingGoal>
                    <DeleteSavingGoal></DeleteSavingGoal>
                    <ActivateGoalComplete showChild={showChild} isFinish={isFinish} setIsFinish={setIsFinish} ></ActivateGoalComplete>
                    <GoalComplete isFinish={isFinish} setIsFinish={setIsFinish} ></GoalComplete>
                </> : 
                <>
                    <NoSavingGoal></NoSavingGoal> 
                    <AddSavingGoal showChild={showChild} changeSavingGoalExists={changeSavingGoalExists}></AddSavingGoal> 
                </>
            }

        </div>
    )
};