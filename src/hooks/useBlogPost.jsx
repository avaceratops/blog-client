import { useState, useEffect } from 'react';

const useBlogPost = (postId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/post/${postId}`);
        if (!response.ok) {
          throw new Error('server error');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [postId]);

  return { data, isLoading, isError };
};

export default useBlogPost;
