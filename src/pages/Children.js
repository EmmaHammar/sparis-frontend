import React from 'react'
import NavFooterChildren from '../containers/Children/NavFooterChildren'
import SavingGoalChildren from '../containers/Children/SavingGoalChildren'
import SettingsChildren from '../containers/Children/SettingsChildren'
import TotalSavingsChildren from '../containers/Children/TotalSavingsChildren'

export default function Children({user,setUser}) {
    return (
       
        <div>
            <SettingsChildren />
            <SavingGoalChildren  user={user} setUser={setUser} />
            <TotalSavingsChildren user={user} setUser={setUser}/>
            <NavFooterChildren />
        </div>
    )
}
