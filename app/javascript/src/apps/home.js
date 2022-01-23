import React, {useState} from 'react'
import {
    Modal,
    Button
} from '@components/rhf'
// const bikes = require.context('@images/bikes', true)

export const Home = (props) => {
    const [open, setOpen] = useState(false)
    console.log(props)
    return <div className={'relative min-h-screen bg-gray-100'}>
        <div className={"absolute top-1/4  h-full w-1/2 left-1/4 "}>
            <button
                className="px-4  bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                onClick={()=>setOpen(!open)}>add Ticket
            </button>
            <div className={'w-full'}>
                {open && <Modal open={open} setOpen={setOpen} users={props.users} submissionUrl={props.submissionUrl}/>}
            </div>
        </div>
    </div>
}
