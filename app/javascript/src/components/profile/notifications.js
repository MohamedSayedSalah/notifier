import React from 'react'
import {toYourTimeZone} from "../../helpers/utils";

export const Notifications = ({user: {messages: notifications, time_zone: timezone}})=>{
    return <div className="container relative">


        <table className="text-left w-2/3 absolute left-1/4 top-14">
            <thead className="bg-black flex text-white w-full">
            <tr className="flex w-full mb-4">
                <th className="p-4 w-1/4">Notification Type</th>
                <th className="p-4 w-1/4">Trigger Time</th>
                <th className="p-4 w-1/4">Notification Description</th>
                <th className="p-4 w-1/4">Received  Notification</th>
            </tr>
            </thead>

            <tbody className="bg-white flex flex-col items-center justify-between overflow-y-scroll w-full"
                   // style={{height: '50vh'}}
            >
            {notifications.map((notification, i)=>{
                return <tr className="flex w-full mb-4" key={i + 'notifications'}>
                    <td className="p-4 w-1/4">{notification.type+'['+notification.trigger +']'}</td>
                    <td className="p-4 w-1/4">{toYourTimeZone(notification.trigger_time, timezone)}</td>
                    <td className="p-4 w-1/4">{notification.description}</td>
                    <td className="p-4 w-1/4">{notification.processed ? 'YES' : 'False'}</td>
                </tr>
            })}

            </tbody>
        </table>
    </div>
}