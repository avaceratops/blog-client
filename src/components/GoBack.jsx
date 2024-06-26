import { Link } from 'react-router-dom';
import styles from '../styles/BlogPost.module.scss';

export default function GoBack() {
  return (
    <Link to="/" className={styles.back}>
      go back
    </Link>
  );
}
