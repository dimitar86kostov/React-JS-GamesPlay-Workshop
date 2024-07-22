import { useEffect, useState } from "react";

export default function useFetch(url, initData) {
    const [data, setData] = useState(initData);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleFetch, setToggleFetch] = useState(false);

    useEffect(() => {

        const abortController = new AbortController();
        setIsFetching(true);

        (
            async () => {
                const response = await fetch(url, { signal: abortController.signal });
                const result = await response.json();

                // setData(Object.values(result));
                setData(result);
                setIsFetching(false);
            }
        )();

        return () => abortController.abort();
    }, [url, toggleFetch]);

    const refetch = () => {
        setToggleFetch(state => !state);
    };

    return {
        data,
        isFetching,
        refetch
    };
}