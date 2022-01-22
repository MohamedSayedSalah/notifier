import React from 'react'
import cx from 'classnames'
export const Input = ({
                          className,
                          clearErrors,
                          defaultValue,
                          errorName,
                          errors = {},
                          label,
                          name,
                          onChange,
                          placeholder,
                          register = () => {},
                          hidden,
                          type = 'text',
                          width,
                          value
                      }) => {
    const registration = register(name)
    if (hidden) return null
    return (
        <label className="block mb-4">
            <span>{label}</span>
            <input
                className={cx(
                    'block mt-1 rounded-sm focus:border focus:border-secondary focus:ring-transparent form-input',
                    {
                        'border-transparent': !errors[errorName],
                        'border-error': errors[errorName],
                        'text-error-message': errors[errorName],
                        'placeholder-error-message': errors[errorName],
                        [`${className}`]: className,
                        [`${width}`]: width,
                        'w-72': !width,
                    }
                )}
                defaultValue={defaultValue}
                value={value}
                name={name}
                onBlur={registration.onBlur}
                onChange={(e) => {
                    registration.onChange(e)
                    if (onChange) onChange(e.target.value)
                    if (clearErrors) clearErrors(errorName)
                }}
                placeholder={placeholder}
                ref={registration.ref}
                type={type}
            />
            {errors[errorName] && (
                <span className="text-error-message error-message">
          {errors[errorName].message}
        </span>
            )}
        </label>
    )
}
