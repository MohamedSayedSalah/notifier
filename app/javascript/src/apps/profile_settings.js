import React from 'react'
import {PersonalInfo} from '@components/profile'




const ProfileSettings = (props) => {
    return <div className="mt-14 shadow-lg w-1/2">
        <PersonalInfo {...props} />
    </div>

}
export default ProfileSettings
