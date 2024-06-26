import { DateTime } from 'luxon';
import styles from '../styles/BlogPost.module.scss';

export default function BlogPostMeta({ published, username }) {
  const date = DateTime.fromISO(published);

  return (
    <section className="xs:flex-col xs:justify-start flex justify-between gap-2">
      <div className="xs:text-3xl w-fit font-semibold uppercase">
        <p className="xs:block inline text-right">{date.day} </p>
        <p className="inline">{date.toFormat('MMM')} </p>
        <p className="xs:hidden inline">{date.year}</p>
      </div>

      <div className={styles.author}>
        <p>@{username}</p>
      </div>
    </section>
  );
}
