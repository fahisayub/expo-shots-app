import axios from 'axios';
import * as types from './screenShot.types'

export const getScreenShotApi = (payload) => async (dispatch) => {
    dispatch({ type: types.GET_SCREENSHOT_LOADING });
    // let url=`https://website-screenshot-api.exponential.host/?`
    // for (let key in payload){
    //     url+=
    // }

    await axios.get(`https://website-screenshot-api.exponential.host/?url=${payload.url}/`, {headers:{
        'accept': 'image/jpeg',
        'exponential_api_secret': `${process.env.REACT_APP_EXPONENTIAL_API}`
      }}).then((res) => {
        dispatch({ type: types.GET_SCREENSHOT_SUCCESS, payload: res.data });
        console.log(payload);
        console.log(res.data);
    }).catch((err) => {
        dispatch({ type: types.GET_SCREENSHOT_FAILURE })
        console.log(err);

    })

}