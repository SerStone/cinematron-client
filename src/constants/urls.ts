const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const comments = '/comments';
const albums = '/albums';
const posts = '/posts';
const urls = {
    posts: {
        posts,
        byId: (id: string): string => `${posts}/${id}`
    },
    users: {
        users,
        byId: (id: string): string => `${users}/${id}`
    },
    comments: {
        comments,
        byId: (id: string): string => `${comments}/${id}`
    },
    albums: {
        albums,
        byId: (id: string): string => `${albums}/${id}`
    }
}

export {
    baseURL,
    urls
}