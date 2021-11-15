import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { DropDown, LogOut, AddUser } from '../../components/Settings'

export default function Settings() {

    const [show, setShow] = useState(false)
    let navigate = useNavigate();

    const update = (newState) => {
        setShow(newState)
    }

    return (
        <>
            <DropDown 
                show={show} update={update} >
                {show ? <AddUser/> : ""}
                {show ? <LogOut /> : ""}
            </DropDown>
            
        </>
    )
}


