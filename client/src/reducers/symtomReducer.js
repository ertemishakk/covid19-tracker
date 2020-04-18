import { SET_GENDER, SET_AGE, SET_QUESTIONS, LOADING } from '../actions/types.js'


const initialState = {
    sex: '',
    age: 70,
    questions: {},
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_GENDER:
            return {
                ...state,
                sex: action.payload
            }
        case SET_AGE:
            return {
                ...state,
                age: action.payload
            }
        case SET_QUESTIONS:
            return {
                ...state,
                loading: false,
                questions: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: true,

            }

        default: return state;
    }
}