import { useParams } from "react-router-dom";
import { useGetOneGame } from "../../hooks/useGames";


export default function DetailsPage() {
    const { gameId } = useParams();
    const [gameData] = useGetOneGame(gameId);
    const accessToken = localStorage.getItem('accessToken');
    const isOwner = true;
    const comments = 2;
    return (
        < section id="game-details" >
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={gameData.imageUrl} />
                    <h1>{gameData.title}</h1>
                    <span className="levels">MaxLevel: {gameData.maxLevel}</span>
                    <p className="type">{gameData.category}</p>
                </div>

                <p className="text">
                    {gameData.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    {comments
                        ?
                        <ul>
                            {/* <!-- list all comments for current game (If any) --> */}
                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>
                        :
                        <p className="no-comment">No comments.</p>
                    }
                </div>

                {isOwner &&
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                }
            </div>

            {accessToken &&
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form">
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            }
        </section >
    );
}