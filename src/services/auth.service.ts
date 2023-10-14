import {axiosServiceUser} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaces/user.interface";


const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'
const authService = {
    register: (user : IUser) => axiosServiceUser.post(urls.auth.register, user),
    login: (user : IUser) => axiosServiceUser.post(urls.auth.login, user),
    refresh: ({refresh}: {refresh : string }) => axiosServiceUser.post(urls.auth.refresh, {refresh}),

    setTokens: ({ access, refresh }: { access: string; refresh: string }) => {
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },
    deleteToken:()=>{
        localStorage.removeItem(_accessTokenKey)
        localStorage.removeItem(_refreshTokenKey)
    },
    getAccessToken:()=>localStorage.getItem(_accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(_refreshTokenKey),

}

export {
    authService
}