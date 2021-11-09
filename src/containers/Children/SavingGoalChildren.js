

import { NoSavingGoal, AddSavingGoal, ShowSavingGoalChild, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index'


export default function SavingGoalChildren({user,setUser}) {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>SavingGoals</h3>
            <NoSavingGoal></NoSavingGoal>
            <AddSavingGoal></AddSavingGoal>
            <ShowSavingGoalChild user={user} setUser={setUser}></ShowSavingGoalChild>
            <ActivateGoalComplete></ActivateGoalComplete>
            <GoalComplete></GoalComplete>
        </div>
    )
}