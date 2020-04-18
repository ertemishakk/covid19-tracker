import {
    GET_GLOBAL_DATA, GLOBAL_DATA_LOADING, UPDATE_DATA, DAILY_DATA_RECEIVED, DAILY_DATA_LOADING
} from './types'
import axios from 'axios'

export const getGlobalData = () => dispatch => {
    dispatch({
        type: GLOBAL_DATA_LOADING,
    })
    axios.get('/getall')
        .then(res => (
            dispatch({
                type: GET_GLOBAL_DATA,
                payload: res.data
            })
        ))

}

export const countrySelected = (country) => dispatch => {
    if (country !== 'global') {
        dispatch({
            type: GLOBAL_DATA_LOADING,
        })
        dispatch({
            type: DAILY_DATA_LOADING
        })
        dispatch({
            type: UPDATE_DATA,
            payload: country
        })
        axios.post(`/getdaily/${country}`)
            .then(res => dispatch({
                type: DAILY_DATA_RECEIVED,
                payload: res.data
            }))
    }
    else {
        dispatch({
            type: GLOBAL_DATA_LOADING,
        })
        axios.get('/getall')
            .then(res => (
                dispatch({
                    type: GET_GLOBAL_DATA,
                    payload: res.data
                })
            ))
    }
}

