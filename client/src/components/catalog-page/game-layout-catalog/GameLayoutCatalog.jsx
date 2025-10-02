import { Link } from "react-router-dom";

export default function GameLayoutCatalog({ game }) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} />
                <h2>{game.title}</h2>
                <h4>{game.category}</h4>
                <Link to={`/games/${game._id}`} className="details-button">Details</Link>
            </div>

        </div>

    );
}