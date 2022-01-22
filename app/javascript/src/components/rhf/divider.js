import React from 'react'

export const Divider = ({ text }) => (
    <div className="flex items-center px-2 mt-4 mb-4 w-auto text-center">
        <hr className="float-left mr-2 ml-auto w-1/2 h-0.5 text-black bg-black" />
        {text}
        <hr className="float-right mr-auto ml-2 w-1/2 h-0.5 text-black bg-black" />
    </div>
)
