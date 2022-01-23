import React from 'react'
import {toYourTimeZone} from "../helpers/utils";


export const Tickets = ({tickets, currentUser}) => {

    return <div>
        {tickets.map((ticket) => {
            return <div key={ticket.id + 'ticket'}
                        className="bg-white h-1/4 w-1/3 shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden my-5">
                <div className="w-full flex flex-col">
                    <h3 className="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">{ticket.title}</h3>
                    <div className="p-3 pt-1 cursor-default ">
                        <label className="text-md text-gray-700">Description</label>
                        <div className="text-sm text-gray-600">{ticket.description}</div>
                    </div>
                    <div className="p-3 pt-1 cursor-default ">
                        <label className="text-md text-gray-700">User</label>
                        <div className="text-sm text-gray-600">{ticket.username}</div>
                    </div>

                    <div className="p-3 pt-1 cursor-default ">
                        <label className="text-md text-gray-700">Date</label>
                        <div className="text-sm text-gray-600">{ticket.due_date}</div>
                    </div>


                    <div className="p-3 pt-1 cursor-default ">
                        <label className="text-md text-gray-700">Created at</label>
                        <div className="text-sm text-gray-600">{toYourTimeZone(ticket.created_at, currentUser.time_zone)}</div>
                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">edit
                    </button>
                </div>
            </div>
        })}
    </div>

}