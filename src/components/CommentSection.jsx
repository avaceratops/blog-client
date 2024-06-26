import Comment from '../components/Comment';
import CommentForm from './CommentForm';

export default function CommentSection({ comments, handleAddComment }) {
  return (
    <section className="mt-8 flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-neutral-400">
        {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
      </h3>

      <CommentForm handleAddComment={handleAddComment} />

      <div className="mt-4 flex flex-col gap-2">
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
