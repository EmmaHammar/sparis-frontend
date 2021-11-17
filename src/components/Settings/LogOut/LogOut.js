import React from 'react'
import styles from './LogOut.module.scss'

export default function LogOut({...restProps}) {
    
    return (
        <div className={styles.wrapper}  >
            <a className={styles.logOut} href="http://localhost:3001/">Logga ut</a>

        </div>
    )
}
