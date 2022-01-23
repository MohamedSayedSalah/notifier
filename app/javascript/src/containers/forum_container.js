import React from 'react'

export const ForumContainer = ({
                                   children,
                                   formRef,
                                   onSubmit
                               }) => {
    return (
        <form onSubmit={onSubmit} ref={formRef}>
            <div>{children}</div>
        </form>
    )
}
