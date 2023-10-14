import axios from "axios";


import {authService} from "./auth.service";
import {createBrowserHistory} from "history";
import {baseUserURL} from "../constants";

const REACT_APP_API_KEY='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWNlMDI2ZTliYjViYTJkNjNiNzVjYzhmOTczNTQzMCIsInN1YiI6IjYzNGFhMWFkNjg4Y2QwMDA3YzM4ZTkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHWNxvXPpi6PIkmwlUUgv0u3yZjN-eQFY2SIe_DXHjc'
const REACT_APP_BASE_URL='https://api.themoviedb.org/3'
const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const history = createBrowserHistory();

const axiosService = axios.create({baseURL});

const axiosServiceUser = axios.create({
    baseURL: baseUserURL,
});

let isRefreshing = false

axiosServiceUser.interceptors.request.use((config) => {
    const access = authService.getAccessToken();

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }

    return config
})

axiosServiceUser.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing){
            isRefreshing = true

            try{
                // @ts-ignore
                const {data} = await authService.refresh(refresh);
                authService.setTokens(data)
            }catch (e){
                authService.deleteToken()
                history.replace('/login?expSession=true')
            }

            isRefreshing =false
            return axiosService(error.config)
        }

        return Promise.reject(error)
    }
)


export {
    axiosService,
    axiosServiceUser
};