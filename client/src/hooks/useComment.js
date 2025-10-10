import { useEffect, useState } from "react";
import { create, getAll } from "../api/comment-api";

export const useGetAllComments = (gameId) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const result = await getAll(gameId);
                setComments(result);
            } catch (err) {
            console.log(err.message);
            }
        }
        if (gameId) {
            fetchComments();
        }
    }, [gameId])
    return comments;
}

export const useCreateComment = () => {
    const createComment = async (gameId, comment) => {
        try {
            const result = await create(gameId, comment);
            return result;
        } catch (err) {
            console.log(err.message);
        }
    }
    return createComment;
}