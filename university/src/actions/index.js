import axios from 'axios'

export const ON_START = "ON_START"
export const ON_SUCCESS = "ON_SUCCESS"

export const getUniversities = () => {
  return (dispatch => {
    dispatch(onStart())
    axios.get(`http://universities.hipolabs.com/search?country=United+States`)
    .then(res => {
      console.log(res)
      dispatch(onSuccess(res.data.data))
    })
  })
}

export const onStart = () => {
  return ({type: ON_START})
}

export const onSuccess = (universities) => {
  return({type:ON_SUCCESS, payload: universities})
}