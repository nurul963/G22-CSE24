import axios from "axios";
import { getAccessToken } from "./token";
const BASE_URL='http://localhost:8080/api';
export const api=axios.create({
    baseURL:BASE_URL,
    withCredentials:true
});
const refreshapi=axios.create({
    baseURL:BASE_URL,
    withCredentials:true
});
api.interceptors.request.use(
    (config)=>{
        // const token=getAccessToken();
        const token=null;
        if(token){
           config.headers.Authorization=`Bearer ${token}` 
        }
       return config; 
    },
    (error)=>{
        console.log(error);
    }
)
api.interceptors.response.use(
    (response)=>{
        if(response){
            return response;
        }
    },
    (error)=>{
        const originalRequest=error.response.config;
        const expire=error.response.status===401;
        if(
            originalRequest
            && expire &&
            !error.response.retry
        ){
           error.response.retry=true 
           
        }
        console.log(error.response);

    }
)