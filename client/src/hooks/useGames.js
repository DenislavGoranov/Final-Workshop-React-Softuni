import { useEffect, useState } from "react";

import { getAll, getOne } from "../api/games-api";

export function useGetAllGames() {
    const [games, setGames] = useState([]);
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const gamesData = await getAll();

                    setGames(gamesData);
                } catch (err) {
                    console.log(err.message);
                }
            }
            fetchData();
        }, [])

    return [
        games,
    ]
}

export function useGetOneGame(gameId) {
    const [gameData, setGameData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const data = await getOne(gameId);
            setGameData(data);
        }
    fetchData();
    }, [])

    return [
        gameData
    ]
}