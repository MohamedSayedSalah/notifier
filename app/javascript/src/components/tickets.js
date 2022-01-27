import React from 'react'
import "./tickets.custom.scss"
import {toYourTimeZone} from "../helpers/utils";
import {BsCalendarEvent, BsFillPersonFill, BsClockFill} from "react-icons/bs";
// BsCalendarEvent

export const Tickets = ({tickets, currentUser, setOpen, open, setTitle, setTicket}) => {

    return <>
        {tickets.map((ticket) => {
            return <div key={ticket.id + 'ticket'} className="w-96 h-72 min-h-max rounded-lg flex-shrink-0 flex-grow ">

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
                                        <span className={"mr-2"}><BsFillPersonFill/></span>
                                        <p className="">{ticket.username}</p>
                                    </div>
                                </div>


                                <div className="flex-col   text-sm text-gray-500">
                                    <div className="flex-1 inline-flex items-center">
                                        <svg style={{marginLeft: '-3px'}} xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 mr-2 text-gray-400"
                                             fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <p className="">{ticket.due_date}</p>
                                    </div>
                                </div>

                                <div className="flex p-4 pb-2 border-t border-gray-200 "/>

                                <div className="flex space-x-3 text-sm font-medium">
                                    <div className="flex-auto flex space-x-3">
                                        <button
                                            className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                    <span className="text-green-400 hover:text-green-500 rounded-lg">
                                        <BsClockFill size={20}/>
                                    </span>
                                            <span>start</span>
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setOpen(!open)
                                            setTicket(ticket)
                                            setTitle('Edit')
                                        }}
                                        className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                        type="button" aria-label="like">Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </>

}