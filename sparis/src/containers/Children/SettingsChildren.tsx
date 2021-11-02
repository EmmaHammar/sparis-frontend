
import React from 'react'

import { DropDown, LogOut } from '../../components/Settings/'


export default function SettingsChildren() {
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>Settings</h3>
            <DropDown></DropDown>
            <LogOut></LogOut>
        </div>
    )
}