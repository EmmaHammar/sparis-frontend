import {useState} from 'react'
import styles from './MoreInfoBtn.module.scss'
import ShowMoreInfo from '../ShowMoreInfo/ShowMoreInfo'

export default function MoreInfoBtn() {

    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.wrapper}>
            <button className={styles.navBtn} onClick={() => setToggle(!toggle)}>Om Oss</button>


            {toggle ? <ShowMoreInfo setToggle={setToggle} /> : ""}
        </div>
    )
}
