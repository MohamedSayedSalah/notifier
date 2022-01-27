import React, {useState} from 'react'
import {
    Modal
} from '@components/rhf'
import {Tickets} from "@components/tickets";
import { BsPlusCircleFill } from "react-icons/bs";

export const Home = (props) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(null)
    const [tickets, setTickets] = useState(props.tickets)
    const [ticket, setTicket] = useState(null)

    const addTicket = (ticket) => {
        setTickets([ticket, ...tickets])
    }

    const updateTicket = (ticket) => {
        let index = tickets.findIndex((t) => t.id === ticket.id)
        tickets[index] = ticket
        setTickets([...tickets])
    }

    return <div className="mt-14">

        <div className={"absolute cursor-pointer left-5 top-10 text-white z-20"}
          onClick={()=> setOpen(!open )}
        >
            <BsPlusCircleFill size={30}/>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
            <main className="max-w-full h-full flex relative overflow-y-hidden">
                <div
                    className="h-full min-h-screen w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">

                    <div className={'w-full'}>
                        {open && <Modal title={title} open={open} setOpen={setOpen} users={props.users}
                                        submissionUrl={props.submissionUrl}
                                        addTicket={addTicket} ticket={ticket} updateTicket={updateTicket}
                        />}
                    </div>
                    <Tickets tickets={tickets} setTickets={setTickets} currentUser={props.currentUser}
                             setOpen={setOpen} open={open} setTitle={setTitle} setTicket={setTicket}
                             updateTicket={updateTicket}
                    />

                </div>
            </main>
        </div>
    </div>
}
