import { HiChevronDown, HiOutlineMinusCircle } from 'react-icons/hi'
import React, { useEffect, useRef } from 'react'
import ReactSelect, { components } from 'react-select'

import cx from 'classnames'

export const Select = ({
                           className,
                           clearErrors,
                           defaultValue,
                           errorName,
                           errors = {},
                           hidden,
                           identifier,
                           isSearchable = true,
                           label,
                           labelName = 'label',
                           name,
                           onBlur,
                           onChange,
                           onFocus,
                           onRemove,
                           options,
                           placeholder,
                           removable,
                           setValue,
                           valueName = 'value',
                           value,
                           constrolStyles = {},
                           width,
                       }) => {
    const selectInputRef = useRef()

    useEffect(() => {
        if (!defaultValue) {
            selectInputRef.current?.select.clearValue()
            if (setValue) setValue(name, null)
        }
        if (setValue && defaultValue) setValue(name, defaultValue[valueName])
        selectInputRef.current?.select.setValue(defaultValue)
    }, [defaultValue, name, setValue, valueName])

    if (hidden) return null

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <HiChevronDown className="w-6 h-6 text-black hover:text-black fill-current hover" />
            </components.DropdownIndicator>
        )
    }
    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),

        option: (provided, state) => ({
            ...provided,
            color: '#000000',
            background: state.isSelected ? '#E2E5EA' : '#FFFFFF',
            '&:hover': {
                background: '#E2E5EA',
            },
        }),
        input: (provided) => ({
            ...provided,
            input: { '&:focus': { boxShadow: 'none' } },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: errors[errorName] ? '#FF0000' : provided.color,
        }),
        menu: (provided) => ({ ...provided, zIndex: 9999 }),
        control: (provided, state) => ({
            ...provided,
            borderRadius: '0.125rem',
            boxShadow: errors[errorName]
                ? '0 0 0 1px #FF0000'
                : state.isFocused
                    ? '0 0 0 1px #00B1F7'
                    : '',
            borderColor: 'transparent',
            '&:hover': { borderColor: 'transparent' },
            ...constrolStyles,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1
            const transition = 'opacity 300ms'

            return { ...provided, opacity, transition }
        },
    }
    return (
        <div className={cx({ [className]: className })}>
            <label>{label}</label>
            <div className="flex items-center">
                <div className={cx({ 'w-72': !width, [`${width}`]: width })}>
                    <ReactSelect
                        className={`rselect ${identifier} text-error-message`}
                        components={{ DropdownIndicator }}
                        defaultValue={defaultValue}
                        getOptionLabel={(opt) => opt[labelName]}
                        getOptionValue={(opt) => opt[valueName]}
                        isSearchable={isSearchable}
                        key={name}
                        onBlur={() => {
                            if (onBlur) onBlur()
                        }}
                        onChange={(opt, { action }) => {
                            if (action == 'select-option') {
                                if (onChange) onChange(opt)
                                if (clearErrors) clearErrors(errorName)
                                if (setValue) setValue(name, opt[valueName])
                            }
                        }}
                        onFocus={() => {
                            if (onFocus) onFocus()
                        }}
                        options={options}
                        placeholder={placeholder}
                        ref={selectInputRef}
                        styles={customStyles}
                        value={value}
                    />
                </div>
                {removable && (
                    <HiOutlineMinusCircle
                        className="ml-2 cursor-pointer remove-button"
                        onClick={() => {
                            if (onRemove) onRemove()
                        }}
                        size={20}
                    />
                )}
            </div>
            {errors[errorName] && (
                <span className="text-sm text-error-message error-message">
          {errors[errorName].message}
        </span>
            )}
        </div>
    )
}
