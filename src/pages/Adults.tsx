import React from 'react'
import NavFooterAdults from '../containers/Adults/NavFooterAdults'
import SettingsAdults from '../containers/Adults/SettingsAdults'
import TotalSavingsAdults from '../containers/Adults/TotalSavingsAdults'
import SavingGoalAdults from '../containers/Adults/SavingGoalAdults'

export default function Adults() {
    return (
        <div>
            <SettingsAdults />
            <SavingGoalAdults />
            <TotalSavingsAdults />
            <NavFooterAdults />
        </div>
    )
}
