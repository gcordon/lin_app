const log = console.log.bind(console)
const getLocalStorage = (key) => {
    const get = window.localStorage.getItem(key)
    if (!get) return log(`getLocalStorage => ${key} error`)
    return get
}
const setLocalStorage = (key, value) => {
    const set = window.localStorage.setItem(key, value)
    if (!set) return log(`setLocalStorage => ${key}:${value} success`)
    return set
}