import React, { useEffect, useState } from 'react';
import c3 from 'c3';
import Loader from '../components/Loader';

const EventStatus = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const generateChart = () => {
        c3.generate({
            bindto: '#event_status',
            data: {
                columns: [
                    ['Created', data[0]],
                    ['Done', data[1]],
                    ['Published', data[2]]
                ],
                type: 'pie'
            },
        })
    }

    useEffect(() => {
        if (!data.length) {
            fetch('https://eventziapi.herokuapp.com/dashboard/events/status')
                .then((response) => response.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
        }
    }, [data])

    return (
        <>
            <div id='event_status' />
            {loading ? <Loader /> : generateChart()}
        </>
    )
}

export default EventStatus
