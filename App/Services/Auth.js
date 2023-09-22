import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";

const login = async (data) => {
    return HttpClient.post('login', data);
}
const Register = async (data) => {
    return HttpClient.post('register', data);
}
const getAccount = async () => {
    return Storage.get('account');
}

const setAccount = async (data) => {
    return Storage.set('account', data);
}
const getToken = async () => {
    return Storage.get('token');

};
const setToken = async data => {
    return Storage.set('token', data);
};

const AuthService = {
    getAccount,
    setAccount,
    Register,
    login,
    getToken,
    setToken,
}

export default AuthService;