import { DateTime } from 'luxon';

export default function BlogPostMetaFull({ published, username }) {
  const date = DateTime.fromISO(published);

  return (
    <section className="-mt-3 mb-4 font-extralight text-neutral-400">
      <p>written by @{username}</p>
      <p>published on {date.toLocaleString(DateTime.DATE_FULL)}</p>
    </section>
  );
}
