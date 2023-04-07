import axios from 'axios';
import * as types from './screenShot.types'

export const getScreenShotApi = (payload) => async (dispatch) => {
    dispatch({ type: types.GET_SCREENSHOT_LOADING });
    console.log(payload);
    let url = `https://website-screenshot-api.exponential.host/?`
    for (let key in payload) {
        url += `${key}=${payload[key]}`
        url += '&'
    }

    await axios.get(url, {
        headers: {
            'accept': 'image/jpeg',
            'exponential_api_secret': `${process.env.REACT_APP_EXPONENTIAL_API}`
        }
    }).then((res) => {
        const textEncoder = new TextEncoder();
        const response = textEncoder.encode(res.data)

        const blob = new Blob([response], { type: 'image/jpeg' });
        let imageUrl = URL.createObjectURL(blob);
        let url = imageUrl.trim().split(':')
        url.shift()
        url = url.join(':')
        console.log(url)
        //http://localhost:3000/bcc67586-5e54-4a41-bb6b-e70b4cfd4ab9
        dispatch({ type: types.GET_SCREENSHOT_SUCCESS, payload: url });
        console.log(url);
    }).catch((err) => {
        dispatch({ type: types.GET_SCREENSHOT_FAILURE })
        console.log(err);

    })

}