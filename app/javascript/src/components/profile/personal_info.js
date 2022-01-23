import {
    Input,
    SubmitButtons,
    TimePicker
} from '@components/rhf'

import React, {useEffect, useRef, useState} from 'react'
import {ForumContainer} from '@containers/forum_container'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {axios} from '@helpers/axios'
import {time_zones} from '@helpers/time_zones'
import {Select} from "../rhf";

export const PersonalInfo = ({user, submissionUrl}) => {

    const [reminder, setReminder] = useState(user?.due_date_reminder)
    const [time, setTime] = useState(user?.due_date_reminder_time)
    const [timeZone, setTimeZone] = useState({})

    const history = useHistory()
    const {
        clearErrors,
        handleSubmit,
        register,
        setError,
        setValue,
        formState: {errors},
    } = useForm()
    const formRef = useRef(null)


    const onSubmit = (data) => {
        data.user.due_date_reminder = reminder
        data.user.due_date_reminder_time = time
        data.user.time_zone = timeZone.value
        axios.patch(submissionUrl, {...data, page: 'personal_info'})
            .then((res) => {

            })
    }



    useEffect(()=>{
       setTimeZone({value: user?.time_zone, label: user?.time_zone})
    },[])

    return (
        <ForumContainer
            formRef={formRef}
            heading="Profile information"
            onSubmit={handleSubmit(onSubmit)}
        >

            <div className="bg-grey-50 w-1/2 left-1/4 mt-10 absolute shadow-xl rounded p-10">

                <div className={"flex pt-10 relative flex"}>
                    <div className={"w-1/4"}><span className={"mr-2 text-lg absolute top-1/2 "}> username  </span>
                    </div>
                    <Input
                        clearErrors={clearErrors}
                        defaultValue={user?.username}
                        errorName="username"
                        errors={errors}
                        label=""
                        name="user[username]"
                        placeholder="Username"
                        register={register}
                    />
                </div>

                <div className={"flex pt-10 relative flex"}>
                    <div className={"w-1/4"}>
                        <span className={"mr-2 text-lg absolute top-1/2 "}> Time Zone  </span>
                    </div>
                    <Select
                        clearErrors={clearErrors}
                        defaultValue={{value: user?.time_zone, label:user?.time_zone}}
                        errorName="time_zon"
                        errors={errors}
                        identifier="time_zone"
                        label=""
                        name="user[time_zone]"
                        onChange={(e) => setTimeZone(e)}
                        options={time_zones.map((t) => {
                            return {label: t, value: t}
                        })}
                        placeholder="Select Time Zone"
                        setValue={setValue}
                        value={timeZone}
                    />
                </div>
                <div className={"flex pt-10 relative flex"}>
                    <div className={"w-1/4"}><span
                        className={"mr-2 text-lg absolute top-1/2 "}> Reminder Interval  </span>
                    </div>
                    <TimePicker time={time} setTime={setTime}/>
                </div>

                <div className={"flex pt-10 relative flex"}>
                    <div className={"w-1/4"}><span
                        className={"mr-2 text-lg absolute top-1/2 "}> Send Reminder  ? </span>
                    </div>
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


                <div className={"flex pt-10 relative flex"}>
                    <div className={"w-1/4"}><span className={"mr-2 text-lg absolute top-1/2 "}> Time Interval  </span>
                    </div>
                    <Input
                        clearErrors={clearErrors}
                        defaultValue={user?.due_date_reminder_interval}
                        errorName="due_date_reminder_interval"
                        errors={errors}
                        label=""
                        name="user[due_date_reminder_interval]"
                        type={'number'}
                        register={register}
                        className={'w-14 rounded '}
                    />
                </div>

                <SubmitButtons
                    handleSubmit={handleSubmit}
                    // next={user?.role === 'admin' && user.done ? {type: 'push', url: 'settings'} : ''}
                    nextText={'Save'}
                    onSubmit={onSubmit}
                    className={"absolute right"}
                />

            </div>
        </ForumContainer>
    )
}
