import { useState } from "react";
import gamesAPI from "../../api/games-api";
import commentsAPI from '../../api/comments-api'
import { useParams } from "react-router-dom";
import { useGetOneGames } from "../../hooks/useGames";

export default function Details() {
    const { gameId } = useParams();
    const [game, setGame] = useGetOneGames(gameId);
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');


    async function commentSubmitHandler(e) {
        e.preventDefault();

        const newComment = await commentsAPI.create(gameId, username, comment);

        // Advance technique without request to the server

        // setGame(prevState => ({
        //     ...prevState,
        //     comments: {
        //         ...prevState.comments,
        //         [newComment._id]: newComment,
        //     }
        // }))
        gamesAPI.getAll(gameId);

        setUsername('');
        setComment('');
    }

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
                        {game.comments
                            ?
                            Object.values(game.comments).map(comment =>
                                <li className="comment" key={comment.comment}>
                                    <p>{comment.username}: {comment.comment}</p>
                                </li>)
                            : <p className="no-comment">No comments.</p>
                        }
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
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Митьо..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}