import React from 'react'
import styles from './showChild.module.scss'

export default function ShowChild({children, ...restProps}) {

    return (
        <div className={styles.wrapper}
        {...restProps}
        >

            {children}

        </div>
    )
}