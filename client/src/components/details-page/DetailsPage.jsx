import { useParams } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useGetOneGame } from "../../hooks/useGames";
import { useCreateComment } from "../../hooks/useComment";

const initialValues = {
    comment: '',
}

export default function DetailsPage() {
    const { gameId } = useParams();
    const [gameData] = useGetOneGame(gameId);
    const accessToken = localStorage.getItem('accessToken');
    // TODO: find a way to check if is the owner of the game
    const isOwner = true;
    // TODO: find a way to check how much comments we got about this game
    let comments = 2;
    const createComment = useCreateComment();
    const { values, onChange, submitHandler } = useForm(initialValues, async (values) => {
        try {
            const result = await createComment(gameId, values);
            console.log(result);
        } catch (err) {
            console.log(err.message);
        }
    })

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
                    <form className="form" onSubmit={submitHandler}>
                        <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={onChange}></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            }
        </section >
    );
}