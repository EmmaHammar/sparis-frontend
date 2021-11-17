import {useState, useEffect} from 'react';

import { NoSavingGoal, AddSavingGoal, ShowSavingGoal, GoalComplete } from '../../components/SavingGoal/index';

    export default function SavingGoal({ savingGoalExists, showChild, setSavingGoalExists, setShowChild
    ,setChangePage ,balance}) {
                
        const[isFinish, setIsFinish]=useState(false)

    useEffect(() => {
        //checkGoalComplete
        if( balance >= showChild.goalAmount ){

            setIsFinish(true)
        } else {

            setIsFinish(false)
        }

    }, [balance, showChild])

    //cb savingGoalExists true
    const changeSavingGoalExists = (newGoal) => {

        // rerender and show newGoal: 
        setSavingGoalExists(true); 

        // add newGoal to showChild state
        let updatedShowChild = {...showChild};
        updatedShowChild = newGoal;
        setShowChild(updatedShowChild); 
    };

    console.log(savingGoalExists)

    return (
        <div id="savingGoalContainer">
            {savingGoalExists ? 
                <>
                    <ShowSavingGoal showChild={showChild}></ShowSavingGoal>
                    <GoalComplete isFinish={isFinish} ></GoalComplete>
                </> : 
                <>
                    <NoSavingGoal></NoSavingGoal> 
                    <AddSavingGoal showChild={showChild} changeSavingGoalExists={changeSavingGoalExists}setChangePage={setChangePage}></AddSavingGoal> 
                </>
            }
        </div>
    )
};