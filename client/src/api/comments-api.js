import * as request from '../api/requester'
const buildURL = (gameId) => `http://localhost:3030/jsonstore/games/${gameId}/comments`;

const create = (gameId, username, comment) => {

    const response = request.post(buildURL(gameId), { username, comment });

    const result = Object.values(response);

    return result;
};

export {
    create
}