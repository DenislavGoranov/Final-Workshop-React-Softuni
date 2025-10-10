import { useNavigate, useParams } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useGetOneGame } from "../../hooks/useGames";
import { useCreateComment, useGetAllComments } from "../../hooks/useComment";
import CommentLayout from "./comment-layout/CommentLayout";

const initialValues = {
    comments: '',
}

export default function DetailsPage() {
    const createComment = useCreateComment();
    const navigate = useNavigate();
    const { gameId } = useParams();

    const [gameData] = useGetOneGame(gameId);
    const accessToken = localStorage.getItem('accessToken');
    const isOwner = !!accessToken;

    const { values, onChange, submitHandler } = useForm(initialValues, async (values) => {
        try {
            await createComment(gameId, values);

            navigate(`/games`)
        } catch (err) {
            console.log(err.message);
        }
    });

    const comments = useGetAllComments(gameId);

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
                    {comments.length > 0
                        ?
                        <ul>
                            {comments.map(comment => <CommentLayout commentData={comment} key={comment._id} />)}
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