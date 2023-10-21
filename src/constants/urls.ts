const baseImageURL = 'https://image.tmdb.org/t/p/w500/';
const baseVideoURL = 'https://www.youtube.com/embed/';

const baseUserURL = 'http://localhost:5001';


const notImg = 'https://bazarama.com/assets/imgs/Image-not-available.png';

const api_key = 'api_key=11ce026e9bb5ba2d63b75cc8f9735430';

const urls = {
    movies: {
        movies:`/discover/movie?${api_key}`,
        popular:`/movie/popular?${api_key}`,
        video:(id: number):string=> `/movie/${id}/videos?${api_key}`
    },
    genres: {
        genres:`/genre/movie/list?${api_key}`
    },
    comments: {
        commentsByMovieId: (id: string) => `/comments/${id}`,
        add: '/comments',
        delete: (id: string) => `/comments/${id}`,
    },
    search: {
        search:`/search/movie?${api_key}`
    },
    users: {
        users: `/users`
    },
    auth: {
        login: '/auth/login',
        register: '/auth/register',
        refresh: '/auth/refresh'
    },
};


export {
    baseImageURL,
    baseVideoURL,
    baseUserURL,
    urls,
    notImg
};