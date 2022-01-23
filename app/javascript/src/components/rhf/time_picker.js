import React, {useEffect, useState} from 'react'

export const TimePicker = ({time, setTime}) => {

    const [minutes, setMinutes] = useState()
    const [hours, setHours] = useState()
    let currentTime = new Date()

    useEffect(()=>{
       let date = new Date(time)
        setMinutes(date.getMinutes())
        setHours(date.getHours())
    },[])

    useEffect(()=>{
        setTime(new Date( currentTime.getFullYear(),  currentTime.getMonth() , currentTime.getDate(),
            hours, minutes))
    },[minutes, hours])



    return <div className="mt-2 p-2 w-48 bg-white rounded ">
        <div className="flex">
            <select name="hours" style={{border: 'none'}}
                    className="w-18 bg-transparent text-lg appearance-none outline-none" value={hours}
                    onChange={(e)=>{
                        setHours(e.target.value)
                    }}

            >
                {[...Array(24)].map((i, index) => {
                    return <option key={index + 'hours'} value={index + 1}>{index + 1}</option>
                })}

            </select>
            <span className="text-xl mr-3">:</span>
            <select name="minutes" style={{border: 'none'}}
                    value={minutes}
                    onChange={(e)=>{
                        setMinutes(e.target.value)
                    }}
                    className="w-18 bg-transparent text-xl appearance-none outline-none mr-4">
                {[...Array(60)].map((i, index) => {
                    return <option key={index + 'minutes'} value={index + 1}>{index + 1}</option>
                })}
            </select>

        </div>
    </div>
}