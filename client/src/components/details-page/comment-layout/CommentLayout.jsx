export default function CommentLayout({ commentData }) {
    return (
        <li className="comment">
            <p>{commentData.comment.comment}</p>
        </li>
    );
}