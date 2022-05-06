export const ON_START = "ON_START"
export const ON_SUCCESS = "ON_SUCCESS"

export const onStart = () => {
    return({type: ON_START})
}

export const onSuccess = universities => {
    return({type: ON_SUCCESS, payload: universities})
}