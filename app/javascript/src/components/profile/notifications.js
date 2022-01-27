import React from 'react'
import {toYourTimeZone} from "../../helpers/utils";
import {Table} from "../rhf";

export const Notifications = ({user}) => {

    const map = (key)=>{
        let hash =
            {new_ticket: 'New Ticket',
            updated_ticket: 'Updated Ticket',
                ticket_in_progress: 'Ticket In Progress',
                ticket_done: 'Ticket done'
            }
        return hash[key]
    }



    const rows = () => {
       return user.messages.map((row) => {
            return [map(row.trigger),
                toYourTimeZone(row.trigger_time, user.time_zone),
                row.processed
            ]
        })
    }
    return <div className="container relative my-14 overflow-hidden mb-8  w-3/4 min-h-screen overflow-scroll">

        <Table headers={['Notification Type',
            'Trigger Time',
            'Processed'
        ]}
               rows={rows()}
        />
    </div>
}