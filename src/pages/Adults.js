import React from 'react'
import NavFooterAdults from '../containers/Adults/NavFooterAdults'
import SettingsAdults from '../containers/Adults/SettingsAdults'
import TotalSavingsAdults from '../containers/Adults/TotalSavingsAdults'
import SavingGoalAdults from '../containers/Adults/SavingGoalAdults'

export default function Adults({dbAccount, dbParent, dbChildren}) {
    console.log("children from db:", dbChildren.children);
    console.log("parents from db:", dbParent.parents);
    console.log("accounts from db:", dbAccount.accounts);

    //NOTE mockedIds: 
    let clickedAccountId = 1;
    let clickedChildId = 1;

    // map():
    console.log("map() dbAccount.accounts, and if dbAccount.accounts.accountId === clickedAccountId => dbAccount.accounts.childId -> collect all childId in an array for that accountId", dbAccount.accounts);




    return (
        <div>
            <SettingsAdults />
            <SavingGoalAdults />
            <TotalSavingsAdults balance={dbChildren.children.balance}/>
            <NavFooterAdults />
        </div>
    )
}
