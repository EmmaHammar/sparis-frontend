import React from 'react'
import styles from './Loader.module.scss'
import logo from '../../images/piggy.svg'

export default function Loader() {
    return (
        <div className={styles.wrapper}>
            <p> Sidan laddas... </p>
           <img src={logo} className={styles.App} alt="logo" />
        </div>
    )
}