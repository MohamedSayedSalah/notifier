import React from 'react'
import cx from 'classnames'
export const CheckboxGroup = ({
                                  className,
                                  clearErrors,
                                  errorName,
                                  errors,
                                  label,
                                  options,
                                  onChange,
                                  register = () => {},
                              }) => {
    return (
        <div className="block mb-4">
            <span className="text-gray-700">{label}</span>
            <div className="mt-2">
                {options.map((o) => (
                    <div key={o.value + o.name}>
                        <label className="inline-flex items-center">
                            <input
                                className="absolute w-3 h-3 opacity-0"
                                defaultChecked={o.defaultChecked}
                                name={o.name}
                                type="checkbox"
                                value={o.value}
                                {...register(o.name)}
                                onClick={(e) => {
                                    if (onChange) onChange(e.target.value)
                                    if (clearErrors) clearErrors(errorName)
                                }}
                            />
                            <div
                                className={cx(
                                    'flex flex-shrink-0 justify-center items-center mr-2 w-5 h-5 bg-white rounded-sm border-2',
                                    {
                                        'border-error': errors[errorName],
                                        'focus-within:border-error': errors[errorName],
                                        'focus-within:border-black': !errors[errorName],
                                        'border-black': !errors[errorName],
                                        [`${className}`]: className,
                                    }
                                )}
                            >
                                <svg
                                    className="w-3 h-3 text-primary opacity-0 pointer-events-none fill-current"
                                    version="1.1"
                                    viewBox="0 0 17 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g fill="none" fillRule="evenodd">
                                        <g
                                            fill="#135BE8"
                                            fillRule="nonzero"
                                            transform="translate(-9 -11)"
                                        >
                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span
                                className="ml-2"
                                dangerouslySetInnerHTML={{ __html: o.text }}
                            />
                        </label>
                    </div>
                ))}
                {errors[errorName] && (
                    <span className="text-error-message error-message">
            {errors[errorName].message}
          </span>
                )}
            </div>
        </div>
    )
}
