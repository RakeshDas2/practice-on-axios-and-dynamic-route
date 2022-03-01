import React, { useEffect, useState } from 'react'
import httpInstance from '../axiosConfig/axiosConfig'

function ListShow(props) {
    const [storeData, setstoreData] = useState([])
    console.log(props);

    useEffect(() => {
        fetchData()

    }, [props.match])

    const showUrl = props.match.params.showUrl

    const showDetails = (data) => {
        props.history.push(`/${showUrl}/${data}`)
    }

    const fetchData = async () => {
        try {
            const response = await httpInstance.get(showUrl)
            console.log(response);
            setstoreData(response.data)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            {storeData.length !== 0 && storeData.map((data, index) => {
                return <p key={index} onClick={() => { showDetails(data.id) }}>{data.title}</p>
            })}
        </div>
    )
}

export default ListShow