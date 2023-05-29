import axios from "axios";

export const api = axios.create({
    baseURL: "batatinha",
    timeout: 5000,
})