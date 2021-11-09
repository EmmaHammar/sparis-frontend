import React, { useState, useEffect } from 'react'

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, DeleteSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index'

export default function SavingGoalAdults({clickedChildObj, savingGoalExists}) {
   
    return (
        <div style={{ border: "1px solid red" }} id="savingGoalAdultsContainer">
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



