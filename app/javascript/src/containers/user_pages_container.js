import React from 'react'
const authImages = require.context('@images/auth', true)

export const UserPagesContainer = (props) => (
    <div
        className="flex flex-col justify-center items-center w-full h-full text-black"
        style={{
            background: `url(${authImages('./vbg.png')})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="py-8 px-8 my-4 mx-2 bg-white bg-opacity-70 rounded-lg shadow-lg">
            {props.children}
        </div>
    </div>
)
