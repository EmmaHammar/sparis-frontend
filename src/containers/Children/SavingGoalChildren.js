

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index'


export default function SavingGoalChildren() {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>SavingGoals</h3>
            <NoSavingGoal></NoSavingGoal>
            <AddSavingGoal></AddSavingGoal>
            <ShowSavingGoal></ShowSavingGoal>
            <ActivateGoalComplete></ActivateGoalComplete>
            <GoalComplete></GoalComplete>
        </div>
    )
}