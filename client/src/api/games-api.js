import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/games'

export const getAll = () => {
    const result = requester.get(`${BASE_URL}/?sortBy=_createdOn%20desc`);

    return result;
}

export const getRecent = () => {
    const result = requester.get(`${BASE_URL}/?sortBy=_createdOn%20desc&distinct=category`);

    return result;
}

export const getOne = (gameId) => {
    const result = requester.get(`${BASE_URL}/${gameId}`);

    return result;
}

export const postGame = (gameData) => {
    const result = requester.post(BASE_URL, gameData);

    return result;
}