import requester from "./requester"

const BASE_URL = `http://localhost:3030/data/comments`

export const create = (gameId, comment) => {
    const result = requester.post(BASE_URL, {gameId, comment});

    return result;
}