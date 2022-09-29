import axios from "axios";

export const api = axios.create({
    baseURL: 'https://skill-space-api.herokuapp.com/'
})