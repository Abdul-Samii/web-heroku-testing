import axios from 'axios'
import { store } from '../store/store'

const baseURL = 'https://work.tradingdevelopmentsystem.com/api/v1/';

export const httpRequest = axios.create({
    baseURL:baseURL,
});

export const config={
    Headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
    },
}

export const mediaConfig = token=>{
    const userToken = store.getState()?.auth?.User?.Token || token;
    return {
        headers:{
            Authorization:'Bearer' + userToken,
        },
    };
};

export const getConfig = token=>{
    const userToken = store.getState()?.auth?.User?.Token || token;
    return {
        headers:{
            'Content-Type' : 'application/json',
            Authorization:'Bearer' + userToken,
        },
    };
};