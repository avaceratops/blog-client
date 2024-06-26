import styles from '../styles/BlogPost.module.scss';

export default function BlogPostTitle({ title }) {
  return <h2 className={styles.title}>{title}</h2>;
}
