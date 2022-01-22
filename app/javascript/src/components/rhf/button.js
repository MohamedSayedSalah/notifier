import React from 'react'
import cx from 'classnames'
const LoadingIndicator = () => (
    <div className="absolute right-1 w-3 h-3 border-0 animate-bordered" />
)
export const Button = ({
                           className,
                           disabled,
                           icon,
                           kind, // alternate, alternate-primary, icon, icon-outline ..?
                           loading,
                           onClick,
                           rounded,
                           size,
                           text,
                           type = 'button',
                           title,
                           href,
                       }) => {
    const common = `${className}  border-2 border-transparent hover:bg-transparent hover:text-black hover:border-black items-center flex ${
        className?.includes('disabled')
            ? ''
            : 'disabled:bg-primary disabled:text-white disabled:border-transparent disabled:opacity-50'
    } ${className?.includes('bg-') ? '' : 'bg-primary'} ${
        className?.includes('text-') ? '' : 'text-white'
    } leading-none`

    const commonOutline = `${className} relative border-2 border-black bg-transparent hover:text-white hover:bg-black text-black flex items-center disabled:opacity-50 leading-none`

    if (href && !onClick && !disabled)
        onClick = () => (window.location.href = href)

    return (
        <>
            {!text && icon && kind != 'icon-outline' && kind !== 'icon' && (
                <button
                    className={cx(common, 'justify-center p-0', {
                        'text-lg h-12 w-12': size == 'large',
                        'h-10 w-10 text-sm': !size,
                        'rounded-full': !rounded || rounded == 'rounded-full',
                        'rounded-none': rounded == 'rounded-none',
                    })}
                    disabled={disabled || loading}
                    onClick={onClick}
                    title={title}
                    type={type}
                >
                    {icon}
                </button>
            )}
            {!text && icon && kind == 'icon-outline' && (
                <button
                    className={cx(commonOutline, 'justify-center p-0', {
                        'text-lg h-12 w-12': size == 'large',
                        'h-10 w-10 text-sm': !size,
                        'rounded-full': !rounded || rounded == 'rounded-full',
                        'rounded-none': rounded == 'rounded-none',
                    })}
                    disabled={disabled || loading}
                    onClick={onClick}
                    type={type}
                >
                    {icon}
                </button>
            )}
            {!kind && text && (
                <button
                    className={cx(common, {
                        'text-lg px-6 h-10 py-2': size == 'large',
                        'p-3': size == 'even',
                        'p-2': size == 'even-small',
                        'px-6 py-3 text-sm h-10': !size,
                    })}
                    disabled={disabled || loading}
                    onClick={onClick}
                    type={type}
                >
                    {icon && <span className="mr-1">{icon}</span>}
                    <span className="w-full">{text}</span>
                    {loading && <LoadingIndicator />}
                </button>
            )}

            {kind == 'alternate' && text && (
                <button
                    className={cx('text-black bg-transparent focus:outline-none', {
                        [className]: className,
                        'text-lg px-6 h-10': size == 'large',
                        'text-sm px-2 h-6': size == 'normal',
                        'px-6 py-3 text-sm h-10': !size,
                        [size]: size,
                        'hover:text-primary': !disabled && !loading,
                        'flex items-center': icon,
                    })}
                    disabled={disabled || loading}
                    onClick={onClick}
                    type={type}
                >
                    {icon && <span className="mr-1">{icon}</span>}
                    <span className="w-full">{text}</span>
                    {loading && <LoadingIndicator />}
                </button>
            )}

            {kind == 'alternate-primary' && text && (
                <button
                    className={cx('text-primary bg-transparent focus:outline-none', {
                        [className]: className,
                        'text-lg px-6 h-10': size == 'large',
                        'text-base px-6 h-10': size == 'normal',
                        'px-6 py-3 text-sm h-10': !size,
                        [size]: size,
                    })}
                    disabled={disabled || loading}
                    onClick={onClick}
                    type={type}
                >
                    {icon && <span className="mr-1">{icon}</span>}
                    <span className="w-full">{text}</span>
                    {loading && <LoadingIndicator />}
                </button>
            )}

            {kind == 'outline' && text && (
                <button
                    className={cx(commonOutline, {
                        'text-lg px-11 h-10': size == 'large',
                        'text-base px-11 h-10': size == 'normal',
                        'px-11 py-3 text-sm h-10': !size,
                    })}
                    disabled={disabled || loading}
                    onClick={onClick}
                    type={type}
                >
                    {icon && <span className="mr-1">{icon}</span>}
                    <span className="w-full">{text}</span>
                    {loading && <LoadingIndicator />}
                </button>
            )}

            {icon && kind === 'icon' && (
                <button
                    className={className}
                    disabled={disabled || loading}
                    onClick={onClick}
                    title={title}
                    type={type}
                >
                    {icon}
                </button>
            )}
        </>
    )
}
