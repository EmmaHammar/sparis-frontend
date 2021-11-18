import React from 'react'
import styles from './LogOut.module.scss'

export default function LogOut({...restProps}) {
    
    return (
        <div className={styles.wrapper}  >
            <a className={styles.logOut} href="https://sparis-frontend.herokuapp.com/">Logga ut</a>

        </div>
    )
}
