import BlogPostMeta from './BlogPostMeta';
import BlogPostMetaFull from './BlogPostMetaFull';
import BlogPostTitle from './BlogPostTitle';
import BlogPostMessage from './BlogPostMessage';

export default function BlogPost({ post, excerpt }) {
  return (
    <article className="xs:flex-row xs:gap-4 flex flex-col gap-1">
      {excerpt && (
        <BlogPostMeta published={post.timestamps.published} username={post.author.username} />
      )}

      <section>
        <BlogPostTitle title={post.title} />
        {!excerpt && (
          <BlogPostMetaFull published={post.timestamps.published} username={post.author.username} />
        )}
        <BlogPostMessage id={post._id} message={post.message} excerpt={excerpt} />
      </section>
    </article>
  );
}
