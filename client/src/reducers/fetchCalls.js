import { GET_GLOBAL_DATA, GLOBAL_DATA_LOADING, UPDATE_DATA, DAILY_DATA_RECEIVED, DAILY_DATA_LOADING } from '../actions/types'

const initialState = {
    globalData: [],
    globalDataLoading: false,
    countries: [],
    dailyDataLoading: false,
    dailyData: [],
    from: 'global'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GLOBAL_DATA:
            return {
                ...state,
                from: 'global',
                globalData: [action.payload.Global],
                countries: action.payload.Countries,
                globalDataLoading: false,
            }
        case GLOBAL_DATA_LOADING:
            return {
                ...state,
                globalDataLoading: true
            }
        case UPDATE_DATA:

            return {
                ...state,
                from: action.payload,
                globalData: state.countries.filter(country => country.Country === action.payload),
                globalDataLoading: false
            }


        case DAILY_DATA_LOADING:
            return {
                ...state,
                dailyDataLoading: true
            }

        case DAILY_DATA_RECEIVED:
            return {
                ...state,
                dailyData: action.payload,
                dailyDataLoading: false
            }


        default: return state;
    }
}