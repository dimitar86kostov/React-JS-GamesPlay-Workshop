import useFetch from '../../hooks/useFetch';
import Spinner from '../spinner/Spinner';
import GameItem from './gameItem/GameItem';

export default function Catalog() {

    const { data, isFetching, refetch } = useFetch("http://localhost:3030/jsonstore/games", []);

    const games = Object.values(data)
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}

            {isFetching
                ? <Spinner />
                : games.map(game => <GameItem key={game._id} {...game} refetch={refetch} />)
                // {/* : <h3 className="no-articles">No articles yet</h3> */}
            }


        </section>
    );
}