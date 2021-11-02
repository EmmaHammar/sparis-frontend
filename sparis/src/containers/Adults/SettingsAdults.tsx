import React from 'react'

import { DropDown, LogOut, AddUser } from '../../components/Settings/'

export default function SettingsAdults() {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>Settings</h3>
            <DropDown></DropDown>
            <LogOut></LogOut>
            <AddUser></AddUser>
        </div>
    )
}


