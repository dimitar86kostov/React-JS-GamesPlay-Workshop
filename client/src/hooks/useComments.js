import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const commentCreateHandler = (userId, comment) => commentsAPI.create(userId, comment);

    return commentCreateHandler;
}

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(gameId);

            setComments(result);
        })();
    }, [gameId]);

    return [
        comments,
        setComments
    ];
}