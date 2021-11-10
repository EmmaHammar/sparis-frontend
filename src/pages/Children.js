import {useState, useEffect} from 'react'
import NavFooterChildren from '../containers/Children/NavFooterChildren'
import SavingGoalChildren from '../containers/Children/SavingGoalChildren'
import SettingsChildren from '../containers/Children/SettingsChildren'
import TotalSavingsChildren from '../containers/Children/TotalSavingsChildren'
import { useLocation } from "react-router-dom";

export default function Children({user,setUser}) {

    const [child, setChild] = useState("");
    const location = useLocation();

    
    useEffect(() => {

        //Data from Db
        const dbData = location.state.params;
        setChild(dbData.child)

    }, [])

    return (
       
        <div>
            <SettingsChildren />
            <SavingGoalChildren  child={child} setChild={setChild} />
            <TotalSavingsChildren child={child} setChild={setChild}/>
            <NavFooterChildren />
        </div>
    )
}
