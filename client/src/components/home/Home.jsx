import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api";

export default function Home() {
    const [error, setError] = useState('');
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const games = await gamesAPI.getAll();
                setLatest(games);

            } catch (err) {
                setError(err.message);
            }
        })();
    }, []);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>

            <img src="/images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {/* Display div: with information about every game (if any) */}

                {latest.length > 0 ?
                    latest.reverse().slice(0, 3).map(game =>
                        <div className="game" key={game._id}>
                            <div className="image-wrap">
                                <img src={game.imageUrl} />
                            </div>
                            <h3>{game.title}</h3>
                            <div className="rating">
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div className="data-buttons">
                                <a href={`/catalog/${game._id}/details`} className="btn details-btn">
                                    Details
                                </a>
                            </div>
                        </div>
                    )
                    : <p className="no-articles">No games yet</p>
                }

            </div>
        </section>
    );
}