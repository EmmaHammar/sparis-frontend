import React from 'react'
import Login from '../components/Login/Login'

export default function Home({dbParent,dbChildren}) {
    return (
        <div>
            <Login dbParent={dbParent} dbChildren={dbChildren}/>
        </div>
    )
}
