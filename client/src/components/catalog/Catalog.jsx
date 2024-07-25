import useFetch from '../../hooks/useFetch';
import { useGetAllGames } from '../../hooks/useGames';
import Spinner from '../spinner/Spinner';
import GameItem from './gameItem/GameItem';

export default function Catalog() {
    const [games, setGames] = useGetAllGames()

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