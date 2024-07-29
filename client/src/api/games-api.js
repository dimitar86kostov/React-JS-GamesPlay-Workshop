import * as request from './requester';

const BASE_URL = "http://localhost:3030/data/games";

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    // const games = Object.values(result);

    return result

};

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

export const createGame = (createdGame) => request.post(BASE_URL, createdGame);

// export const deleteGame = (gameId) => request.del(BASE_URL, gameId)

const gamesAPI = {
    getAll,
    getOne,
    createGame,
};

export default gamesAPI;