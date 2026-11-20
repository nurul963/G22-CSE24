import { api } from "../api/axios";

export const getAllUsers=()=>api.get("/admin");