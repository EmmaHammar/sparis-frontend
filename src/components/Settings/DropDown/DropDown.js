import { useState } from 'react'
import styles from './DropDown.module.scss'
import logo from '../../../images/settings.svg'

export default function DropDown({ show, update, children }) {

    const callBack = () => {

        update(!show)
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.icon}>
                <img src={logo} className={styles.App} alt="logo" onClick={callBack} />
            </div>

            {show ? 
                <div className={styles.content}>
                    <div className={styles.options}>
                        {children}
                    </div>
                </div>
            :""}

        </div>
    )
}




