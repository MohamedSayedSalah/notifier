import { Link as Linker } from 'react-router-dom'
import React from 'react'
export const Heading = ({ children }) => (
    <h2 className="mb-8 font-display text-center">{children}</h2>
)
export const Link = ({ to, children }) => (
    <Linker className="text-sm text-gray-1000" to={to}>
        {children}
    </Linker>
)
