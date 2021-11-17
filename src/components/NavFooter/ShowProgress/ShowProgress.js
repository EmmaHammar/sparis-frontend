import {useState, useEffect} from 'react'
import styles from './ShowProgress.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ShowProgress({setToggle, balance, showChild}) {

    const [percentage, setstate] = useState(0)


    console.log(balance)
    console.log(showChild.goalAmount)
    
    useEffect(() => {
        
        const calc = ( balance / showChild.goalAmount ) * 100

        console.log(calc)

        setstate(Math.round(calc))

        

    }, [balance])


    console.log(percentage)

    return (
        <div className={styles.wrapper}>
            
            <div className={styles.content}>
                
                <button onClick={() => setToggle(false)}>X</button>
                
                <i>Kvar till sparmål</i>
                <br/><br/>
                <div style={{ width: 200, height: 200}}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>

            </div>
        </div>
    )
}
