import {
    SET_GENDER,
    SET_AGE,
    SET_QUESTIONS,
    LOADING,
    STOP_FETCHING,
    SET_EVIDENCE,
    SET_PAGE,
    END_REACHED
} from './types'
import axios from 'axios'


export const setPage = () => dispatch => {
    dispatch({
        type: SET_PAGE
    })
}


export const setGender = (sex) => dispatch => {
    dispatch({
        type: SET_GENDER,
        payload: sex
    })
}
export const stopFetching = () => dispatch => {
    dispatch({
        type: STOP_FETCHING,
    })
}

export const setAge = (age) => dispatch => {
    dispatch({
        type: SET_AGE,
        payload: age
    })
}
export const setEvidence = (data) => dispatch => {
    dispatch({
        type: SET_EVIDENCE,
        payload: data.evidence
    })
}

export const fetchData = (data) => dispatch => {
    dispatch({
        type: LOADING,
    })
    axios.post('/symptoms', data)
        .then(res => {
            dispatch({
                type: SET_PAGE
            })

            if (res.data.should_stop === false) {
                dispatch({
                    type: SET_QUESTIONS,
                    payload: res.data.question
                })
            } else {
                dispatch({
                    type: END_REACHED,
                    payload: res.data
                })
            }


        })
        .catch(err => console.log(err))
}

