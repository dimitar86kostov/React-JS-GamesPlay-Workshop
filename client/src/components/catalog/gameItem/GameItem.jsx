import { Link, NavLink } from 'react-router-dom';

export default function GameItem({
    _id,
    title,
    category,
    imageUrl,
    refetch,
}) {
    return (

        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/catalog/${_id}/details`} className="details-button">
                    Details
                </Link>
            </div>
        </div>

        //  <button onClick={refetch}>refresh</button> 

    );
}