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
    //Sample Url:"https://website-screenshot-api.exponential.host/?url=chakra-ui.com&capture_full_page=true&wait_until=domcontentloaded&delay=3000&export_format=png&device=laptop" \


    await axios.get(url, {
        headers: {
            'accept': 'image/jpeg',
            'exponential_api_secret': `${process.env.REACT_APP_EXPONENTIAL_API}`
        }
    }).then((res) => {
        console.log(url);
        const blob = new Blob([res.data], { type: 'image/jpeg' });
        let imageUrl = URL.createObjectURL(blob);

        console.log(imageUrl)
        dispatch({ type: types.GET_SCREENSHOT_SUCCESS, payload: imageUrl });
    }).catch((err) => {
        dispatch({ type: types.GET_SCREENSHOT_FAILURE })
        console.log(err);

    })

}