import React from 'react';

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, DeleteSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index';

export default function SavingGoal({showChild, savingGoalExists}) {
   
    return (
        <div style={{ border: "1px solid red" }} id="savingGoalAdultsContainer">
            {savingGoalExists ? 
                <>
                    <ShowSavingGoal showChild={showChild}></ShowSavingGoal>
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
};