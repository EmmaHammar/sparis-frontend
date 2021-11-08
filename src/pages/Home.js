import React from 'react'
import Login from '../components/Login/Login'

export default function Home({dbParent,dbChildren,user,setUser}) {
    return (
        <div>
            <Login dbParent={dbParent} dbChildren={dbChildren}   user={user} setUser={setUser}/>
        </div>
    )
}