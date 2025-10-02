import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/games'

export const getAll = async () => {
    const result = await requester.get(`${BASE_URL}/?sortBy=_createdOn%20desc`);

    return result;
}

export const getRecent = async () => {
    const result = await requester.get(`${BASE_URL}/?sortBy=_createdOn%20desc&distinct=category`);

    return result;
}