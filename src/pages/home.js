import React from 'react'
import Login from '../components/Login/Login'
import Header from '../components/header/header'
export default function Home() {
    return (
        <div>
            <Header />

            <p style = {{marginTop: '3rem', padding: '2rem'}}> Med sparis kan du ge veckopeng till ditt barn på ett smidigt sätt. Ditt barn kan själv hålla koll på sitt sparande och sätta upp sparmål. Låt oss tillsammans skapa de bästa förutsättningarna för en skuldfri nästa generation!</p>

            <Login />
        </div>
    )
}