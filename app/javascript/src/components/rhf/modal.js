import React, {useRef, useState} from 'react'
import {ForumContainer} from "@containers/forum_container";
import {Select, DatePicker} from '@components/rhf'
import {useForm} from "react-hook-form";
import {axios} from '@helpers/axios'

export const Modal = ({open, setOpen, users, submissionUrl, addTicket}) => {
    const formRef = useRef(null)
    const [selected, setSelected] = useState(null)
    const [dueDate, setDueDate] = useState(new Date())

    const {
        clearErrors,
        handleSubmit,
        register,
        setError,
        setValue,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        if (selected){
            data.ticket.user_id = users.filter((u)=> u.username === selected)[0].id
            data.ticket.due_date = dueDate
        }
        else {
            setError("user_id", {
                type: "manual",
                message: "Dont Forget to Select",
            });
            return ;
        }
        axios.post(submissionUrl, {...data})
            .then((res) => {
                addTicket(res.data.ticket)
            }).catch((e)=>{
                alert(e)
        }).finally(()=>{
            setOpen(false)
        })
    }

    return <div className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
        <div
            className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold text-gray-500">Add Ticket</p>
                    <div className="modal-close cursor-pointer z-50" onClick={() => setOpen(!open)}>
                        <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18"
                             height="18"
                             viewBox="0 0 18 18">
                            <path
                                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                        </svg>
                    </div>
                </div>


                <ForumContainer
                    formRef={formRef}
                    heading="Profile information"
                    onSubmit={handleSubmit(onSubmit)}
                    id="ticket-form" className="w-full">
                    <div className="">
                        <div className="">
                            <label htmlFor="names" className="text-md text-gray-600">Title</label>
                        </div>
                        <div className="">
                            <input type="text" id="names" autoComplete="off" name="ticket[title]"
                                   className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                   {...register("ticket[title]")}
                                   placeholder="Example. John Doe"/>
                        </div>
                        <div className="">
                            <label htmlFor="Description" className="text-md text-gray-600">Description</label>
                        </div>
                        <div className="">
                            <input type="text" id="names" autoComplete="off" name="ticket[description]"
                                   className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                   {...register("ticket[description]")}
                                   placeholder="Example. John Doe"/>
                        </div>
                        <Select
                            clearErrors={clearErrors}
                            label="User"
                            name="ticket[user_id]"
                            placeholder="Select Time Zone"
                            options={users.map(u=>u.username)}
                            onChange={(v)=>{
                                setSelected(v)
                                clearErrors("user_id")
                            }}
                            register={register}
                            value={"1"}
                            error={errors?.user_id?.message}
                        />
                    <DatePicker label={'due date'} name={'ticket[due_date]'}
                    onChange={(v)=>setDueDate(v)}
                                setValue={setValue}
                    />
                    </div>
                    <div className="flex justify-end pt-2 space-x-14">
                        <button
                            className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                            onClick={() => {
                                setOpen(!open)
                            }}>Cancel
                        </button>
                        <button
                            className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                            type={"submit"}
                        >Confirm
                        </button>
                    </div>


                </ForumContainer>


            </div>
        </div>
    </div>
}