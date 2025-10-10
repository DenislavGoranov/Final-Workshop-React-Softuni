import { create } from "../api/comment-api";

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