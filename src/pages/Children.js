import React from 'react'
import NavFooterChildren from '../containers/Children/NavFooterChildren'
import SavingGoalChildren from '../containers/Children/SavingGoalChildren'
import SettingsChildren from '../containers/Children/SettingsChildren'
import TotalSavingsChildren from '../containers/Children/TotalSavingsChildren'

export default function Children() {
    return (
        <div>
            <SettingsChildren />
            <SavingGoalChildren />
            <TotalSavingsChildren />
            <NavFooterChildren />
        </div>
    )
}
