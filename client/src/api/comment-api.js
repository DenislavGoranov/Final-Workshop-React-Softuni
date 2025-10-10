import requester from "./requester"

const BASE_URL = `http://localhost:3030/data/comments`

export const getAll = (gameId) => {
    const result = requester.get(`${BASE_URL}?where=gameId%3D%22${gameId}%22`);

    return result;
}

export const create = (gameId, comment) => {
    const result = requester.post(BASE_URL, {gameId, comment});

    return result;
}