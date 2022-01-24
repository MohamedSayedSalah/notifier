import React, {useState} from 'react'
import {
    Modal
} from '@components/rhf'
import {Tickets} from "@components/tickets";


export const Home = (props) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(null)
    const [tickets, setTickets] = useState(props.tickets)
    const [ticket, setTicket] = useState(null)

    const addTicket = (ticket)=>{
        setTickets([ticket, ...tickets])
    }

    const updateTicket = (ticket)=>{
        let index = tickets.findIndex((t)=> t.id === ticket.id )
        tickets[index] = ticket
        setTickets([...tickets])
    }
    return <div className={'relative min-h-screen overflow-auto bg-gray-100'}>
        <button
            className="px-4 absolute left-1/4 top-14  bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
            onClick={()=>{
                setTitle('Add')
                setTicket(null)
                setOpen(!open)
            }}>add Ticket
        </button>
        <div className={"absolute top-1/4  h-full w-full left-1/3 "}>
            <div className={'w-full'}>
                {open && <Modal title={title} open={open} setOpen={setOpen} users={props.users} submissionUrl={props.submissionUrl}
                                addTicket={addTicket} ticket={ticket} updateTicket={updateTicket}
                />}
            </div>
            <Tickets tickets={tickets} setTickets={setTickets}  currentUser={props.currentUser}
               setOpen={setOpen} open={open} setTitle={setTitle} setTicket={setTicket}
            />
        </div>
    </div>
}
