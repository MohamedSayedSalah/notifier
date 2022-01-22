import React from 'react'
import ReactDOM from 'react-dom'

export default (components) => {

    const domSet = new Set()
    const targets = document.querySelectorAll('[react-component]')
    // eslint-disable-next-line no-var

    for (var i = 0; i < targets.length; i++) {
        const element = targets[i]
        const componentName = element.getAttribute('react-component')
        const propString = element.getAttribute('react-props')
        if (domSet.has(element)) {
            continue
        }
        domSet.add(element)

        if (componentName && components[componentName]) {
            const allProps = JSON.parse(propString || '{}')
            const ReactComponent = components[componentName]
            ReactDOM.render(<ReactComponent {...allProps} />, element)
        }
    }
}
