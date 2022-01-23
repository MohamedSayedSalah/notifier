import React, {useEffect, useRef, useState} from 'react'

export const Select = ({
                           label,
                           name,
                           options,
                           value,
                           register,
                           onChange,
                           error
                       }) => {

    const [selected, setSelected] = useState(value)
    return (
        <div>
            <div className="">
                <label htmlFor="names" className="text-md text-gray-600">{label}</label>
            </div>
            <div className="flex items-center">
                <select
                    className={`p-3 mb-5 w-full border-2 border-gray-300  rounded-md`}
                    {...register(name)}
                    value={selected}
                    onChange={(e) => {
                        setSelected(e.target.value)
                        onChange(e.target.value)
                    }}
                >
                    {options.map((o) => {
                        return <option value={o} key={o}>{o}</option>
                    })}
                </select>

            </div>
                <span className="text-error-message error-message text-sm">{error}</span>
        </div>
    )
}
