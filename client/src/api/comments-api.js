import * as request from '../api/requester'
const BASE_URL = `http://localhost:3030/data/comments`;


const create = (gameId, text) => request.post(BASE_URL, { gameId, text });


const getAll = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`
    })

    console.log(`${BASE_URL}?${params.toString()}`);

    return request.get(`${BASE_URL}?${params.toString()}`);
};

const commentsAPI = {
    create,
    getAll
}

export default commentsAPI