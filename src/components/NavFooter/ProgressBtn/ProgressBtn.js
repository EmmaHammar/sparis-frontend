import {useState} from 'react'
import styles from './ProgressBtn.module.scss'
import ShowProgress from '../ShowProgress/ShowProgress'

export default function ProgressBtn() {


    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.wrapper}>
            <button className={styles.navBtn} onClick={() => setToggle(!toggle)} >Progress</button>

        { toggle ? <ShowProgress setToggle={setToggle}/> : ""} 
        </div>
    )
}
