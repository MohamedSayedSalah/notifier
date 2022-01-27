import React from 'react'
import { BsFillHouseDoorFill, BsBellFill, BsClockFill } from "react-icons/bs";

export const SideNavigation = ({currentUser,
                                   profile_path}) => {

    return <aside
        className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white relative">
        <div className={"absolute top-16"}>

            <div className={"py-14"}>
                <a   href={"/"}
                    className="h-10 w-10  flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <BsFillHouseDoorFill size={20}/>
                </a>
            </div>

            <div className={"py-14"}>
                    <a href={profile_path} className="h-10  w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </a>
            </div>



            <div className={"py-14"}>
                <a  href={"/notifications"}
                    className="h-10 w-10 relative  flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <BsBellFill size={20}/>
                    <span
                        className="absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-white">{currentUser.notifications_count}</span>
                </a>
            </div>
            <div className={"py-14"}>
                <a  href={"/pending"}
                    className="h-10 w-10  flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <BsClockFill size={20}/>
                </a>
            </div>
        </div>
    </aside>
}