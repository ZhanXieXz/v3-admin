export const getItem = <T>(key: string) => {
    let result = window.localStorage.getItem(key)
    if (!result) {
        return null
    }
    try {
        return JSON.parse(result) as T
    } catch (error) {
        return null
    }
}
export const setItem = (key: string, value: object | string | null) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}
export const removeItem = (key: string) => {
    window.localStorage.removeItem(key)
}