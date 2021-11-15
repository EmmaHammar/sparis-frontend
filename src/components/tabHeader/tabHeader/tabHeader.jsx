import React from 'react'
import styles from './tabHeader.module.scss'

export default function TabHeader({children}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}