import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
@Injectable({
    providedIn: 'root'
})
export class Request {
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