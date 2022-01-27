import React from 'react'


export const Table = ({headers, rows}) => {
    return <section className="container mx-auto  font-mono">
        <div className="w-full   rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        {headers.map((h) => <th className="px-4 py-3">{h}</th>)}
                    </tr>
                    </thead>
                    <tbody className="bg-white">

                    {rows.map((row) => {
                        return <tr className="text-gray-700">
                            {row.map((c) => {
                                if (c.constructor.name === 'String') {
                                    return < td className="px-4 py-3 text-sm border">{c}</td>
                                } else {
                                    return <td className="px-4 py-3 text-xs border">
                                        <span
                                            className={`px-2 py-1 font-semibold leading-tight ${c? 'text-green-700 bg-green-100' :
                                                'text-red-700 bg-red-100'
                                            }  rounded-sm`}> {c ? 'Acceptable' : 'Not processed' } </span>
                                    </td>
                                }
                            })}
                        </tr>
                    })}


                    </tbody>
                </table>
            </div>
        </div>
    </section>
}