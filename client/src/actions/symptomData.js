import {
    SET_GENDER,
    SET_AGE,
    SET_QUESTIONS,
    LOADING
} from './types'
import axios from 'axios'
export const setGender = (sex) => dispatch => {
    dispatch({
        type: SET_GENDER,
        payload: sex
    })
}

export const setAge = (age, sex) => dispatch => {
    dispatch({
        type: LOADING,
    })
    dispatch({
        type: SET_AGE,
        payload: age
    })
    let data = {
        age,
        sex
    }
    axios.post('/symptoms', data)
        .then(res => dispatch({
            type: SET_QUESTIONS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

