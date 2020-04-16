import { } from '../actions/types'

const initialState = {

}

export default function (state = initialState, action) {
    switch (action.type) {
        // case GET_RESTAURANT_DATA:
        //     return {
        //         ...state,
        //         restaurantData: action.payload[0].restaurant_info,
        //         menuData: action.payload[0].menu_info
        //     }


        default: return state;
    }
}