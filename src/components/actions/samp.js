import axios from 'axios';
import { GET_API_SAMP_SERVER, GET_API_SAMP_SERVER_ERROR } from './types';

export const getApiSampServer = () => async dispatch => {
    try {
        const res = await axios.get('https://api.samp-servers.net/v2/server/101.50.3.61:7780');
        dispatch({ type: GET_API_SAMP_SERVER, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_API_SAMP_SERVER_ERROR });
    }
}