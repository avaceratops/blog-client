import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentForm({ handleAddComment }) {
  const { postId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/post/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrors(data.errors);
      } else {
        setErrors([]);
        handleAddComment(data.comment);
        setFormData({ name: '', message: '' });
      }
    } catch (err) {
      console.error('Error adding comment');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="name">
        Your name
        <input
          value={formData.name}
          onChange={handleChange}
          className="mt-0.5 block w-full max-w-prose rounded bg-neutral-700 p-2"
          type="text"
          name="name"
          id="name"
          required
        />
      </label>

      <label htmlFor="message">
        Write a comment
        <textarea
          value={formData.message}
          onChange={handleChange}
          className="mt-0.5 block w-full max-w-prose resize-none rounded bg-neutral-700 p-2"
          name="message"
          id="message"
          rows={4}
          required
        ></textarea>
      </label>
      <button
        className="self-start rounded border border-neutral-500 px-4 py-2 hover:bg-neutral-700"
        type="submit"
      >
        Submit
      </button>

      {errors.length > 0 && (
        <section>
          <ul className="list-inside list-disc text-red-500">
            {errors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        </section>
      )}
    </form>
  );
}
