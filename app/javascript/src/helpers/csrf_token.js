export const getCSRFToken = () => {
    const tag = document.querySelector('meta[name=csrf-token]')
    if (tag) return tag.content
    return ''
}
