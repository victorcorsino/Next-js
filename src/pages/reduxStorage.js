import React from 'react'
import { useSelector } from 'react-redux'

const reduxStorage = () => {

    const storage = useSelector((store) => store)

    console.log(storage)
    
    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}

export default reduxStorage
