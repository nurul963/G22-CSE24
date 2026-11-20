import { api } from "../api/axios";

export const register=(formData)=>
    api.post("/auth/register",formData);
export const login =(formData)=>
    api.post("/auth/login",formData)