import { useState, useEffect } from 'react'
import { dataApi } from '../consts/persons'
//Maybe I need to change this to future multi calls

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
                dataApi.getState().setProducts(data)
                setValues(prev => ({...prev, isLoading: false}))
            })
            .catch(err => {
                setValues(prev => ({...prev, err: `Un error a ocurrido ${err}`}))
            })
    } ,[url])

    return values
}