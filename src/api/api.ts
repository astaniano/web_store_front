import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const authAPI = {
    signUp(email: string, password: string, firstName: string, lastName: string) {
        return instance.post(`auth/signup`, {email, password, firstName, lastName});
    },
}