import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetOneGames } from "../../hooks/useGames";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";

const initValues = {
    comment: '',
}

export default function Details() {
    const { gameId } = useParams();
    const [game] = useGetOneGames(gameId);
    const createComment = useCreateComment();
    const [comments, setComments] = useGetAllComments(gameId);
    const { isAuthenticated } = useContext(AuthContext);

    const { changeHandler, submitHandler, values } = useForm(initValues, ({ comment }) => {
        createComment(gameId, comment)
    })

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>

                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        {comments.map(comment =>
                            <li className="comment" key={comment.comment}>
                                <p>Username: {comment.text}</p>
                            </li>)
                        }
                        {comments.length == 0 && <p className="no-comment">No comments.</p>}
                    </ul>

                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                {/* <div className="buttons">
                    <a href="#" className="button">
                        Edit
                    </a>
                    <Link to={`/catalog/${gameId}/delete`}
                        className="button"
                    >
                        Delete
                    </Link>
                </div> */}
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            {isAuthenticated &&
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>

                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            value={values.comment}
                            onChange={changeHandler}
                        />
                        <input
                            className="btn submit"
                            type="submit"
                            defaultValue="Add Comment"
                        />
                    </form>
                </article>
            }
        </section>
    );
}
// Advance technique without request to the server

// setGame(prevState => ({
//     ...prevState,
//     comments: {
//         ...prevState.comments,
//         [newComment._id]: newComment,
//     }
// }))