import React from 'react'
import {toYourTimeZone} from "../helpers/utils";
import {Table} from "../components/rhf";


export const Pending = (props) => {

    const rows = () => {
        return props.jobs.map((row) => {
            return [toYourTimeZone(row.run_at, props.time_zone),]
        })
    }
    return <div className="container relative my-14 overflow-hidden mb-8  w-3/4 min-h-screen overflow-scroll">
        <Table headers={['Will Run At']}
               rows={rows()}
        />
    </div>
}