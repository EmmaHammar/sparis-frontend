import React , {useState} from 'react';

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, DeleteSavingGoal, ActivateGoalComplete, GoalComplete } from '../../components/SavingGoal/index';

export default function SavingGoal({showChild, savingGoalExists}) {
     const[isFinish,setIsFinish]=useState(false)

    return (
        <div style={{ border: "1px solid red" }} id="savingGoalAdultsContainer">
            {savingGoalExists ? 
                <>
                    <ShowSavingGoal showChild={showChild}></ShowSavingGoal>
                    <DeleteSavingGoal></DeleteSavingGoal>
                    <ActivateGoalComplete showChild={showChild} isFinish={isFinish} setIsFinish={setIsFinish} ></ActivateGoalComplete>
                    <GoalComplete isFinish={isFinish} setIsFinish={setIsFinish} ></GoalComplete>
                </> : 
                <>
                    <NoSavingGoal></NoSavingGoal> <AddSavingGoal></AddSavingGoal> 
                </>
            }

        </div>
    )
};