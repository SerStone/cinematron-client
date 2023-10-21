export interface IComment {
    _id: string
    userId: string;
    userName: string;
    movieId: string;
    text: string;
    createdAt: Date;
}