import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const authAPI = {
    signUp(data: FormData) {
        return instance.post(`auth/signup`, data);
    },
}