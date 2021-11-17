import React, { useState} from 'react';
import styles from './AddSavingGoal.module.scss';
import {changeSavingGoalInDB} from "../../../server/server"

export default function AddSavingGoal(props) {

    const [showChild] = useState(props.showChild); 
    const [showForm, setShowForm] = useState(false);
    const [newGoalTitle, setNewGoalTitle] = useState("");
    const [newGoalAmount, setNewGoalAmount] = useState(Number);
    const [newGoalPic, setNewGoalPic] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const onClick = () => {
        setShowForm(true);
    };
   

    const onSubmit = (evt) => {
        evt.preventDefault();

        let newGoal = {...showChild};
        newGoal.goalTitle = newGoalTitle;
        newGoal.goalAmount = newGoalAmount;
        newGoal.goalPic = newGoalPic;
        //validate input
        if (newGoalTitle !== "" && newGoalAmount !== null && newGoalPic !== "") {

            //set changeSavingGoalExists() in savingGoal.js to true:
            props.changeSavingGoalExists(newGoal);

            //save newGoal to db 
            console.log("save newGoal to db:", newGoal);
            changeSavingGoalInDB( newGoal)
        } else {
            setShowErrorMsg(true);
        };
    };
  
    const onChange = (evt) => {

        if (evt.target.id === "goalTitle") {
            setNewGoalTitle(evt.target.value)
        };
        if (evt.target.id === "goalAmount") {
            setNewGoalAmount(evt.target.value)
        };
        if (evt.target.id === "goalPic") {
            setNewGoalPic(evt.target.value)
        };
    };

    return (
        <div className={styles.wrapper} id={styles.addSavingGoalContainer}>

            {showForm ? 
                <div>
                    <h3>Lägg till sparmål</h3>
                    <form id={styles.addSavingGoalForm} onSubmit={onSubmit}>
                        <input type="text" placeholder="Titel på sparmålet" value={newGoalTitle} onChange={onChange} id="goalTitle"></input>
                        <input type="number" placeholder="Priset" value={newGoalAmount} onChange={onChange} id="goalAmount"></input>
                        <input type="text" placeholder="Bildlänk" value={newGoalPic} onChange={onChange} id="goalPic"></input>
                        <button id={styles.saveGoalBtn} type="submit">Spara</button>
                    </form>
                </div>
                :      
                <button id={styles.printFormBtn} onClick={onClick}>Lägg till sparmål</button>
            }

            {showErrorMsg ? 
                <div id={styles.errorMsgAddSavingGoal}>
                    <p>Du måste fylla i alla fält för att kunna spara målet.</p>
                </div> 
            : ""}
        </div>
    )
};