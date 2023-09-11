import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";

const login = async (data) => {
    return HttpClient.post('login', data);
}

const getAccount = async () => {
    return Storage.get('account');
}

const setAccount = async (data)=> {
    return Storage.set('account', data);
}

const AuthService = {
    getAccount
}

export default AuthService;