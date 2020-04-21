import {
    SET_GENDER,
    SET_AGE,
    SET_QUESTIONS,
    LOADING,
    STOP_FETCHING,
    SET_EVIDENCE,
    SET_PAGE,
    END_REACHED
} from '../actions/types.js'


const initialState = {
    sex: '',
    age: 70,
    questions: {},
    loading: false,
    stopFetching: false,
    evidence: [],
    pages: [],
    response: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case END_REACHED:
            return {
                ...state,
                response: [...state.response, action.payload],
                loading: false
            }

        case SET_PAGE:
            let step;
            if (state.pages.length !== 0) {
                step = state.pages[state.pages.length - 1] + 1

            } else {
                step = 0
            }

            return {
                ...state,
                pages: [...state.pages, step]
            }

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
                questions: action.payload,
                stopFetching: false,
            }
        case STOP_FETCHING:
            return {
                ...state,
                stopFetching: true,

            }
        case LOADING:
            return {
                ...state,
                loading: true,

            }
        case SET_EVIDENCE:
            return {
                ...state,
                evidence: action.payload

            }

        default: return state;
    }
}