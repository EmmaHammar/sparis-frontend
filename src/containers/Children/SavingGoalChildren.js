

import { NoSavingGoal, AddSavingGoal, ShowSavingGoalChild, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index'


export default function SavingGoalChildren({child,setChild}) {
    return (
        <div style={{ border: "1px solid red" }}>
           {child.goalAmount !== 0 ? 
            <>
                <ShowSavingGoalChild child={child} setChild={setChild}></ShowSavingGoalChild>
                <ActivateGoalComplete></ActivateGoalComplete>
                <GoalComplete></GoalComplete>
            </>
            :
            <>
                <NoSavingGoal></NoSavingGoal>
                <AddSavingGoal></AddSavingGoal>
            </>
            }
        </div>
    )
}