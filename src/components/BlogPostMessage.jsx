import { Link } from 'react-router-dom';
import { createBlogExcerpt } from '../utils/formatting';
import styles from '../styles/BlogPost.module.scss';

export default function BlogPostMessage({ id, message, excerpt }) {
  return (
    <p className={`${!excerpt ? 'whitespace-pre-line' : ''} max-w-prose text-lg`}>
      {excerpt ? createBlogExcerpt(message, 50) : message}{' '}
      {excerpt && (
        <Link to={`/post/${id}`}>
          <span className={styles.expand}>...read more</span>
        </Link>
      )}
    </p>
  );
}
