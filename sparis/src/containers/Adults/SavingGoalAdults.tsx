import React from 'react'

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, DeleteSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index'

export default function SavingGoalAdults() {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>SavingGoals</h3>
            <NoSavingGoal></NoSavingGoal>
            <AddSavingGoal></AddSavingGoal>
            <ShowSavingGoal></ShowSavingGoal>
            <DeleteSavingGoal></DeleteSavingGoal>
            <ActivateGoalComplete></ActivateGoalComplete>
            <GoalComplete></GoalComplete>
        </div>
    )
}



