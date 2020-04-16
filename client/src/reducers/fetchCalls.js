import { GET_GLOBAL_DATA } from '../actions/types'

const initialState = {
    globalData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GLOBAL_DATA:
            return {
                globalData: action.payload
            }


        default: return state;
    }
}