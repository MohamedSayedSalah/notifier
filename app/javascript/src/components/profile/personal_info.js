import {
    SubmitButtons,
    TimePicker,
    Select
} from '@components/rhf'

import React, {useRef, useState} from 'react'
import {ForumContainer} from '@containers/forum_container'
import {useForm} from 'react-hook-form'
import {axios} from '@helpers/axios'
import {time_zones} from '@helpers/time_zones'


export const PersonalInfo = ({user, submissionUrl}) => {


    const [reminder, setReminder] = useState(user?.due_date_reminder)
    const [time, setTime] = useState(user?.due_date_reminder_time)


    const {
        handleSubmit,
        register,
        setValue,
        formState: {errors},
    } = useForm()
    const formRef = useRef(null)


    const onSubmit = (data) => {
        data.user.due_date_reminder = reminder
        data.user.due_date_reminder_time = time
        axios.patch(submissionUrl, {...data, page: 'personal_info'})
            .then((res) => {

            }).catch((e) => {
            alert(e)
        })
    }


    return (
        <ForumContainer
            formRef={formRef}
            heading="Profile information"
            onSubmit={handleSubmit(onSubmit)}
        >

            <div className="bg-white shadow-xl rounded p-10">

                <div className="">
                    <label htmlFor="names" className="text-md text-gray-600">User name</label>
                </div>
                <div className="">
                    <input type="text" id="name" autoComplete="off" name="user[username]"
                           className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                           {...register("user[username]")}
                           defaultValue={user.username}
                           placeholder="Example. John Doe"/>
                </div>


                <Select
                    label="Time Zone"
                    name="user[time_zone]"
                    options={time_zones}
                    placeholder="Select Time Zone"
                    value={user.time_zone}
                    register={register}
                    onChange={()=>{}}
                />

                <div>
                    <label htmlFor="reminder_time" className="text-md text-gray-600">Reminder Time (according to your time zone)</label>
                </div>
                <TimePicker time={time} setTime={setTime}/>


                <div className={"flex mb-5"}>
                    <label htmlFor="send_reminder" className="text-md text-gray-600 mr-2">Send Reminder</label>
                    <input
                        defaultChecked={user?.due_date_reminder}
                        value={user?.due_date_reminder}
                        type={'checkbox'}
                        onClick={() => {
                            setReminder(!reminder)
                            setValue("user[due_date_reminder]", !reminder)
                        }}
                        name={"user[due_date_reminder]"}
                        {...register('user[due_date_reminder]')}
                        className={'w-4  border-black rounded shadow '}
                    />
                </div>


                <div>
                    <label htmlFor="reminder_time" className="text-md text-gray-600">Time Interval</label>
                </div>

                <input type="number" id="name" autoComplete="off" name="user[due_date_reminder_interval]"
                       className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                       defaultValue={user.due_date_reminder_interval}
                       {...register("user[due_date_reminder_interval]")}
                />

                <SubmitButtons
                    handleSubmit={handleSubmit}
                    nextText={'Save'}
                    onSubmit={onSubmit}
                    className={"absolute right"}
                />

            </div>
        </ForumContainer>
    )
}
