import React, {useState} from 'react'
import {
    Modal
} from '@components/rhf'
import {Tickets} from "@components/tickets";


export const Home = (props) => {
    const [open, setOpen] = useState(false)
    const [tickets, setTickets] = useState(props.tickets)

    const addTicket = (ticket)=>{
        setTickets([ticket, ...tickets])
    }
    console.log(props)
    return <div className={'relative min-h-screen overflow-auto bg-gray-100'}>
        <button
            className="px-4 absolute left-1/4 top-14  bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
            onClick={()=>setOpen(!open)}>add Ticket
        </button>
        <div className={"absolute top-1/4  h-full w-full left-1/3 "}>
            <div className={'w-full'}>
                {open && <Modal open={open} setOpen={setOpen} users={props.users} submissionUrl={props.submissionUrl}
                                addTicket={addTicket}
                />}
            </div>
            <Tickets tickets={tickets} setTickets={setTickets}  currentUser={props.currentUser}/>
        </div>
    </div>
}
