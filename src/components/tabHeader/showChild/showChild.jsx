import {useState, useEffect} from 'react'
import styles from './showChild.module.scss'

export default function ShowChild({children, ...restProps}) {


    // const [childId, setChildId] = useState(restProps.id)

    // const [color, setColor] = useState("black")

    console.log("hejxwxwz")
   

    return (
        <div className={styles.wrapper}
        {...restProps}
        
        >

            {children}

        </div>
    )
}