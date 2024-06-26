import BlogPost from '../components/BlogPost';
import useBlogPosts from '../hooks/useBlogPosts';

export default function Posts() {
  const { data, isLoading, isError } = useBlogPosts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  if (data.posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return (
    <section className="flex flex-col gap-12">
      {data.posts.map((post) => (
        <BlogPost key={post._id} post={post} excerpt={true} />
      ))}
    </section>
  );
}
