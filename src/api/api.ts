import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const authAPI = {
    signUp(email: string, password: string, first_name: string, last_name: string) {
        return instance.post(`auth/signup`, {email, password, first_name, last_name});
    },
}