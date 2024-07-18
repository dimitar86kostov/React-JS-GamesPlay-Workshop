import * as request from './requester';

const BASE_URL = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
    const response = await request.get(BASE_URL);

    const result = Object.values(response);

    return result

};

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

export const createGame = (createdGame) => request.post(BASE_URL, createdGame);

export const deleteGame = (gameId) => request.del(BASE_URL, gameId)

const gamesAPI = {
    getAll,
    getOne,
    createGame,
    deleteGame
};

export default gamesAPI;