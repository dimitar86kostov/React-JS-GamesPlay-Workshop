import * as request from './requester';

const BASE_URL = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
    const response = await request.get(BASE_URL);

    const result = Object.values(response);

    return result

};

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

const gamesAPI = {
    getAll,
    getOne
};

export default gamesAPI;