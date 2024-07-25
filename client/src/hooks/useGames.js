import { useState } from "react";
import gamesAPI from "../api/games-api";

export function useGetAllGames() {
    const [games, setGames] = useState({});

    useEffect(() => {

        setIsFetching(true);

        (
            async () => {
                const result = await gamesAPI.getAll();

                setGames(result); 
            }
        )()
    });
}