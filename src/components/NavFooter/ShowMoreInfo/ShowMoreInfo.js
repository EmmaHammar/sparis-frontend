import React from 'react'
import styles from './ShowMoreInfo.module.scss'
import { useFetch } from '../../../hooks/useFetch'

export default function ShowMoreInfo({ setToggle }) {



    let URL = `https://api.github.com/repos/EmmaHammar/sparis-frontend/contributors`

    const { data, loading, error } = useFetch(URL)
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>

                <button onClick={() => setToggle(false)}>X</button>

                <div style={{ width: 200, height: 250, padding: '0, 0 1rem 0' }}>
                    <h3 style={{ textDecoration: 'underline' }}> Vi som står bakom sparis</h3>
                    <br />
                    {data ? data.map((child, index) =>

                        <p className={styles.text} key={index}>{child.login}</p>

                    ) : ""
                    }
                </div>

            </div>
        </div>
    )
}
