import { useEffect, useState } from "react";
import GameLayout from "../game-layout/GameLayout";

export default function HomePage() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc');
                const gamesData = await response.json();

                setGames(gamesData);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {games.map((game) => <GameLayout key={game._id} game={game} />)}

                {games.length == 0 && <p className="no-articles">No games yet</p>}

            </div>
        </section>
    );
}