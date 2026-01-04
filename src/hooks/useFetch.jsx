import { useState, useEffect } from 'react'

export default function useFetch(url){
    const [values, setValues] = useState({
        data: [],
        isLoading: true,
        err: ''
    })

    useEffect(() => {
        setValues(prev => ({...prev, isLoading: true, err: ''}))
        fetch(url)
            .then(response => response.json(url))
            .then(data => {
                setValues(prev => ({...prev, data: data, isLoading: false}))
            })
            .catch(err => {
                setValues(prev => ({...prev, err: `Un error a ocurrido ${err}`}))
            })
    } ,[url])

    return values
}