import React from 'react'
import Login from '../components/Login/Login'

export default function Home({dbParent,dbChildren,accountIdState,setAccountIdState}) {
    return (
        <div>
            <Login dbParent={dbParent} dbChildren={dbChildren} accountIdState={accountIdState} setAccountIdState={setAccountIdState}/>
        </div>
    )
}
