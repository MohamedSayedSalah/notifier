import React from 'react'
import {toYourTimeZone} from "../helpers/utils";


export const Pending = (props) => {
    return <div className={"bg-grey-100 h-screen relative"}>
        <div className="w-1/2 mx-auto absolute top-1/4 left-1/4">
            <div className="bg-white shadow-md rounded my-6">
                <table
                    className="text-left w-full border-collapse">
                    <thead>
                    <tr>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Run at</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.jobs.map((j, i)=>{
                        return <tr className="hover:bg-grey-lighter" key={j + i}>
                            <td className="py-4 px-6 border-b border-grey-light">{toYourTimeZone(j.run_at, props.time_zone)}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}