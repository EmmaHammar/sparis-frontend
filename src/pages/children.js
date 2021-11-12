import {useState, useEffect} from 'react'
import NavFooter from '../containers/general/navFooter'
import SavingGoal from '../containers/general/savingGoal'
import Settings from '../containers/general/settings'
import TotalSavings from '../containers/general/totalSavings'
import { useLocation } from "react-router-dom";

export default function Children() {

    const [user, setUser] = useState("");
    const location = useLocation();

    
    useEffect(() => {

        //Data from Db
        const dbData = location.state

        setUser(dbData.child)

    }, [])

    return (
       
        <div>
            <Settings />
            <SavingGoal  user={user} />
            <TotalSavings />
            <NavFooter />
        </div>
    )
}
