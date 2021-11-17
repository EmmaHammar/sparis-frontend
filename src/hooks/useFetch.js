import { useState, useEffect } from 'react'
import axios from "axios"

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            }).catch((err) => {
                setError(err)
                
            }).finally(() => {
                
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            })

    }, [url])

    return { data, loading, error }
}
