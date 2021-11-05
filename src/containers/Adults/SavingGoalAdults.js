import React, { useState, useEffect } from 'react'

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, DeleteSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index'

export default function SavingGoalAdults({clickedChildObj}) {
    // console.log("dbChildren SavingGoalAdults", dbChildren.children);

    const [savingGoalExists, setSavingGoalExists] = useState(false);
    const [goalAmount, setGoalAmount] = useState(clickedChildObj.goalAmount);
 
    useEffect( () => {

        // expects that goalAmount is 0 in dbChildren if savingGoal doesn't exist
        // NOTE only works first click -> if many children -> need to fix this:
        // console.log("goalAmount", goalAmount);
        if (goalAmount !== 0) {
            setSavingGoalExists(true);
        } 
    }, [])
   
    return (
        <div style={{ border: "1px solid red" }} id="savingGoalAdultsContainer">
            <h3>SavingGoals</h3>
            {savingGoalExists ? 
                <>
                    <ShowSavingGoal clickedChildObj={clickedChildObj}></ShowSavingGoal>
                    <DeleteSavingGoal></DeleteSavingGoal>
                    <ActivateGoalComplete></ActivateGoalComplete>
                    <GoalComplete></GoalComplete>
                </> : 
                <>
                    <NoSavingGoal></NoSavingGoal> <AddSavingGoal></AddSavingGoal> 
                </>
            }
            
        </div>
    )
}



