import * as types from './url.types';


let initState = {
    isLoading: false, isError: false, url: ''
}

export const urlReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case types.GET_URL_LOADING: return { ...state, isLoading: true, isError: false }
        case types.GET_URL_SUCCESS: return { ...state, isLoading: false, isError: false, url: payload }
        case types.GET_URL_FAILURE: return { ...state, isLoading: false, isError: true }

        default: return state;
    }
}