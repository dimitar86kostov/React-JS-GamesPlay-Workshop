import { useEffect, useState } from 'react';
import gamesAPI from '../../api/games-api';
import GameItem from './gameItem/GameItem';

export default function Catalog() {
    const [games, setGames] = useState([]);
    console.log(games);

    useEffect(() => {
        (async () => {
            try {
                const result = await gamesAPI.getAll();
                setGames(result);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}

            {games.length > 0 ?
                games.map(game => <GameItem key={game._id} {...game} />)
                : <h3 className="no-articles">No articles yet</h3>
            }


        </section>
    );
}