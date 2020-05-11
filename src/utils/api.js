import axios from 'axios';
import { BASE_URL } from './constants';

class Api {
    constructor() {
        this.axios = axios.create();
        this.axios.interceptors.request.use(
            config => {
                console.log('req config', config);
                return config;
            },
            error => Promise.reject(error),
        );
        this.axios.interceptors.response.use(
            response => {
                return response;
            },
            error => Promise.reject(error),
        );
    }

    doCall = async (path = '', method, body) => {
        let headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        try {
            const res = await this.axios.request({
                url: `${BASE_URL}/${path}`,
                method,
                data: body,
                headers,
            });
            console.log('res', res);
            return res;
        } catch (err) {
            console.log('err', err);
            throw err;
        }
    };
}

export default new Api();