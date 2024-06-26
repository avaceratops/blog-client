import { DateTime } from 'luxon';

export default function Comment({ comment }) {
  const now = DateTime.now();
  const creationDate = DateTime.fromISO(comment.timestamps.created);
  const timeSince = creationDate.toRelative({ base: now });

  return (
    <article>
      <p className="flex gap-3 text-neutral-400">
        <span>{comment.name}</span> <span className="font-light text-neutral-500">{timeSince}</span>
      </p>
      <p>{comment.message}</p>
    </article>
  );
}
