import React from 'react'
import "./tickets.custom.scss"
import {toYourTimeZone} from "../helpers/utils";
import {BsCalendarEvent, BsFillPersonFill, BsClockFill} from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import {axios} from '@helpers/axios'

export const Tickets = ({tickets, currentUser, setOpen, open, setTitle, setTicket, updateTicket}) => {

    const handleState = (id)=>{
        axios.patch("/ticket/"+id+"/handle_state").then((res)=>{
            updateTicket(res.data.ticket)
        }).catch((e)=>{
            alert(e)
        }).finally(()=>{

        })
    }


    const mapState = (key) =>{
         let hash ={'opened': 'Start',
         'in_progress': 'In Progress',
          'done': 'Complete'
         }
         return hash[key]
    }

    const iconColor = (ticket)=>{
        switch (ticket.state){
            case 'opened':
                return "text-grey-400 hover:text-grey-500"
            case 'in_progress':
                return "text-yellow-400 hover:text-yellow-500"
            case 'done':
                return "text-green-400 hover:text-green-500"
        }

    }

    return <>
        {tickets.map((ticket) => {
            return <div key={ticket.id + 'ticket'}  className="w-96  rounded-lg flex-shrink-0 flex-grow ">

                <div className="flex flex-col">
                    <div className="bg-white shadow-md  rounded-3xl p-4">
                        <div className="flex-none lg:flex">
                            <div className="flex-auto ml-3 justify-evenly py-2">
                                <div className="flex flex-wrap ">
                                    <h2 className="flex-auto text-lg font-medium">{ticket.title}</h2>
                                </div>
                                <div className="text-base text-gray-800 mt-2 font-light">{ticket.description}</div>

                                <p className="mt-3"></p>

                                <div className="flex-col text-sm text-gray-500">
                                    <div className="flex-1 inline-flex items-center">
                                        <span className={"mr-2"}><BsCalendarEvent/></span>
                                        <p className="">{toYourTimeZone(ticket.created_at, currentUser.time_zone)}</p>
                                    </div>
                                </div>
                                <div className="flex-col   text-sm text-gray-500">
                                    <div className="flex-1 inline-flex items-center">
                                        <span className={"mr-2"}><FcManager/></span>
                                        <p className="">{ticket.owner}</p>
                                    </div>
                                </div>

                                <div className="flex-col   text-sm text-gray-500">
                                    <div className="flex-1 inline-flex items-center">
                                        <span className={"mr-2"}><BsFillPersonFill/></span>
                                        <p className="">{ticket.assignee}</p>
                                    </div>
                                </div>

                                <div className="flex-col   text-sm text-gray-500">
                                    <div className="flex-1 inline-flex items-center">
                                        <svg style={{marginLeft: '-3px'}} xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 mr-2 text-gray-400"
                                             fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <p className="">{ticket.due_date}</p>
                                    </div>
                                </div>

                                <div className="flex p-4 pb-2 border-t border-gray-200 "/>

                                <div className="flex space-x-3 text-sm font-medium">
                                    { ticket.assignee === currentUser.username &&   <div className="flex-auto flex space-x-3">
                                        <button
                                            disabled={ticket.state === 'done'}
                                            onClick={() => handleState(ticket.id)}
                                            className="disabled:bg-gray-300 mb-2 md:mb-0 bg-white  px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                    <span className={`${iconColor(ticket)} rounded-lg`}>
                                        <BsClockFill size={20}/>
                                    </span>
                                            <span>{mapState(ticket.state)}</span>
                                        </button>
                                    </div>}
                                    {currentUser.username === ticket.owner && <button
                                        onClick={() => {
                                            setOpen(!open)
                                            setTicket(ticket)
                                            setTitle('Edit')
                                        }}
                                        className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                        type="button" aria-label="like">Edit
                                    </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </>

}