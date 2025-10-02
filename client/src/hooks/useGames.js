import { useEffect, useState } from "react";

import { getAll } from "../api/games-api";

export default function useGames() {
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