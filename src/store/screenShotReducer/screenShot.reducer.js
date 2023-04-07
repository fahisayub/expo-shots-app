import * as types from './screenShot.types';


let initState = {
    isLoading: false, isError: false, image: ''
}

export const screenShotReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case types.GET_SCREENSHOT_LOADING: return { ...state, isLoading: true, isError: false }
        case types.GET_SCREENSHOT_SUCCESS: return { ...state, isLoading: false, isError: false, image: payload }
        case types.GET_SCREENSHOT_FAILURE: return { ...state, isLoading: false, isError: true }

        default: return state;
    }
}