import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
@Injectable({
    providedIn: 'root'
})
export class Request {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:64343/api/';
        // http://codeheaven.io/how-to-use-axios-as-your-http-client-pt/
        // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    get(url: string, config: AxiosRequestConfig = null) {
        return axios.get(url, config);
    }
    post<T>(url: string, data: T, config: AxiosRequestConfig = null) {
        return axios.post(url, data);
    }
    put<T>(url: string, data: T, config: AxiosRequestConfig = null) {
        return axios.put(url, data, config);
    }
    delete(url: string, config: AxiosRequestConfig = null) {
        return axios.delete(url, config);
    }
}
