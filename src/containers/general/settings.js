import {useState} from 'react'
import { DropDown, LogOut, AddUser } from '../../components/Settings'

export default function Settings() {

    const [show, setShow] = useState(false)
  
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


