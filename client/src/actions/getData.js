import {
    GET_GLOBAL_DATA
} from './types'
import axios from 'axios'

export const getGlobalData = () => dispatch => {
    axios.get('https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?global=stats')
        .then(res => (
            dispatch({
                type: GET_GLOBAL_DATA,
                payload: res.data
            })
        ))

}

