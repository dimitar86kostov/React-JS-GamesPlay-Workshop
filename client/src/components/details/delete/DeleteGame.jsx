import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gamesAPI from "../../../api/games-api";


export default function DeleteGame() {
    const [game, setGame] = useState([]);
    const { gameId } = useParams();
    // const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const game = await gamesAPI.getOne(gameId);
            setGame(game);
        })();
    }, []);

    return (
        <section id="game-delete">
            <h1>Game Deletion</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    ARE U SURE U WANT TO DELETE IT?
                </p>
                {/* Bonus ( for Guests and Users ) */}

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <a href="#" className="button">
                        Cancel
                    </a>
                    <Link to={`/${gameId}/delete`}
                        className="button"
                    // onSubmit={() => {deleteHandler()}}
                    >
                        Delete
                    </Link>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}

        </section>
    );
}