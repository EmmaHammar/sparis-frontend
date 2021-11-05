import React from 'react'
import styles from './Loader.module.scss'
import logo from '../../Images/piggy.svg'

export default function Loader() {
    return (
        <div className={styles.wrapper}>
            <p> Page is Loading </p>
           <img src={logo} className={styles.App} alt="logo" />
        </div>
    )
}
