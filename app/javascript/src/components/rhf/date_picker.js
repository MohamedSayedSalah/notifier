import 'react-datepicker/dist/react-datepicker.css'
import './date_picker.custom.scss'

import React, { useState } from 'react'
import Datepicker from 'react-datepicker'


export const DatePicker = ({
                               className,
                               clearErrors,
                               defaultValue = new Date(),
                               errorName,
                               errors = {},
                               label,
                               name,
                               onChange,
                               setValue,
                               width,
                               ...props
                           }) => {
    const [current, setCurrent] = useState(defaultValue)


    return (
        <div className="flex flex-col mb-4 date-picker-container">
            <div className="">
                <label className="text-md text-gray-600">{label}</label>
            </div>
            <Datepicker
                className={'block mt-1 rounded-sm border w-full border-gray-300  focus:border-secondary focus:ring-transparent form-input focus:border-1'}
                onChange={(date) => {
                    const offsetDate = new Date(
                        date.getTime() - date.getTimezoneOffset() * 60000
                    )
                    if (onChange) onChange(offsetDate)
                    if (clearErrors) clearErrors(errorName)
                    setCurrent(offsetDate)
                    setValue(name, offsetDate)
                }}
                selected={current}
                {...props}
            />
            {errors[errorName] && (
                <span className="text-sm text-error-message error-message">
          {errors[errorName].message}
        </span>
            )}
        </div>
    )
}
